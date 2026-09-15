import { beLocal as en, type BeLocalCopy } from "./be-local.en";

/*
 * P31 Be Local, Vietnamese case copy.
 * Spreads the English blocks so image paths, source files and URLs are
 * inherited. Project-management terms stay in English where the discipline
 * uses them: Project Manager, PIC, WBS, Trello, Microsoft Project, .mpp, .xlsm.
 * Decimals use Vietnamese commas (4,65 /5); the source figures are unchanged.
 */
export const beLocal: BeLocalCopy = {
  ...en,
  hero: {
    ...en.hero,
    eyebrow: "Case tiêu biểu",
    title: "Be Local",
    strip: [
      { value: "PM", label: "Project Manager, đội bảy người" },
      { value: "7", label: "vòng đánh giá chéo hằng tuần" },
      { value: "30", label: "rủi ro trong sổ đăng ký" },
      { value: "4,65", unit: " /5", label: "điểm trung bình đánh giá chéo" },
    ],
  },
  tensionEyebrow: "Bài toán",
  verifiedRole: {
    ...en.verifiedRole,
    eyebrow: "Vai trò đã được xác nhận",
    title: "Project Manager của một đội bảy người",
    body: [
      "Be Local là một đồ án học thuật cho môn Project Management Fundamentals tại Trường Đại học Kinh tế Quốc dân (lớp EBBA 14.2, Nhóm 5). Felix là Project Manager. Đội có bảy thành viên, trải trên tài chính và hành chính, trải nghiệm tour, trải nghiệm khách hàng, hậu cần và vận hành, bán hàng và đối tác, marketing, và quản trị dự án.",
      "Vai trò đó nghĩa là sở hữu hệ vận hành, chứ không phải tự viết mọi tài liệu. Felix đặt ra quy trình làm việc, giữ tiến độ và tích hợp phần việc của cả đội, trong khi từng hạng mục bàn giao vẫn thuộc về những người chủ được ghi tên.",
    ],
    embedTitle: "Diễn giải quy trình làm việc của Be Local",
    figure: {
      ...en.verifiedRole.figure,
      alt: "Quy trình gốc của Be Local, thể hiện Project Manager điều phối các PIC của từng hạng mục, các thành viên, cơ chế rà soát hai lớp và họp hằng tuần.",
      caption: "Project Manager tới PIC của từng hạng mục tới thành viên, với rà soát hai lớp và họp hằng tuần xuyên suốt hệ thống.",
      tag: "Hiện vật trong bài thuyết trình",
    },
  },
  trello: {
    ...en.trello,
    eyebrow: "Công việc đã dịch chuyển như thế nào",
    title: "Một quy trình trên giấy, và một cái bảng chứng minh nó đã chạy",
    body: "Kiến trúc chỉ đáng tin nếu nó thật sự vận hành. Đội chạy dự án trên Trello: họp lên lịch hằng tuần, đánh giá chéo hằng tuần, một hàng đợi rà soát, và các cột trạng thái đầu việc đi từ cần làm tới chờ được rà soát.",
    figure: {
      ...en.trello.figure,
      alt: "Bảng Trello của Be Local với các cuộc họp hằng tuần, phần đánh giá chéo, các cột trạng thái đầu việc và thẻ phân công người rà soát.",
      caption: "Họp hằng tuần, đánh giá chéo hằng tuần, các cột trạng thái đầu việc và thẻ phân công người rà soát.",
      tag: "Ảnh chụp lúc đang vận hành",
    },
  },
  schedule: {
    ...en.schedule,
    eyebrow: "Hoạch định và các mối phụ thuộc",
    title: "Một kế hoạch 168 dòng, chia thành năm giai đoạn",
    body: "Dự án được lên tiến độ trong Microsoft Project và một file WBS: các gói công việc kèm thời lượng, mối phụ thuộc, người chủ và ngày tháng, nhóm lại thành năm giai đoạn theo kế hoạch.",
    stats: [
      { value: "168", label: "dòng WBS" },
      { value: "5", label: "giai đoạn theo kế hoạch" },
      { value: ".mpp", label: "file gốc Microsoft Project" },
      { value: ".xlsm", label: "file gốc WBS" },
    ],
    phasesCard: {
      ...en.schedule.phasesCard,
      tag: "Năm giai đoạn theo kế hoạch",
      title: "Từ xác định phạm vi tới hậu ra mắt",
      items: ["Planning", "Execution", "Soft Launch", "Official Launch", "Post-Launch"],
    },
    sourcesCard: {
      ...en.schedule.sourcesCard,
      tag: "File nguồn gốc",
      title: "Mở bản gốc",
      links: [
        { ...en.schedule.sourcesCard.links[0], label: "Tải tiến độ Microsoft Project (.mpp)" },
        { ...en.schedule.sourcesCard.links[1], label: "Mở / tải file nguồn WBS (.xlsm)" },
      ],
    },
    note: {
      strong: "Quyền sở hữu:",
      text: "bản Master Plan học thuật ghi một thành viên khác là người phụ trách hạng mục tiến độ và WBS, với Felix là người rà soát. Kế hoạch ở trên là tiến độ mô phỏng của dự án, không phải bằng chứng rằng những đầu việc tương lai đó đã được thực hiện. Cũng chính kế hoạch này mô phỏng tổng chi phí dự án ở mức khoảng 2,594 tỷ VND, một kịch bản hoạch định nguồn lực chứ không phải khoản chi đã quản lý hay đã tiêu.",
    },
  },
  risk: {
    ...en.risk,
    eyebrow: "Rủi ro và bất định",
    title: "Một sổ đăng ký 30 rủi ro, được phân loại và xử lý",
    body: "Rủi ro được quản lý như một hệ thống: mỗi rủi ro được chấm điểm theo khả năng xảy ra và mức tác động, rồi được gán một cách ứng phó. Sổ đăng ký 30 rủi ro có thể đọc trên hai chiều riêng biệt: trạng thái hiện tại, và cách xử lý được gán cho nó.",
    byStatus: [
      { value: "21", label: "đã giảm thiểu" },
      { value: "6", label: "vẫn đang mở" },
      { value: "3", label: "vẫn xảy ra dù đã giảm thiểu" },
    ],
    byTreatment: [
      { value: "25", label: "kiểm soát" },
      { value: "4", label: "chấp nhận" },
      { value: "1", label: "chuyển giao" },
    ],
    figure: {
      ...en.risk.figure,
      alt: "Hình quản trị rủi ro của Be Local, thể hiện phân bố nhóm rủi ro và bản đồ nhiệt tác động theo khả năng xảy ra.",
      caption: "Phân bố nhóm rủi ro và bản đồ nhiệt tác động theo khả năng xảy ra.",
      tag: "Hiện vật trong bài thuyết trình",
    },
    categories: [
      { value: "36,67", unit: "%", label: "Tổ chức" },
      { value: "36,67", unit: "%", label: "Khách hàng" },
      { value: "23,33", unit: "%", label: "Bên ngoài" },
      { value: "3,33", unit: "%", label: "Kỹ thuật" },
    ],
    note: {
      strong: "Ghi chú dữ liệu:",
      text: "sổ đăng ký chính chứa 30 rủi ro; một phần diễn giải bản đồ nhiệt ở đoạn sau của báo cáo lại bàn về 27. Con số 30 là số đếm chuẩn. Đây là rủi ro của một dự án đang hoạch định, không phải sự cố của một doanh nghiệp đang vận hành.",
    },
  },
  taught: {
    ...en.taught,
    eyebrow: "Điều dự án dạy lại",
    title: "Các vấn đề, các cách sửa, và các bài học",
    body: "Việc nhìn lại được cài sẵn vào trong dự án. Mỗi vấn đề lặp đi lặp lại đều được ánh xạ tới một thay đổi quy trình cụ thể, và đội đã đúc kết thành mười bài học quản trị, trải trên chất lượng và hoạch định, công cụ và quy trình, giao tiếp và làm việc nhóm.",
    challengesFigure: {
      ...en.taught.challengesFigure,
      alt: "Bốn vấn đề quản trị của Be Local được ánh xạ tới các điều chỉnh quy trình về chất lượng, giao tiếp, mối phụ thuộc và việc nhìn lại hằng tuần.",
      caption: "Vấn đề được ánh xạ tới điều chỉnh quy trình: chất lượng, giao tiếp, mối phụ thuộc và việc nhìn lại hằng tuần.",
      tag: "Tài liệu dự án",
    },
    lessonsFigure: {
      ...en.taught.lessonsFigure,
      alt: "Bài học rút ra của Be Local, nhóm thành chất lượng và hoạch định, công cụ và quy trình, giao tiếp và làm việc nhóm.",
      caption: "Bài học được nhóm thành chất lượng và hoạch định, công cụ và quy trình, giao tiếp và làm việc nhóm.",
      tag: "Tài liệu dự án",
    },
  },
  presentation: {
    ...en.presentation,
    eyebrow: "Bản gốc",
    title: "Toàn bộ bài thuyết trình",
    body: "Đây là bài thuyết trình gốc của nhóm học thuật. Mọi con số vận hành và tài chính tương lai bên trong đều là kịch bản dự án, và bộ slide còn một vài chỗ chưa nhất quán về nguồn và ngày tháng. Nó là bằng chứng của công việc, không phải bằng chứng của một doanh nghiệp đã ra mắt.",
    link: "Mở bài thuyết trình trong tab mới",
    embedTitle: "Be Local, bài thuyết trình đồ án cuối kỳ bản gốc",
    embedLoadLabel: "Tải bài thuyết trình gốc",
    embedNote: "Bộ slide Canva 32 trang, tải khi bạn bấm vào",
  },
  peer: {
    ...en.peer,
    eyebrow: "Cả đội chấm công việc này thế nào",
    title: "Đánh giá chéo ẩn danh qua bảy vòng",
    average: { value: "4,65", unit: " /5" },
    averageNote: "Điểm trung bình tổng của Felix, cao nhất trong bảy thành viên ở bảng tổng kết cuối.",
    mini: [
      { value: "4,44", unit: " /5", label: "Trung bình cả đội" },
      { value: "7", label: "Vòng" },
      { value: "8", label: "Tiêu chí" },
    ],
    criteria: [
      { label: "Chuyên cần", value: 4.71 },
      { label: "Chủ động", value: 4.67 },
      { label: "Chất lượng đóng góp", value: 4.53 },
      { label: "Hợp tác", value: 4.67 },
      { label: "Thái độ", value: 4.65 },
      { label: "Cam kết & Đáng tin cậy", value: 4.63 },
      { label: "Khả năng thích ứng", value: 4.65 },
      { label: "Giao tiếp", value: 4.65 },
    ],
    note: {
      strong: "Nguồn:",
      text: "đánh giá chéo ẩn danh trong nhóm học thuật, tám tiêu chí trên thang năm điểm, qua bảy vòng hằng tuần. Đây là đánh giá của bạn cùng lớp, không phải phản hồi của khách hàng, nhà tuyển dụng hay giới chuyên môn. Điểm của từng bạn cùng lớp không được công bố.",
    },
  },
};
