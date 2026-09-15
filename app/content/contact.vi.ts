import type { ContactCopy } from "./contact.en";

/*
 * Contact page copy, Vietnamese. Mirrors app/content/contact.en.ts key for key.
 * `href` values are structural, they must stay identical to the English file.
 * Channel kinds (Email, Phone, LinkedIn) and "CV" stay in English.
 */
export const contact: ContactCopy = {
  meta: {
    title: "Contact",
    description: "Liên hệ Felix Phan cho các vị trí sáng tạo, chiến lược, truyền thông, phát triển bền vững, dự án, sự kiện và nội dung.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Một brief tử tế xứng đáng có một cuộc trò chuyện tử tế",
    deck: "Felix đang sẵn sàng cho các vị trí full-time trong chiến lược, storytelling và triển khai dự án, cùng những mảng truyền thông và nội dung liền kề.",
  },
  channels: [
    { kind: "Email", value: "felixphan.contact@gmail.com", href: "mailto:felixphan.contact@gmail.com" },
    { kind: "Điện thoại", value: "+84 936 647 704", href: "tel:+84936647704" },
    { kind: "LinkedIn", value: "linkedin.com/in/felixphan", href: "https://www.linkedin.com/in/felixphan/" },
  ],
  cv: {
    label: "Curriculum Vitae",
    title: "Xem CV",
    text: "",
    href: "https://drive.google.com/file/d/1Ea5Il96N4fVSFY9UZ8J2QdiIwhhIoTtA/view?usp=drive_link",
  },
};
