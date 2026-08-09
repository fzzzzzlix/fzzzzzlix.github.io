import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function fetchHomeHtml() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
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
  const response = await fetchHomeHtml();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
});

test("production HTML carries no development preview marker", async () => {
  const response = await fetchHomeHtml();
  const html = await response.text();
  assert.doesNotMatch(
    html,
    developmentPreviewMeta,
    "codex-preview=development must never ship to production",
  );
});

test("production HTML carries canonical portfolio metadata", async () => {
  const response = await fetchHomeHtml();
  const html = await response.text();
  assert.match(html, /<title>[^<]*Felix Phan[^<]*<\/title>/i);
  assert.match(html, /property=["']og:title["']/i);
});
