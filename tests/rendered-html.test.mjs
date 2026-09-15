import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function fetchHtml(path) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
  return response;
}

test("home page renders as HTML", async () => {
  const response = await fetchHtml("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
});

test("production HTML carries no development preview marker", async () => {
  const response = await fetchHtml("/");
  const html = await response.text();
  assert.doesNotMatch(
    html,
    developmentPreviewMeta,
    "codex-preview=development must never ship to production",
  );
});

test("production HTML carries canonical portfolio metadata", async () => {
  const response = await fetchHtml("/");
  const html = await response.text();
  assert.match(html, /<title>[^<]*Felix Phan[^<]*<\/title>/i);
  assert.match(html, /property=["']og:title["']/i);
});

/*
 * Language versions. English lives at the root and Vietnamese under /vi.
 * These guard the pairing: every page must exist in both trees, must declare
 * hreflang alternates pointing at each other, and must mark the Vietnamese
 * frame as Vietnamese.
 */
const PAGE_PATHS = ["/", "/about", "/work", "/experience", "/interests", "/contact"];

for (const path of PAGE_PATHS) {
  const viPath = path === "/" ? "/vi" : `/vi${path}`;

  test(`${viPath} renders as HTML`, async () => {
    const response = await fetchHtml(viPath);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  });

  test(`${viPath} is marked as Vietnamese`, async () => {
    const html = await (await fetchHtml(viPath)).text();
    assert.match(html, /lang="vi"/i, `${viPath} must carry lang="vi"`);
  });

  test(`${path} and ${viPath} declare each other as language alternates`, async () => {
    for (const p of [path, viPath]) {
      const html = await (await fetchHtml(p)).text();
      assert.match(html, /hreflang="en"/i, `${p} must declare an English alternate`);
      assert.match(html, /hreflang="vi"/i, `${p} must declare a Vietnamese alternate`);
    }
  });
}

test("the Vietnamese home page is actually in Vietnamese", async () => {
  const html = await (await fetchHtml("/vi")).text();
  // A Vietnamese-only string from app/content/home.vi.ts.
  assert.match(html, /Sẵn sàng cho vị trí full-time/);
});

test("the English pages carry no Vietnamese interface text", async () => {
  for (const path of PAGE_PATHS) {
    const html = await (await fetchHtml(path)).text();
    assert.doesNotMatch(html, /Đang hiện |Dự án trước|Sẵn sàng cho vị trí/, `${path} leaked Vietnamese chrome`);
  }
});

test("a project case study exists in both languages", async () => {
  for (const path of ["/work/mua-ha-cua-chung-toi", "/vi/work/mua-ha-cua-chung-toi"]) {
    const response = await fetchHtml(path);
    assert.equal(response.status, 200, `${path} must render`);
  }
});
