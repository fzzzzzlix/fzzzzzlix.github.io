import type { HomeCopy } from "./home.en";

/*
 * Home page copy, Vietnamese (app/page.tsx via app/vi/page.tsx).
 * Mirrors app/content/home.en.ts key for key.
 *
 * Kept in English on purpose: the job title, the capability chips, project
 * titles, the lane labels, role titles, the "A one-man army" and
 * "The Impact-maker" headlines, and the insight → story → impact motif.
 * `route`, `id` and `filter` are structural, they must match the English file.
 */
export const home: HomeCopy = {
  hero: {
    eyebrow: "Creative Strategist & Storyteller",
    name: "Felix Phan",
    prop: "Một creative strategist theo ý tưởng đi suốt chặng đường, tới tận khâu thực thi",
    chips: ["Strategy", "Storytelling", "Project delivery"],
    primaryCta: "Xem các dự án tuyển chọn",
    quietCta: "Xem CV",
    facts: ["Sẵn sàng cho vị trí full-time", "TP. Hồ Chí Minh & Hà Nội"],
    portraitAlt: "Ảnh chân dung Felix Phan",
    orbitNote: "insight → story → impact",
  },

  proofBand: [
    { value: "2", label: "bằng cử nhân, học song song cùng lúc" },
    { value: "4", label: "sáng kiến do Felix sáng lập" },
    { value: "25", label: "dự án tuyển chọn" },
    { value: "54", label: "thành viên trong tổ chức từng quản lý" },
  ],

  featuredEyebrow: "Dự án tiêu biểu",
  featuredLink: "Xem các dự án tuyển chọn",
  featured: [
    { id: "P22", title: "Little Me Interactive Exhibition", lane: "Events & Advocacy", role: "Founder, Head Organiser", proof: "Triển lãm tương tác về sức khoẻ tinh thần, đạt 316 lượt tham quan, 34.588 lượt tiếp cận tự nhiên và 14 triệu VND tài trợ.", route: "/work/little-me" },
    { id: "P25", title: "EMPACTS: Startup Ecosystem for SDGs", lane: "Organisation Design", role: "Founder, Vice-President", proof: "Xây dựng một tổ chức phi lợi nhuận từ con số không, với hơn 40 SOP và một cuộc chuyển giao lãnh đạo trọn vẹn.", route: "/work/empacts" },
    { id: "P31", title: "Be Local", lane: "Project Management", role: "Founder, Project Manager", proof: "Một mô hình du lịch cộng đồng được hoạch định như một dự án thật. Đầu ra: 12 hạng mục bàn giao, gồm WBS trên MPP cho năm giai đoạn từ xác định phạm vi tới khi ra mắt, tất cả đều được giao chủ sở hữu rõ ràng và rà soát hằng tuần.", route: "/work/be-local" },
    { id: "P13", title: "MAGGI Recipe Solution: Research to Execution", lane: "Research & Planning", role: "Researcher and Strategic Planner", proof: "Một dự án hướng tới tính bao trùm, dùng phân tích social listening trên 74 bài đăng và 755 bình luận đã mã hoá để đề xuất chiến dịch IMC dịp Tết cho dòng sản phẩm mới của MAGGI.", route: "/work/maggi-recipe-solution" },
    { id: "P20", title: "TRESemmé Vietnam Insights Report and Media Plan", lane: "Research & Planning", role: "Researcher and Strategic Planner", proof: "Chẩn đoán đa nền tảng trên TikTok/Facebook/Instagram/YouTube và đề xuất kế hoạch media trị giá 7,3 tỷ VND.", route: "/work/tresemme-insights-media-plan" },
    { id: "P02", title: "Mùa Hạ Của Chúng Tôi", lane: "Scriptwriting & Production", role: "Director, Writer, and Co-editor", proof: "Phim ngắn thanh xuân đoạt Giải Nhất tại showcase mùa tốt nghiệp.", route: "/work/mua-ha-cua-chung-toi" },
  ],

  routes: {
    aboutCta: "Tìm hiểu thêm về Felix",
    lead: [
      "Mắc chứng quá **linh hoạt**, cực kỳ **xoay xở giỏi**, và có một **tinh thần làm chủ công việc** đến mức khó hiểu – mỗi khi một brief rơi vào tay, tôi chiến đấu hết lòng để đưa nó đi từ đầu đến cuối, bằng tất cả những gì mình có, và tới một chuẩn mực mà tôi tự hào nhận là của mình.",
      "Portfolio của tôi trải ra trên nhiều lĩnh vực; điều này có thể gây bối rối rằng *rốt cuộc Felix chuyên về cái gì?* – Vâng, **chuyên môn của tôi là làm cho việc xong**. Tôi xây những thứ buộc phải chạy được: dự án, đội ngũ, hệ thống, chiến dịch, sự kiện và khung nghiên cứu. Tôi phát huy tốt nhất khi có một mục tiêu thực sự có ý nghĩa và đủ độ phức tạp để việc thực thi không thể chỉ đi theo một template có sẵn – Nên nếu bạn cũng đang có một công việc cần được làm cho xong, cứ liên hệ với tôi nhé ^^",
    ],
    title: "A one-man army",
    image: { src: "/images/Home/Home_A one-man army.jpg", alt: "Felix Phan theo một dự án từ đầu đến cuối" },
    rows: [
      { title: "Định hình chiến lược", text: "Nghiên cứu đa phương pháp, insight và hoạch định để việc ra quyết định có cơ sở", filter: "Strategy & Research", proof: "MAGGI, TRESemmé, Scienceporium, nghiên cứu Việt Á và Pakistan" },
      { title: "Xây dựng câu chuyện", text: "Phát triển sáng tạo, biên kịch và nội dung chở được ý tưởng đi xa", filter: "Creative Content", proof: "Mùa Hạ Của Chúng Tôi, TVC BUV, chuỗi chiến dịch VinFast" },
      { title: "Dẫn dắt việc triển khai", text: "Dự án, sự kiện và vận hành thực sự về đích", filter: "Project Management", proof: "EMPACTS, Be Local, Little Me" },
    ],
  },

  interestCallout: {
    eyebrow: "Focus areas",
    title: "The Impact-maker",
    text: "Làm việc quanh phát triển bền vững, ESG, CSR và hỗ trợ doanh nghiệp xã hội, nghiên cứu đa phương pháp và tư duy hệ thống, song song với văn hoá, truyền thông và vận động xã hội tại Việt Nam.",
    cta: "Khám phá các focus areas",
    image: { src: "/images/Home/Home_The Impact-maker.jpg", alt: "Felix Phan thúc đẩy tác động xã hội" },
  },

  closing: {
    eyebrow: "Sẵn sàng cho vị trí full-time",
    emailCta: "Gửi email cho Felix",
    aboutCta: "Gặp con người đằng sau phương pháp",
  },
};
