import { maggi as en, type MaggiCopy } from "./maggi.en";

/*
 * P13 MAGGI Recipe Solution, Vietnamese case copy.
 * Spreads the English blocks so links, embeds and image paths are inherited.
 * Only the words are overridden. Method terms stay in English: NVivo, insight,
 * TVC, storyboard, influencer, Authentic Convenience (the direction's name).
 */
export const maggi: MaggiCopy = {
  ...en,
  hero: {
    ...en.hero,
    title: "MAGGI Recipe Solution",
    descriptor: "Từ nghiên cứu tới thực thi",
    strip: [
      { value: "74", label: "bài đăng Facebook được phân tích" },
      { value: "755", label: "bình luận mã hoá trong NVivo" },
      { value: "82", label: "đánh giá trên sàn thương mại điện tử" },
      { value: "2", label: "giai đoạn: nghiên cứu → sáng tạo" },
    ],
  },
  researchQuestion: {
    ...en.researchQuestion,
    eyebrow: "Câu hỏi nghiên cứu",
    title: "Khi độ nhận biết không biến thành sự yêu thích",
    body: [
      "Câu hỏi không phải là người ta có biết MAGGI hay không. Câu hỏi là vì sao một thương hiệu quen thuộc vẫn có thể tạo ra một kiểu thảo luận yếu hơn đối thủ, và khoảng hụt đó nên thay đổi điều gì trong phần việc sáng tạo.",
      "Ở giai đoạn nghiên cứu, Felix phân tích **74 bài đăng Facebook**, mã hoá **755 bình luận bằng NVivo**, và rà soát **82 đánh giá thương mại điện tử** từ 15 sản phẩm bán chạy nhất của MAGGI Recipe Solution, đi từ tín hiệu mạng xã hội tới một quyết định chiến lược, rồi kiểm tra xem quyết định đó có sống sót nổi khi được dịch thành một chiến dịch mùa vụ hay không.",
    ],
    stat: {
      label: "Phương pháp nghiên cứu",
      items: [
        { value: "74", label: "bài đăng Facebook được phân tích" },
        { value: "755", label: "bình luận đã mã hoá (NVivo)" },
        { value: "82", label: "đánh giá thương mại điện tử" },
        { value: "15", label: "sản phẩm bán chạy nhất được rà soát" },
      ],
    },
  },
  insight: {
    ...en.insight,
    eyebrow: "Insight",
    title: "Đọc thứ ngôn ngữ đang xoay quanh ngành hàng",
    body: [
      "Điểm phân biệt hữu ích cụ thể hơn nhiều so với “một bên lý tính, một bên cảm tính”. Trong tập dữ liệu đã phân tích, thảo luận về MAGGI nghiêng về thuộc tính sản phẩm, giá, giao hàng và các mối quan tâm mang tính giao dịch. Barona tạo ra nhiều ngôn ngữ hơn quanh sự dễ dàng, công thức, cách dùng và những gì người tiêu dùng có thể nấu ra, đồng thời đạt mức tương tác mạnh hơn trong tập so sánh.",
      "Điều đó chuyển bài toán từ “làm MAGGI hiện diện nhiều hơn” sang **làm cho sự tiện lợi trở nên đáng tin, hữu dụng và được sống thật trong văn hoá, thay vì chỉ được tuyên bố**. Các biểu đồ là bằng chứng; các con số được ghi thẳng ra đây để người đọc không phải căng mắt giải mã nhãn chữ nhỏ trên ảnh chụp màn hình.",
    ],
    commentThemesFigure: {
      ...en.insight.commentThemesFigure,
      alt: "Biểu đồ so sánh chủ đề bình luận, cho thấy thảo luận về MAGGI nghiêng về sản phẩm và giá, còn Barona nghiêng về công thức và cách dùng.",
      caption: "So sánh chủ đề: thảo luận về MAGGI nghiêng về giao dịch; Barona nghiêng về công thức và cách dùng.",
      tag: "Hình trong báo cáo nghiên cứu",
    },
    sentimentFigure: {
      ...en.insight.sentimentFigure,
      alt: "Biểu đồ sắc thái và lượng bình luận từ phân tích MAGGI Recipe Solution trên 755 bình luận đã mã hoá.",
      caption: "Sắc thái và lượng bình luận trên tập 755 bình luận đã mã hoá.",
      tag: "Hình trong báo cáo nghiên cứu",
    },
  },
  direction: {
    ...en.direction,
    eyebrow: "Từ bằng chứng tới định hướng",
    title: "Authentic Convenience",
    body: [
      "Nghiên cứu được tổng hợp thành **Authentic Convenience**: một định hướng nhằm nối sự tiện lợi với hành vi nấu ăn mà người ta nhận ra được, thay vì coi tiện lợi như một lợi ích chức năng chung chung. Một cách tiếp cận influencer hai tầng được đề xuất để cân bằng giữa độ phủ và những tiếng nói đáng tin hơn, đi từ trải nghiệm sử dụng.",
    ],
    figure: {
      ...en.direction.figure,
      alt: "Khung chiến dịch MAGGI chuyển định hướng Authentic Convenience thành cách tiếp cận influencer hai tầng.",
      caption: "Khung chiến lược: Authentic Convenience được dịch thành cách tiếp cận influencer hai tầng.",
      tag: "Định hướng đề xuất",
    },
  },
  creative: {
    ...en.creative,
    eyebrow: "Dịch chiến lược thành sáng tạo",
    title: "Biến chiến lược thành một ý tưởng Tết",
    body: [
      "Giai đoạn hai dịch định hướng đó thành một chiến dịch Tết 2026 đề xuất. Vai trò của Felix chuyển từ nghiên cứu và chiến lược sang viết kịch bản và dựng storyboard. Bản đề xuất và storyboard minh hoạ là bằng chứng của sự liền mạch: insight không dừng lại ở một slide, nó định hình cách một câu chuyện mùa vụ được cấu trúc.",
    ],
    bigIdeaFigure: {
      ...en.creative.bigIdeaFigure,
      alt: "Trang big idea của chiến dịch MAGGI Tết 2026, phát triển từ định hướng Authentic Convenience.",
      caption: "Big idea, phát triển từ định hướng chiến lược cho một chiến dịch Tết 2026 đề xuất.",
      tag: "Đề xuất học thuật",
    },
    storyboardFigure: {
      ...en.creative.storyboardFigure,
      alt: "Storyboard minh hoạ cho TVC MAGGI Tết 2026 đề xuất, hiển thị đầy đủ các khung.",
      caption: "Storyboard minh hoạ, phần chiến lược được mang vào một tự sự mùa vụ cụ thể và có cấu trúc.",
      tag: "Chiến dịch học thuật đề xuất",
    },
    briefFigure: {
      ...en.creative.briefFigure,
      alt: "Bảng brainstorm hình ảnh cho chiến dịch MAGGI Tết 2026, tập hợp các hướng bố cục, màu sắc và tham chiếu.",
      caption: "Phần brainstorm hình ảnh đằng sau bộ slide: tham chiếu, bố cục và hướng màu được thử trước khi chốt ý tưởng.",
      tag: "Brainstorm",
    },
    embed: {
      ...en.creative.embed,
      title: "Bộ slide đề xuất chiến dịch MAGGI Tết 2026",
      fallbackLabel: "Mở bản đề xuất chiến dịch (Canva)",
    },
    note: {
      label: "Trạng thái",
      body: "Chiến dịch Tết 2026 là một concept học thuật đề xuất, không phải hoạt động đã chạy. Không có tuyên bố nào về việc ra mắt chiến dịch hay hiệu quả thương mại.",
    },
  },
  demonstrates: {
    ...en.demonstrates,
    eyebrow: "Điều dự án này cho thấy",
    title: "Nghiên cứu dẫn thẳng tới một quyết định sáng tạo",
    body: [
      "Điều còn đọng lại với tôi từ dự án này là cảm giác thoả mãn khi nghiên cứu thật sự giành được một quyết định sáng tạo, thay vì nằm yên trong một bộ slide không ai mở lại. Việc mang chính phần phân tích của mình từ 755 bình luận đã mã hoá đi suốt tới một storyboard dạy tôi luôn phải hỏi, ở từng bước, vậy điều này thay đổi cái gì? Tôi cũng học được cách thành thật về chỗ mà công việc dừng lại: một concept đề xuất tốt, không phải một chiến dịch đã chạy.",
    ],
    links: [{ ...en.demonstrates.links[0], label: "Xem báo cáo nghiên cứu" }],
  },
};
