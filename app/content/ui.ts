import type { Locale } from "../i18n";

/*
 * Interface chrome: the words that belong to the site furniture rather than to
 * any one page. Navigation, footer, buttons, case-study section labels,
 * screen-reader labels.
 *
 * TRANSLATION POLICY (agreed with Felix)
 * Words that stay English in both versions, because Vietnamese readers in this
 * industry already use them and translating them would read as clumsy:
 *   - navigation labels (Home, About, Work, Experience, Focus Areas, Contact)
 *   - "CV", "LinkedIn", "Email"
 *   - capability filters (Strategy & Research, Creative Content, ...)
 *   - role titles, brand names and project titles (these live in data.ts)
 *   - the footer brand line "Follow the North Star"
 * Everything that is a sentence rather than a term does get translated.
 *
 * To change a word, edit the string. `en` and `vi` must keep the same keys;
 * TypeScript enforces that.
 */

const en = {
  skipToContent: "Skip to main content",

  nav: {
    home: "Home",
    about: "About",
    work: "Work",
    experience: "Experience",
    interests: "Focus Areas",
    contact: "Contact",
  },
  navAria: "Primary navigation",
  brandHomeAria: "Felix Phan home",
  menu: "Menu",
  viewCv: "View CV",

  languageAria: "Language",
  /** Tooltip on the toggle button for the language being switched to. */
  switchTo: "Switch to Vietnamese",

  footerTagline: "Follow the North Star",

  // Work index
  workMetaTitle: "Work",
  workMetaDescription:
    "Explore Felix Phan's projects across strategy, scriptwriting, production, events, sustainability and content.",
  workEyebrow: "The work",
  /** {count} is replaced with the number of feature cases. */
  workDeck: "Start with the {count} feature cases or filter by the capability you need.",
  workAsideLabel: "selected projects",
  workIndexAria: "Project index",
  filterBarAria: "Filter projects by capability",
  /** {shown} and {total} are replaced with numbers. */
  resultCount: "Showing {shown} of {total} projects",

  // Cards
  roleLabel: "Role",

  // Case studies
  caseTensionEyebrow: "The tension",
  caseApproachEyebrow: "The approach",
  caseApproachTitle: "Turn the problem into a structure",
  caseOutputEyebrow: "The output",
  caseOutputTitle: "Make the idea concrete",
  caseSignificanceEyebrow: "The significance",
  caseSignificanceTitle: "What the work can prove",
  caseDemonstratesEyebrow: "What this demonstrates",
  caseCapabilityTitle: "The capability this proves",
  caseLinksLabel: "Links",
  caseFastEvidenceAria: "Fast evidence",
  caseNavAria: "Project navigation",
  casePrevious: "Previous project",
  caseNext: "Next project",
  caseReturnTo: "Return to",
  caseAllWork: "All work",
  /** {title} is replaced with the project or figure title. */
  opensInNewTab: "{title}. Opens in a new tab.",
  opensFullSize: "{title}. Opens full size in a new tab.",

  // Case classification labels (the eyebrow above a case-study title)
  caseLabelFeature: "Feature case",
  caseLabelResearch: "Research case",
  caseLabelConcept: "Concept development case",
  caseLabelEnhancedProfessional: "Enhanced professional case",
  caseLabelEnhanced: "Enhanced case",
  caseLabelEvidence: "Evidence case",
  caseLabelSupporting: "Supporting case",

  // Media placeholder
  placeholderLabel: "Primary visual not published",
};

/*
 * Vietnamese. Terms deliberately left in English are marked with a short note
 * so nobody "fixes" them by mistake later.
 */
const vi: typeof en = {
  skipToContent: "Bỏ qua, tới nội dung chính",

  // Kept in English on purpose: these six labels are universally understood and
  // Felix asked for them to stay consistent across both versions.
  nav: {
    home: "Home",
    about: "About",
    work: "Work",
    experience: "Experience",
    interests: "Focus Areas",
    contact: "Contact",
  },
  navAria: "Điều hướng chính",
  brandHomeAria: "Felix Phan, về trang chủ",
  menu: "Menu",
  viewCv: "Xem CV",

  languageAria: "Ngôn ngữ",
  switchTo: "Chuyển sang tiếng Anh",

  // Kept in English on purpose: this is the brand line, not a sentence.
  footerTagline: "Follow the North Star",

  workMetaTitle: "Work",
  workMetaDescription:
    "Các dự án của Felix Phan trong chiến lược, biên kịch, sản xuất, sự kiện, phát triển bền vững và nội dung.",
  workEyebrow: "Các dự án",
  workDeck: "Bắt đầu với {count} case tiêu biểu, hoặc lọc theo năng lực bạn đang cần.",
  workAsideLabel: "dự án tuyển chọn",
  workIndexAria: "Danh mục dự án",
  filterBarAria: "Lọc dự án theo năng lực",
  resultCount: "Đang hiện {shown} trên {total} dự án",

  roleLabel: "Vai trò",

  caseTensionEyebrow: "Bài toán",
  caseApproachEyebrow: "Cách tiếp cận",
  caseApproachTitle: "Biến vấn đề thành một cấu trúc",
  caseOutputEyebrow: "Kết quả",
  caseOutputTitle: "Đưa ý tưởng thành thứ cụ thể",
  caseSignificanceEyebrow: "Ý nghĩa",
  caseSignificanceTitle: "Dự án này chứng minh được điều gì",
  caseDemonstratesEyebrow: "Điều dự án này cho thấy",
  caseCapabilityTitle: "Năng lực được chứng minh",
  caseLinksLabel: "Liên kết",
  caseFastEvidenceAria: "Bằng chứng nhanh",
  caseNavAria: "Điều hướng dự án",
  casePrevious: "Dự án trước",
  caseNext: "Dự án tiếp theo",
  caseReturnTo: "Quay lại",
  caseAllWork: "Tất cả dự án",
  opensInNewTab: "{title}. Mở trong tab mới.",
  opensFullSize: "{title}. Mở ảnh đầy đủ trong tab mới.",

  caseLabelFeature: "Case tiêu biểu",
  caseLabelResearch: "Case nghiên cứu",
  caseLabelConcept: "Case phát triển concept",
  caseLabelEnhancedProfessional: "Case chuyên môn mở rộng",
  caseLabelEnhanced: "Case mở rộng",
  caseLabelEvidence: "Case có bằng chứng",
  caseLabelSupporting: "Case bổ trợ",

  placeholderLabel: "Chưa công bố hình ảnh chính",
};

export type UiCopy = typeof en;

const UI: Record<Locale, UiCopy> = { en, vi };

export function getUi(locale: Locale): UiCopy {
  return UI[locale];
}

/** Fill {placeholders} in a UI string: fill(ui.resultCount, { shown: 3, total: 25 }) */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match,
  );
}
