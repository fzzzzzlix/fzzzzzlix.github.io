import { littleMe as en, type LittleMeCopy } from "./little-me.en";

/*
 * P22 Little Me, Vietnamese case copy.
 * Spreads the English blocks so image paths, videos and ratios are inherited.
 * Activity names (Drawing Little Me, Calm Jar, Buddy Pick-up, Little Special U)
 * and RMIT department names stay as they were used at the event.
 * Numbers use Vietnamese separators; the source figures are unchanged.
 */
export const littleMe: LittleMeCopy = {
  ...en,
  hero: {
    ...en.hero,
    title: "Little Me",
    descriptor: "RMIT Hà Nội · 3–5 tháng 4, 2024",
    strip: [
      { value: "316", label: "lượt tham quan trong ba ngày" },
      { value: "34.588", label: "lượt tiếp cận tự nhiên" },
      { value: "6,96", unit: "%", label: "tỉ lệ quay lại (22 lượt)" },
      { value: "27", label: "thành viên trong đội được dẫn dắt" },
    ],
  },
  participation: {
    ...en.participation,
    eyebrow: "Bài toán về sự tham gia",
    title: "Làm cho chuyện chăm sóc tinh thần trở nên dễ bước vào",
    body: [
      "Little Me được thiết kế quanh một bài toán tham gia rất giản dị: sinh viên có thể cần một khoảng lặng để nhìn lại mình giữa một kỳ học căng thẳng, mà không muốn bị đưa vào một buổi can thiệp chính thức. Câu trả lời là một triển lãm tương tác để người xem tự đi theo nhịp của mình, mang tính mời gọi nhiều hơn là chỉ dẫn, nơi người tham gia đi qua những hoạt động nhỏ theo tốc độ riêng.",
      "Triển lãm diễn ra trong ba ngày, 3–5 tháng 4 năm 2024, tại RMIT Hanoi Industry and Innovation Hub, với sự điều phối giữa Diversity & Inclusion Office, Wellbeing và Student Life Department của RMIT, Current Media Club và các nghệ sĩ RMIT độc lập.",
    ],
  },
  experienceDesign: {
    ...en.experienceDesign,
    eyebrow: "Thiết kế trải nghiệm",
    title: "Thiết kế một hành trình, không chỉ một lịch sự kiện",
    body: [
      "Trải nghiệm kết hợp các gợi mở trưng bày và hoạt động làm tay: Childhood Core Memories, Drawing Little Me, Shower Thoughts, Accept Your Differences, Calm Jar Decoration, một Supportive Booklet và Buddy Pick-up. Sơ đồ mặt bằng bên dưới cho thấy hành trình của người tham gia đã được thiết kế về mặt không gian chứ không phải ứng biến; các bức ảnh tiếp sau cho thấy từng khu vực có cảm giác thế nào trong ngày diễn ra.",
    ],
    floorPlanFigure: {
      ...en.experienceDesign.floorPlanFigure,
      alt: "Sơ đồ mặt bằng triển lãm Little Me, thể hiện trình tự các khu vực hoạt động được định tuyến khắp không gian.",
      caption: "Không gian được định tuyến thành một chuỗi khu vực hoạt động, để người tham gia đi qua một hành trình đã được thiết kế.",
      tag: "Tài liệu hoạch định",
    },
    zoneFigure: {
      ...en.experienceDesign.zoneFigure,
      alt: "Người tham gia tại khu Childhood Core Memories của triển lãm Little Me.",
      caption: "Childhood Core Memories, một hoạt động mở đầu nhẹ nhàng, đặt sẵn nhịp lắng lại cho cả hành trình.",
      tag: "Ảnh sự kiện",
    },
    calmJarFigure: {
      ...en.experienceDesign.calmJarFigure,
      alt: "Một người tham gia đang trang trí lọ tại hoạt động Calm Jar.",
      caption: "Calm Jar Decoration, một hoạt động làm tay mà người tham gia hoàn thành theo nhịp của mình.",
      tag: "Ảnh sự kiện",
    },
    buddyFigure: {
      ...en.experienceDesign.buddyFigure,
      alt: "Người tham gia tại hoạt động Buddy Pick-up của triển lãm Little Me.",
      caption: "Buddy Pick-up khép lại hành trình bằng cách kết nối người tham gia, thay vì để họ rời đi một mình.",
      tag: "Ảnh sự kiện",
    },
    artworkFigure: {
      ...en.experienceDesign.artworkFigure,
      alt: "Các bảng minh hoạ của triển lãm Little Me được trưng bày tại RMIT Innovation Hub.",
      caption: "Các bảng triển lãm: tác phẩm minh hoạ của nghệ sĩ về bản sắc và sự khác biệt, phần neo giữ cả không gian.",
      tag: "Ảnh sự kiện",
    },
    bookletFigure: {
      ...en.experienceDesign.bookletFigure,
      alt: "Những chồng booklet Little Special U được phát tại triển lãm.",
      caption: "“Little Special U”, cuốn booklet mang về nhà, để phần chiêm nghiệm đi cùng người tham gia về tới nhà.",
      tag: "Ảnh sự kiện",
    },
    jarVideo: {
      ...en.experienceDesign.jarVideo,
      caption: "Hoạt động Calm Jar khi đang diễn ra, một khoảnh khắc làm tay mà người tham gia hoàn thành theo nhịp riêng.",
      tag: "Tư liệu sự kiện",
    },
    setupVideo: {
      ...en.experienceDesign.setupVideo,
      caption: "Dựng không gian trước giờ mở cửa, phần việc hậu trường nằm dưới cái bề mặt yên tĩnh kia.",
      tag: "Tư liệu sự kiện",
    },
  },
  leadership: {
    ...en.leadership,
    eyebrow: "Lãnh đạo vận hành",
    title: "Dẫn dắt cái hệ thống nằm sau trải nghiệm",
    body: [
      "Với vai trò Trưởng ban tổ chức, Felix dẫn dắt hệ vận hành đứng sau triển lãm, chứ không tự tay làm ra từng hoạt động. Một trải nghiệm hướng tới người tham gia phụ thuộc vào phần việc hậu trường: phân bổ đầu việc cho đội 27 người, giấy tờ và phê duyệt, điều phối đối tác, truyền thông đa nền tảng và vận hành trong ngày diễn ra.",
      "Câu chuyện quản trị mạnh nhất ở đây là: cái bề mặt yên tĩnh, để người ta tự đi theo nhịp của mình, chỉ chạy được vì phần điều phối bên dưới đã được hoạch định và giao việc rõ ràng.",
    ],
    teamFigure: {
      ...en.leadership.teamFigure,
      alt: "Đội tổ chức nòng cốt của Little Me tại RMIT Innovation Hub.",
      caption: "Một phần đội 27 người đứng sau Little Me, phần điều phối khiến một triển lãm yên tĩnh trở nên khả thi.",
      tag: "Đội ngũ",
    },
    onSiteFigure: {
      ...en.leadership.onSiteFigure,
      alt: "Felix đứng trước bảng hiệu triển lãm Little Me tại RMIT Hanoi Innovation Hub.",
      caption: "Có mặt tại chỗ với vai trò Trưởng ban tổ chức suốt ba ngày diễn ra.",
      tag: "Tại hiện trường",
    },
  },
  results: {
    ...en.results,
    eyebrow: "Kết quả so với kế hoạch",
    title: "Đo bằng những KPI đã nói rõ từ đầu",
    body: [
      "Báo cáo sự kiện ghi nhận **316 lượt tham quan** trong ba ngày: 97 lượt Ngày 1, 115 lượt Ngày 2 và 104 lượt Ngày 3, với **22 lượt quay lại (6,96%)** và **34.588 lượt tiếp cận tự nhiên** trên Facebook, Instagram và TikTok. Cả hai KPI đã đặt ra, 300+ lượt tham quan và 15.000+ lượt tiếp cận tự nhiên, đều được vượt qua khi sự kiện khép lại.",
    ],
    resultsStat: {
      label: "Kết quả sự kiện Little Me",
      items: [
        { value: "316", label: "tổng lượt tham quan (97 / 115 / 104)" },
        { value: "34.588", label: "lượt tiếp cận tự nhiên, ba nền tảng" },
        { value: "22", label: "lượt quay lại (6,96%)" },
        { value: "2×+", label: "so với KPI 15.000+ lượt tiếp cận" },
      ],
    },
    reachStat: {
      label: "Lượt tiếp cận tự nhiên theo nền tảng",
      items: [
        { value: "23.900+", label: "lượt tiếp cận Facebook" },
        { value: "7.467", label: "lượt tiếp cận TikTok" },
        { value: "3.221", label: "lượt tiếp cận Instagram" },
        { value: "300+", label: "KPI lượt tham quan, đạt khi sự kiện khép lại" },
      ],
    },
    reachFigure: {
      ...en.results.reachFigure,
      alt: "Ảnh chụp Instagram insights, thể hiện 3.221 tài khoản được tiếp cận và 38.948 lượt hiển thị, tăng 85,9%, trong 30 ngày.",
      caption: "Lượt tiếp cận Instagram trong khung thời gian chiến dịch: 3.221 tài khoản và lượt hiển thị tăng 85,9%.",
      tag: "Số liệu",
    },
    tiktokFigure: {
      ...en.results.tiktokFigure,
      alt: "Ảnh chụp TikTok một bài đăng Little Me 2024, mời người xem phản hồi qua sticker với hơn 805 lượt.",
      caption: "TikTok cũng chở lời mời đi xa, gợi người xem nhìn lại mình và lên tiếng.",
      tag: "Mạng xã hội",
    },
    awardFigure: {
      ...en.results.awardFigure,
      alt: "Cúp và giấy chứng nhận Inclusion Award 2023 của RMIT Hanoi Student Council.",
      caption: "Inclusion Award 2023 của đơn vị tổ chức, phần ghi nhận rộng hơn mà công việc này nằm trong đó.",
      tag: "Ghi nhận",
    },
    note: {
      label: "Ranh giới bằng chứng",
      body: "Số liệu tham quan và tiếp cận lấy từ báo cáo của chính sự kiện. KPI 300+ lượt tham quan đạt được vào thời điểm ba ngày sự kiện khép lại, không phải trong Ngày 2: sau hai ngày, tổng là 212. Mọi con số gây quỹ được lược bỏ ở đây vì báo cáo sự kiện được cung cấp không chứng minh cho con số đó. Inclusion Award ghi nhận RMIT Hanoi Student Council, tức đơn vị tổ chức, không phải cá nhân Felix.",
    },
  },
  demonstrates: {
    ...en.demonstrates,
    eyebrow: "Điều dự án này cho thấy",
    title: "Thiết kế trải nghiệm cộng với năng lực lãnh đạo vận hành",
    body: [
      "Little Me cho thấy Felix có thể biến một mục tiêu truyền thông nhạy cảm thành một định dạng có sự tham gia, điều phối một đội sinh viên đông người, và đánh giá việc triển khai dựa trên những KPI rõ ràng về lượt tham quan và truyền thông, nói ra kết quả và giới hạn với cùng một độ chính xác.",
    ],
  },
};
