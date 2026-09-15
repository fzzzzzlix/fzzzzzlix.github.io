import { empacts as en, type EmpactsCopy } from "./empacts.en";

/*
 * P25 EMPACTS, Vietnamese case copy.
 * Spreads the English blocks so embeds, links and image paths are inherited.
 * Organisation, programme and framework names stay as used: EMPACTS, EPIC,
 * SDG, SOP, business model canvas.
 */
export const empacts: EmpactsCopy = {
  ...en,
  hero: {
    ...en.hero,
    title: "EMPACTS",
    descriptor: "Tháng 5 – Tháng 12, 2024",
    strip: [
      { value: "54", label: "thành viên" },
      { value: "6", label: "phòng ban" },
      { value: "21", label: "vai trò được định nghĩa" },
      { value: "40+", label: "SOP" },
    ],
  },
  verifiedRole: {
    ...en.verifiedRole,
    eyebrow: "Vai trò đã được xác nhận",
    title: "Xây tổ chức, chứ không chỉ xây ý tưởng",
    body: [
      "EMPACTS khởi đầu từ một tiền đề đầy tham vọng: tạo ra một hệ sinh thái do người trẻ dẫn dắt, xoay quanh doanh nghiệp xã hội và khởi nghiệp gắn với các Mục tiêu Phát triển Bền vững. Giá trị portfolio ở đây không nằm ở riêng tham vọng đó, mà ở chỗ tổ chức này đã được dịch thành vai trò, hệ thống, biểu mẫu, thói quen vận hành và chương trình công chúng mà người khác thật sự vận hành được.",
      "Bản đề xuất được cung cấp xác định Felix là **Đồng sáng lập và Phó Chủ tịch**. Hồ sơ dự án mô tả một tổ chức 54 thành viên trải trên sáu phòng ban, 21 vai trò và hơn 40 SOP.",
    ],
    note: {
      label: "Cơ sở của các con số",
      body: "54 thành viên, sáu phòng ban, 21 vai trò và hơn 40 SOP là các chỉ báo về quy mô tổ chức do chủ sở hữu xác nhận, không phải số liệu đã được kiểm toán độc lập. Case này nhấn vào tư duy hệ thống; nó không khẳng định rằng Felix tự tay viết mọi tài liệu nội bộ.",
    },
  },
  operatingModel: {
    ...en.operatingModel,
    eyebrow: "Từ concept tới mô hình vận hành",
    title: "Biến một ý tưởng thành những hiện vật người ta chạy được",
    body: [
      "EMPACTS phải được cấu trúc và giải thích trước khi có thể vận hành. Các one-pager công khai bên dưới cô đọng dự án cho việc tiếp cận bên ngoài, business model canvas nắm lấy phần khung nằm dưới, và một đề xuất truyền thông đặt ra cách thương hiệu này thật sự sẽ nói, từ các giai đoạn brainstorm tới những ý tưởng đầu tiên.",
      "Từ đó, công việc dịch chuyển sang các hiện vật vận hành: bộ template thuyết trình chung song ngữ, biến sự nhất quán thành một thuộc tính được thiết kế sẵn trong cách EMPACTS giao tiếp.",
    ],
    onePager1Figure: {
      ...en.operatingModel.onePager1Figure,
      alt: "One-pager công khai của EMPACTS, mô tả tổ chức và các chương trình.",
      caption: "One-pager tổ chức, phiên bản công khai, dùng cho việc tiếp cận bên ngoài.",
      tag: "Bối cảnh công khai",
    },
    onePager2Figure: {
      ...en.operatingModel.onePager2Figure,
      alt: "One-pager công khai thứ hai của EMPACTS, mô tả cấu trúc chương trình.",
      caption: "One-pager công khai thứ hai, hướng ra bên ngoài, không phải tài liệu hoạch định nội bộ.",
      tag: "Bối cảnh công khai",
    },
    canvasFigure: {
      ...en.operatingModel.canvasFigure,
      alt: "Business model canvas của EMPACTS, trình bày tuyên bố giá trị, đối tác, hoạt động, kênh và cấu trúc chi phí.",
      caption: "Business model canvas đặt khung cho dự án trước khi nó trở thành một tổ chức đang vận hành.",
      tag: "Hiện vật hệ thống giai đoạn đầu",
    },
    commProposalEmbed: {
      ...en.operatingModel.commProposalEmbed,
      title: "Đề xuất truyền thông EMPACTS",
      fallbackLabel: "Mở đề xuất truyền thông (Canva)",
    },
    templatesIntro: "Bộ template chung bản tiếng Anh và tiếng Việt là bằng chứng SOP nhỏ nhưng rất cụ thể: một hệ hình ảnh dùng chung, để bất kỳ ai trong tổ chức cũng có thể trình bày một cách nhất quán.",
    templateEnEmbed: {
      ...en.operatingModel.templateEnEmbed,
      title: "Template thuyết trình chung EMPACTS, bản tiếng Anh",
      fallbackLabel: "Mở template tiếng Anh",
    },
    templateViEmbed: {
      ...en.operatingModel.templateViEmbed,
      title: "Template thuyết trình chung EMPACTS, bản tiếng Việt",
      fallbackLabel: "Mở template tiếng Việt",
    },
  },
  publicProgramming: {
    ...en.publicProgramming,
    eyebrow: "Chương trình công chúng",
    title: "Làm cho hệ thống hiện ra qua việc triển khai thật",
    body: [
      "Webinar công khai *“Xây Dựng Thương Hiệu Cho Startup Phát Triển Bền Vững”* bắc cầu từ kiến trúc vận hành nội bộ sang phần triển khai hướng ra ngoài. Đặt cạnh bức ảnh sự kiện, nó nói lên một điều giản dị: các hệ thống kia không chỉ là giấy tờ, chúng đỡ cho những chương trình chạm được tới khán giả bên ngoài.",
    ],
    webinarEmbed: {
      ...en.publicProgramming.webinarEmbed,
      title: "Bài thuyết trình webinar công khai của EMPACTS",
      fallbackLabel: "Mở bộ slide webinar",
    },
    eventFigure: {
      ...en.publicProgramming.eventFigure,
      alt: "Ảnh chụp tại một webinar công khai của EMPACTS về xây dựng thương hiệu cho startup phát triển bền vững.",
      caption: "Webinar đã chạm tới khán giả bên ngoài, bằng chứng rằng hệ vận hành đỡ được cả chương trình công chúng.",
      tag: "Ảnh sự kiện",
    },
  },
  epic: {
    ...en.epic,
    eyebrow: "Sáng kiến trọng điểm",
    title: "EMPACTS Innovation Challenge (EPIC)",
    body: [
      "Một sáng kiến tôi dẫn dắt là **EPIC**, EMPACTS Innovation Challenge: một chương trình được dựng để đẩy người trẻ về phía đổi mới sáng tạo và khởi nghiệp trong ngành năng lượng, thay vì cuộc chạy đua quen thuộc về những ngành hào nhoáng hơn. Nó được khoanh vào **SDG 7** (năng lượng sạch, tin cậy và trong khả năng chi trả cho mọi người) và **SDG 13** (hành động khí hậu khẩn cấp), và được thiết kế để nuôi lớn sự sáng tạo, khả năng hợp tác và tinh thần khởi nghiệp ở chính những người sẽ dẫn dắt các ngành gắn với phát triển bền vững.",
      "Chương trình chạy cho hai nhóm cùng lúc: một **nhóm người dùng** gồm sinh viên đại học và cử nhân mới tốt nghiệp Việt Nam trong độ tuổi 18 đến 24, và một **nhóm chuyên gia** gồm mentor, lãnh đạo ngành, nhà đầu tư và diễn giả khách mời. Người tham gia ra về với ba thứ: **kiến thức** về phát triển bền vững, đổi mới sáng tạo và khởi nghiệp; một **mạng lưới** gồm bạn đồng trang lứa, mentor và người dẫn dắt; và **nguồn vốn** để thử nghiệm một dự án thật.",
      "Tiền đề được nói thẳng một cách có chủ ý: *một startup fintech tỷ đô cũng không trụ nổi nếu biến đổi khí hậu vẫn cứ tiếp diễn.* Việt Nam cần thêm nhiều người trẻ giỏi nhất của mình xây dựng trong ngành năng lượng, chứ không chỉ trong những ngành trông có vẻ ấn tượng ở thời điểm hiện tại.",
    ],
    proposalEmbed: {
      ...en.epic.proposalEmbed,
      title: "Đề xuất EMPACTS Innovation Challenge (EPIC)",
      fallbackLabel: "Mở đề xuất EPIC (Canva)",
    },
  },
  visibility: {
    ...en.visibility,
    eyebrow: "Bên trong tổ chức",
    title: "Không chỉ là sơ đồ tổ chức",
    body: [
      "Ngoài hệ thống và các bộ slide, đây là công việc trực tiếp: đồng sáng lập tổ chức, có mặt, và cùng dẫn dắt đội ngũ bằng người thật việc thật.",
    ],
    felixFigure: {
      ...en.visibility.felixFigure,
      alt: "Felix tại một hoạt động của EMPACTS.",
      caption: "Có mặt cùng EMPACTS với vai trò Đồng sáng lập và Phó Chủ tịch.",
      tag: "Trong tổ chức",
    },
    teamFigure: {
      ...en.visibility.teamFigure,
      alt: "Đội ngũ nòng cốt của EMPACTS.",
      caption: "Một phần đội ngũ nòng cốt đứng sau tổ chức EMPACTS.",
      tag: "Đội ngũ",
    },
  },
  demonstrates: {
    ...en.demonstrates,
    eyebrow: "Điều dự án này cho thấy",
    title: "Thiết kế tổ chức và hạ tầng truyền thông",
    body: [
      "EMPACTS cho thấy Felix xây dựng vượt ra ngoài phạm vi một chiến dịch đơn lẻ: định nghĩa cách một tổ chức người trẻ nhiều phòng ban điều phối công việc, ghi lại chuẩn mực, trình bày bản thân một cách nhất quán, và chuyển trách nhiệm về phía trước.",
    ],
    stat: {
      label: "Quy mô tổ chức",
      items: [
        { value: "54", label: "thành viên" },
        { value: "6", label: "phòng ban" },
        { value: "21", label: "vai trò" },
        { value: "40+", label: "SOP" },
      ],
    },
    links: [
      { ...en.demonstrates.links[0], label: "EMPACTS trên Facebook" },
      { ...en.demonstrates.links[1], label: "EMPACTS trên LinkedIn" },
      { ...en.demonstrates.links[2], label: "Bài giới thiệu Phó Chủ tịch" },
    ],
  },
};
