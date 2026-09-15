import type { InterestsCopy } from "./interests.en";

/*
 * Focus Areas page copy, Vietnamese. Mirrors app/content/interests.en.ts.
 * `projects` ids and image `src` paths are structural, they must stay
 * identical to the English file.
 */
export const interests: InterestsCopy = {
  meta: {
    title: "Focus Areas",
    description: "Công việc của Felix Phan quanh phát triển bền vững, ESG, CSR, văn hoá và vận động xã hội.",
  },
  hero: {
    eyebrow: "Focus Areas",
    title: "Những chủ đề Felix luôn quay trở lại",
  },
  cards: [
    { title: "Phát triển bền vững", text: "Phát triển bền vững, ESG, CSR và hỗ trợ doanh nghiệp xã hội, từ EMPACTS tới white paper về bất bình đẳng giáo dục.", projects: ["P25", "P17", "P04"], images: [
      { src: "/images/Focus area/Focus_Sustainable Development 1_Ha Giang trip.jpg", alt: "Felix Phan trong chuyến đi thực địa Hà Giang", caption: "Chuyến thực địa Hà Giang" },
      { src: "/images/Focus area/Focus_Sustainable Development 2_Pitch.jpg", alt: "Felix Phan pitch một dự án phát triển bền vững", caption: "Pitch dự án" },
    ] },
    { title: "Văn hoá & Truyền thông", text: "Di sản Việt Nam, văn hoá đương đại, bản sắc, ký ức tập thể, và cách truyền thông tái hiện những điều đó.", projects: ["P11", "P16", "P33"], images: [
      { src: "/images/Focus area/Focus_Culture & Media 1_Felix is a videographer.jpg", alt: "Felix Phan trong vai trò videographer", caption: "Đứng máy trong vai trò videographer" },
      { src: "/images/Focus area/Focus_Culture & Media_Felix at a cutural branding concert.jpg", alt: "Felix Phan tại một concert branding văn hoá", caption: "Tại một concert branding văn hoá" },
    ] },
    { title: "Vận động xã hội", text: "Hoà nhập, đa dạng, quyền và sức khoẻ tinh thần của sinh viên, thực hiện qua các sự kiện và vai trò lãnh đạo sinh viên.", projects: ["P22", "P30", "P14"], images: [
      { src: "/images/Focus area/Focus_Social advocacy 2_Pride week host.jpg", alt: "Felix Phan dẫn chương trình Pride Week", caption: "Dẫn chương trình Pride Week" },
      { src: "/images/Focus area/Focus_Social advocacy 2_Petals of love charity fundraising.jpeg", alt: "Felix Phan tại chương trình gây quỹ từ thiện Petals of Love", caption: "Gây quỹ từ thiện Petals of Love" },
    ] },
  ],
};
