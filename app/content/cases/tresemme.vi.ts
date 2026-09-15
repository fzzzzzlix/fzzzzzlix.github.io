import { tresemme as en, type TresemmeCopy } from "./tresemme.en";

/*
 * P20 TRESemmé Vietnam, Vietnamese case copy.
 * Spreads the English blocks so links, embeds and image paths are inherited.
 * Media terms stay in English: KOL, UGC, DOOH, pulsing, funnel, Fanpage Karma.
 * Numbers use Vietnamese separators (7.333.618.824), the source figures are
 * unchanged.
 */
export const tresemme: TresemmeCopy = {
  ...en,
  hero: {
    ...en.hero,
    title: "TRESemmé Vietnam",
    strip: [
      { value: "~60k", label: "người theo dõi TikTok (ảnh chụp thời điểm phân tích)" },
      { value: "3,3", unit: "%", label: "tỉ lệ tương tác bài đăng TikTok" },
      { value: "16", unit: "%", label: "tăng trưởng người theo dõi TikTok" },
      { value: "7,3 tỷ VND", label: "ngân sách media plan mô phỏng" },
    ],
  },
  diagnosis: {
    ...en.diagnosis,
    eyebrow: "Chẩn đoán",
    title: "Hiện diện mạnh không đồng nghĩa với kết nối mạnh",
    body: [
      "Bức tranh kênh của TRESemmé không đồng đều. Trong giai đoạn được phân tích, TikTok nổi bật với khoảng **60 nghìn người theo dõi**, **tỉ lệ tương tác bài đăng 3,3%** và **tăng trưởng người theo dõi 16%**, trong khi bức tranh chung trên Facebook, Instagram và YouTube kém thuyết phục hơn. Câu hỏi hoạch định không phải “làm sao để có thêm độ phủ?” mà là làm sao biến sự hiện diện thành một con đường mạch lạc đi từ chú ý tới mức độ liên quan của sản phẩm và niềm tin.",
      "Nhóm sử dụng dữ liệu Fanpage Karma cho TRESemmé và các đối thủ trên bốn nền tảng. Đây là các chỉ số mạng xã hội gắn với mốc thời gian cụ thể, không phải thước đo phổ quát về sức khoẻ thương hiệu.",
    ],
    platformAnalysisFigure: {
      ...en.diagnosis.platformAnalysisFigure,
      alt: "Biểu đồ phân tích đa nền tảng so sánh hiệu quả của TRESemmé trên TikTok, Facebook, Instagram và YouTube.",
      caption: "Phân tích đa nền tảng, giữ nguyên trục và nhãn của nguồn.",
      tag: "Báo cáo insight",
    },
    platformTableFigure: {
      ...en.diagnosis.platformTableFigure,
      alt: "Bảng chỉ số nền tảng liệt kê số người theo dõi, tỉ lệ tương tác và mức tăng trưởng của TRESemmé và các đối thủ.",
      caption: "Bảng chỉ số nền tảng gốc, các con số cũng đã được nêu trong phần chữ ở trên.",
      tag: "Báo cáo insight",
    },
    note: {
      label: "Giới hạn diễn giải",
      body: "Một cách đọc hữu ích là: sự bảo chứng của người nổi tiếng có thể rất hiện diện mà người tiêu dùng vẫn không nối được hình ảnh cá nhân đó trở lại giá trị sản phẩm một cách nhất quán. Đây được xem là một đứt gãy đã chẩn đoán ra và một giả thuyết, không phải một khẳng định nhân quả đã được chứng minh.",
    },
  },
  creatorSystem: {
    ...en.creatorSystem,
    eyebrow: "Hệ thống creator",
    title: "Dựng lại hệ thống creator theo vai trò",
    body: [
      "Kế hoạch đề xuất sắp xếp lại các creator theo việc họ phải làm gì trong funnel: độ phủ, độ tin cậy và niềm tin, thay vì coi mọi bài đăng KOL như một đơn vị media giống hệt nhau. Mỗi nền tảng nhận một định dạng khác nhau: cơ chế demo và challenge trên TikTok, vai trò review và kể chuyện ở nơi khác, cùng sự tham gia của creator hoặc stylist để việc sử dụng sản phẩm trở nên nhìn thấy được.",
    ],
    figure: {
      ...en.creatorSystem.figure,
      alt: "Chẩn đoán cách dùng KOL, ánh xạ creator vào các vai trò trong funnel gồm độ phủ, độ tin cậy và niềm tin.",
      caption: "Creator được ánh xạ vào vai trò trong funnel thay vì bị coi là các đơn vị media thay thế được cho nhau.",
      tag: "Chiến lược đề xuất",
    },
  },
  integratedPlan: {
    ...en.integratedPlan,
    eyebrow: "Kế hoạch tích hợp",
    title: "Thiết kế media như một hệ thống, không phải một danh sách",
    body: [
      "Ý tưởng **“Step up your hair game at home”** được mở rộng thành một kế hoạch tích hợp: UGC, một concept AI DOOH tương tác, activation offline, hoạt động của creator, và một lịch chạy theo giai đoạn kiểu pulsing, dồn áp lực vào đúng những thời điểm quan trọng thay vì rải đều ngân sách.",
    ],
    doohFigure: {
      ...en.integratedPlan.doohFigure,
      alt: "Bảng concept AI DOOH tương tác cho đề xuất media plan của TRESemmé.",
      caption: "Concept AI DOOH tương tác, một phần của đề xuất, không phải media đã chạy.",
      tag: "",
    },
    pulsingFigure: {
      ...en.integratedPlan.pulsingFigure,
      alt: "Lịch media theo kiểu pulsing và phân giai đoạn, thể hiện các đợt hoạt động trong kỳ kế hoạch.",
      caption: "Lịch pulsing dồn hoạt động vào từng giai đoạn trong kỳ kế hoạch.",
      tag: "",
    },
  },
  budget: {
    ...en.budget,
    eyebrow: "",
    title: "Ngân sách",
    body: [
      "Bảng ngân sách chi tiết có tổng **7.333.618.824 VND đã bao gồm GST**. Đây là bằng chứng hữu ích về năng lực hoạch định: nó cho thấy chiến lược đã được dịch thành từng dòng hạng mục và từng mốc thời gian. Đây là ngân sách media plan mô phỏng, không phải tiền Felix quản lý, và không phải một chiến dịch đã được thực thi.",
    ],
    stat: {
      label: "Ngân sách media plan mô phỏng",
      items: [
        { value: "7.333.618.824 VND", label: "tổng kế hoạch mô phỏng, đã gồm GST" },
        { value: "4", label: "nền tảng được chẩn đoán" },
        { value: "Pulsing", label: "lịch chạy theo giai đoạn" },
        { value: "Đề xuất", label: "học thuật, chưa thực thi" },
      ],
    },
    embed: {
      ...en.budget.embed,
      title: "Bộ slide đề xuất media plan TRESemmé Vietnam",
      fallbackLabel: "Mở media plan (Canva)",
    },
    note: {
      label: "Ranh giới",
      body: "Con số 7,3 tỷ VND là một đề xuất mô phỏng. Felix không quản lý, không chi và không kiểm soát ngân sách này.",
    },
  },
  mediaPlan: {
    ...en.mediaPlan,
    eyebrow: "",
    title: "Toàn bộ media plan",
    embed: {
      ...en.mediaPlan.embed,
      title: "File media plan TRESemmé Vietnam",
      fallbackLabel: "Mở media plan (Google Sheets)",
    },
  },
  demonstrates: {
    ...en.demonstrates,
    eyebrow: "Điều dự án này cho thấy",
    title: "Hoạch định media chiến lược, từ bằng chứng tới phân bổ",
    body: [
      "Nhìn lại, đây là dự án dạy tôi tư duy theo hệ thống thay vì theo từng bài đăng: bắt đầu từ điều dữ liệu thật sự nói ra, rồi theo nó đi suốt tới ai làm gì, vào lúc nào, với bao nhiêu tiền. Nó cũng dạy tôi một kiểu thành thật, rằng một bảng ngân sách tính tới từng đồng là bằng chứng của việc hoạch định, không phải của việc đã chi, và nói thẳng điều đó quan trọng hơn là nghe cho oai.",
    ],
    links: [
      { ...en.demonstrates.links[0], label: "Xem báo cáo insight" },
      { ...en.demonstrates.links[1], label: "Xem file media plan" },
    ],
  },
};
