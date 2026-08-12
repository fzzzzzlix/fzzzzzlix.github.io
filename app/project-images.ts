import { asset } from "./base-path";

type ImageInfo = { src: string; fit: "cover" | "contain"; poster?: string };

const RAW_IMAGES: Record<string, ImageInfo> = {
  P01: { src: "/images/p01-qnh.jpg", fit: "cover" },
  P02: { src: "/images/p02-hero-kv.jpg", fit: "cover" },
  P03: { src: "/images/p03-pnj.jpg", fit: "cover" },
  P04: { src: "/images/p04-energy.jpg", fit: "cover" },
  P05: { src: "/images/p05-buv.jpg", fit: "cover" },
  P06: { src: "/images/p06-hapacol.jpg", fit: "cover" },
  P07: { src: "/images/p07-boardgame.jpg", fit: "cover" },
  P10: { src: "/images/p10-kim-bts.jpg", fit: "cover" },
  P11: { src: "/images/p11-gnkn.jpg", fit: "cover" },
  P12: { src: "/images/p12-folk-western.jpg", fit: "cover" },
  P13: { src: "/images/p13-maggi.jpg", fit: "cover" },
  P14: { src: "/images/p14-magazine.jpg", fit: "cover" },
  P16: { src: "/images/p16-patriotic-rap.jpg", fit: "cover" },
  P17: { src: "/images/p17-flowor.jpg", fit: "contain" },
  P18: { src: "/images/p18-google-doodle.gif", fit: "cover", poster: "/images/p18-google-doodle-poster.jpg" },
  P20: { src: "/images/p20-tres.jpg", fit: "cover" },
  P21: { src: "/images/p21-vinamilk.jpg", fit: "cover" },
  P22: { src: "/images/p22-accept-differences.jpg", fit: "cover" },
  P25: { src: "/images/p25-empacts.jpg", fit: "cover" },
  P26: { src: "/images/cases/p26/p26-iec-leaders.jpg", fit: "cover" },
  P30: { src: "/images/cases/p30/p30-map-the-system.jpg", fit: "contain" },
  P31: { src: "/images/p31-hero.jpg", fit: "cover" },
  P32: { src: "/images/cases/p32/Press conference hero.png", fit: "cover" },
  P33: { src: "/images/cases/p33/p33-media-research.jpg", fit: "cover" },
  P34: { src: "/images/cases/p34/PRRE cover.jpg", fit: "cover" },
};

// Prefix every image src with the deploy base path so plain <img> tags resolve
// correctly on GitHub Pages. BASE_PATH is empty for the root user-site.
export const REAL_IMAGES: Record<string, ImageInfo> =
  Object.fromEntries(
    Object.entries(RAW_IMAGES).map(([id, info]) => [
      id,
      { ...info, src: asset(info.src), ...(info.poster ? { poster: asset(info.poster) } : {}) },
    ]),
  );
