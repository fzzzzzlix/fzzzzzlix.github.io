import { crisisResponse as en, type CrisisResponseCopy } from "./crisis-response.en";

/*
 * P32 HUST Food-Safety Crisis Response, Vietnamese case copy.
 * Spreads the English blocks so embeds, links and image paths are inherited.
 *
 * The real-versus-simulation boundary is the point of this case, so the
 * Vietnamese wording keeps that distinction just as explicit as the English.
 */
export const crisisResponse: CrisisResponseCopy = {
  ...en,
  hero: {
    ...en.hero,
    eyebrow: "Case chuyên sâu",
    title: "Ứng phó khủng hoảng an toàn thực phẩm tại HUST",
    descriptor: "PR & Truyền thông khủng hoảng",
    strip: [
      { value: "2024", label: "vụ việc có thật (chỉ là bối cảnh)" },
      { value: "Thông cáo", label: "hiện vật do Felix viết" },
      { value: "Đội nhóm", label: "bối cảnh media kit rộng hơn" },
    ],
  },
  framing: {
    ...en.framing,
    eyebrow: "Đặt khung",
    title: "Truyền thông về trách nhiệm khi niềm tin đã bị lung lay",
    body: [
      "Đồ án capstone học thuật cho môn Issues, Risk & Crisis Communication này lấy một vụ việc an toàn thực phẩm có thật năm 2024 liên quan tới Đại học Bách khoa Hà Nội làm điểm khởi phát cho một bài mô phỏng ứng phó khủng hoảng. Đây không phải công việc cho khách hàng HUST, và Felix không đại diện cho trường.",
      "Bài toán chuyên môn thì vẫn rất thực tế: khi an toàn của sinh viên, trách nhiệm giải trình của tổ chức và sự soi xét của báo chí va vào nhau, một tổ chức có thể nói gì cho đáng tin, và phải chuẩn bị sẵn để trả lời điều gì tiếp theo?",
    ],
  },
  boundary: {
    ...en.boundary,
    eyebrow: "Giữ ranh giới cho sạch",
    title: "Tách vụ việc có thật khỏi kịch bản ứng phó",
    realCard: {
      ...en.boundary.realCard,
      tag: "Đã kiểm chứng, 2024",
      title: "Vụ việc có thật",
      items: [
        "Một vụ việc an toàn thực phẩm năm 2024 liên quan tới các suất ăn phục vụ trong một chương trình của HUST.",
        "VTV đưa tin nhà trường đã chấm dứt hợp đồng với đơn vị cung cấp suất ăn sau vụ việc.",
        "Chỉ được nêu ở đây như điểm khởi phát lịch sử, có dẫn nguồn báo chí công khai.",
      ],
    },
    simulationCard: {
      ...en.boundary.simulationCard,
      tag: "Mô phỏng, 2025",
      title: "Phần ứng phó trong môi trường học thuật",
      items: [
        "Một bài mô phỏng trên lớp năm 2025, dựng trên điểm khởi phát đó.",
        "Vai trò được phân công cho Felix trong mô phỏng là Communication Manager.",
        "Mọi hành động ứng phó bên dưới đều là tài liệu mô phỏng đề xuất, không phải sự kiện đã diễn ra.",
      ],
    },
    note: {
      label: "Vì sao phải tách bạch",
      body: "Giữ phần lịch sử đã kiểm chứng của năm 2024 tách khỏi bài mô phỏng năm 2025 giúp các hành động khủng hoảng đề xuất không bị nhầm thành quyết định có thật của nhà trường, và giữ cho case này sạch về mặt đạo đức nghề nghiệp.",
    },
  },
  contribution: {
    ...en.contribution,
    eyebrow: "Đóng góp trực tiếp",
    title: "Bản thông cáo báo chí do Felix viết",
    body: [
      "Hiện vật quy trực tiếp về Felix là bản thông cáo báo chí, viết trong vai trò mô phỏng được phân công là Communication Manager. Nó cố gắng làm nhiều việc cùng lúc: thừa nhận mức độ nghiêm trọng, truyền thông về hành động khắc phục, thiết lập một trình tự ứng phó ở cấp tổ chức, và đưa cho nhà báo một tuyên bố mang tính chính thức mà họ dùng được. Bằng chứng ở đây là bản viết thật, không phải một tấm đồ hoạ khủng hoảng gây kịch tính.",
    ],
    note: {
      label: "Nó là gì, và không phải là gì",
      body: "Đây là một tài liệu mô phỏng học thuật năm 2025 do Felix viết trong một vai trò được phân công. Nó không phải thông cáo báo chí thật của HUST, và Felix chưa bao giờ làm việc cho HUST hay là người phát ngôn chính thức của trường.",
    },
    embed: {
      ...en.contribution.embed,
      title: "Thông cáo báo chí mô phỏng do Felix viết",
      fallbackLabel: "Mở thông cáo báo chí (Canva)",
    },
  },
  close: {
    ...en.close,
    eyebrow: "Phần ứng phó, và ranh giới của nó",
    title: "Một tuyên bố được dựng để sống sót qua câu hỏi tiếp theo",
    body: [
      "Bản thông cáo được viết để vận hành như một hệ thống, chứ không phải một lời xin lỗi đơn lẻ. Nó đi qua một cung đường có chủ ý: thừa nhận mức độ nghiêm trọng của vụ việc, thiết lập các dữ kiện đã kiểm chứng, đặt sinh viên bị ảnh hưởng lên trước, giải thích hành động khắc phục cụ thể, và khép lại bằng việc dựng lại niềm tin, để người đọc tới cuối vẫn biết chuyện gì đã xảy ra và nhà trường sẽ làm gì tiếp theo.",
      "Quanh nó, cả đội lắp ráp phần còn lại của một gói chuẩn bị truyền thông: tài liệu nền, fact sheet, FAQ, danh sách liên hệ báo chí và kế hoạch họp báo, bởi một tuyên bố sẽ sụp ngay khoảnh khắc người phát ngôn không trả lời nổi câu hỏi tiếp theo. Phần đóng góp của tôi là chính bản thông cáo; thứ nghề mà case này cho thấy là lối viết giữ được sự rõ ràng, có thể bảo vệ được và dùng được khi bị soi, đồng thời giữ cho lịch sử đã kiểm chứng, phần mô phỏng và quyền tác giả cá nhân tách bạch rành mạch.",
    ],
    figure: {
      ...en.close.figure,
      alt: "Sơ đồ phòng họp báo cho bài mô phỏng khủng hoảng an toàn thực phẩm tại HUST, đánh dấu vị trí ngồi và vị trí phát biểu của những người phát ngôn của trường.",
      caption: "Sơ đồ phòng họp báo của cả đội, chỉ rõ từng người phát ngôn ngồi và nói ở đâu, một phần của gói chuẩn bị mà bản thông cáo phải vận hành bên trong.",
      tag: "Mô phỏng nhóm, kế hoạch họp báo",
    },
    embed: {
      ...en.close.embed,
      title: "Kế hoạch truyền thông khủng hoảng của cả đội",
      fallbackLabel: "Mở kế hoạch truyền thông khủng hoảng (Canva)",
    },
    links: [
      { ...en.close.links[0], label: "Bối cảnh vụ việc có thật năm 2024 (VTV)" },
      { ...en.close.links[1], label: "Thông cáo báo chí do Felix viết (Canva)" },
      { ...en.close.links[2], label: "Kế hoạch khủng hoảng, tài liệu mô phỏng nhóm" },
    ],
  },
};
