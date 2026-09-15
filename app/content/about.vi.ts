import type { AboutCopy } from "./about.en";

/*
 * About page copy, Vietnamese. Mirrors app/content/about.en.ts key for key.
 *
 * Voice: the `story` block is Felix speaking, so it uses "tôi". The `intro`,
 * `approach` and image captions stay in the third person, exactly as the
 * English does.
 *
 * Kept in English on purpose: the job title heading, the capability tier
 * labels (they double as the Home page route names), and the discipline terms
 * the industry uses in English (insight, brief, SOP, NVivo, NodeXL, TVC).
 */
export const about: AboutCopy = {
  meta: {
    title: "About",
    description: "Gặp Felix Phan và phương pháp nối liền nghiên cứu, câu chuyện, sản xuất và tác động.",
  },
  identity: {
    eyebrow: "Về Felix",
    heading: "Creative Strategist & Storyteller",
    facts: [
      { term: "Tên nghề nghiệp", detail: "Felix Phan" },
      { term: "Tên khai sinh", detail: "Nguyễn Phan Thục Hương" },
      { term: "Đại từ nhân xưng", detail: "they/them" },
      { term: "Tốt nghiệp", detail: "Tháng 4, 2027" },
      { term: "Tình trạng", detail: "Sẵn sàng làm full-time" },
      { term: "Nơi làm việc", detail: "TP. Hồ Chí Minh & Hà Nội" },
    ],
  },
  intro: {
    eyebrow: "Về Felix",
    lead: "Felix Phan là một creative strategist và storyteller, người tìm ra điểm căng bên trong mỗi brief, cho nó một cấu trúc, và ở lại với nó cho tới khi ý tưởng có thể vận hành được trong đời thật.",
    quote: "“Đủ tò mò để hỏi tại sao, đủ thực tế để làm cho nó chạy”",
  },
  story: [
    "Mắc chứng quá **linh hoạt**, cực kỳ **xoay xở giỏi**, và có một **tinh thần làm chủ công việc** đến mức khó hiểu – mỗi khi một brief rơi vào tay, tôi chiến đấu hết lòng để đưa nó đi từ đầu đến cuối, bằng tất cả những gì mình có, và tới một chuẩn mực mà tôi tự hào nhận là của mình.",
    "Portfolio của tôi trải ra trên nhiều lĩnh vực; điều này có thể gây bối rối rằng *rốt cuộc Felix chuyên về cái gì?* – Vâng, **chuyên môn của tôi là làm cho việc xong**. Tôi xây những thứ buộc phải chạy được: dự án, đội ngũ, hệ thống, chiến dịch, sự kiện và khung nghiên cứu. Tôi phát huy tốt nhất khi có một mục tiêu thực sự có ý nghĩa và đủ độ phức tạp để việc thực thi không thể chỉ đi theo một template có sẵn – Nên nếu bạn cũng đang có một công việc cần được làm cho xong, cứ liên hệ với tôi nhé ^^",
  ],
  quote: "“Tôi hữu ích nhất khi cái brief thú vị, hơi bất tiện, và quá con người để có một câu trả lời gọn gàng”",
  approach: [
    "Felix làm việc xuyên suốt **chiến lược**, **câu chuyện** và **triển khai**, để một ý tưởng giữ được nguyên vẹn ý đồ của nó **từ insight đầu tiên cho tới lần bàn giao cuối cùng**. Nghĩa là bớt đi những khoảng hở giữa người hoạch định, người làm ra, và người đưa nó ra thị trường.",
    "Felix đưa những ý tưởng có ý nghĩa đi từ **insight**, tới **câu chuyện**, tới **tác động**. Công việc bắt đầu bằng bằng chứng, nhưng không kết thúc ở một file bảng tính: nghiên cứu được dịch thành một điểm căng rất người, điểm căng đó trở thành một cấu trúc, và cấu trúc đó trở thành một kịch bản, một treatment, một kế hoạch, một sự kiện hay một hệ vận hành.",
  ],
  approachClose:
    "Sự kết hợp đó hợp với những vị trí mà truyền thông phải **hiểu văn hoá**, **thực tế về mặt vận hành**, và **chịu trách nhiệm với một kết quả cụ thể**.",
  images: [
    { src: "/images/About/About_1 Felix portrait.jpg", alt: "Ảnh chân dung Felix Phan", caption: "Felix Phan" },
    { src: "/images/About/About_2 Felix is a Challenger.jpg", alt: "Felix Phan đón nhận một thử thách", caption: "Một challenger theo bản năng" },
    { src: "/images/About/About_3 Felix portrait.jpg", alt: "Ảnh chân dung Felix Phan", caption: "Felix Phan" },
    { src: "/images/About/About_4 Felix on stage.jpg", alt: "Felix Phan trên sân khấu", caption: "Trên sân khấu" },
    { src: "/images/About/About_5 Journalism club founder.jpg", alt: "Felix Phan, người sáng lập câu lạc bộ báo chí", caption: "Người sáng lập câu lạc bộ báo chí" },
  ],
  capability: {
    eyebrow: "Năng lực",
    items: [
      ["Định hình chiến lược", "Thiết kế nghiên cứu", "Kinh nghiệm nghiên cứu học thuật gồm đặt câu hỏi nghiên cứu, tổng quan tài liệu, thiết kế định tính và đa phương pháp, phân tích định lượng thứ cấp (tương quan và hồi quy), NVivo, phân tích mạng lưới xã hội (NodeXL), thao tác hoá khái niệm, tam giác hoá dữ liệu, bản đồ hệ thống, và chuyển nghiên cứu thành nội dung biên tập."],
      ["Định hình chiến lược", "Hoạch định chiến lược", "Consumer insight, social listening, mã hoá chủ đề và sắc thái, phỏng vấn, media planning và chiến lược kênh."],
      ["Xây dựng câu chuyện", "Phát triển sáng tạo", "Concept, treatment, cấu trúc truyện, chức năng nhân vật, tích hợp nhà tài trợ và hệ thống nội dung short-form."],
      ["Xây dựng câu chuyện", "Viết & biên tập", "Kịch bản TVC, phim ngắn, podcast, đề xuất, copy, phân cảnh và định hướng biên tập."],
      ["Dẫn dắt việc triển khai", "Vận hành xuất sắc", "Hỗ trợ tại hiện trường quay, theo dấu nguồn, hậu cần sự kiện, điều phối nhà cung cấp, ngân sách, SOP và kiểm soát chất lượng."],
      ["Dẫn dắt việc triển khai", "Lãnh đạo", "Đội ngũ liên phòng ban, thiết kế tổ chức, gây quỹ, quản trị các bên liên quan, chuyển giao và đánh giá hiệu suất."],
    ] as [string, string, string][],
  },
  cta: {
    eyebrow: "Xem phương pháp khi nó đang chạy",
    title: "Tuyên bố tốt cần bằng chứng tốt",
    button: "Khám phá các dự án",
  },
};
