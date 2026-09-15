import type { ExperienceCopy } from "./experience.en";

/*
 * Experience page copy, Vietnamese. Mirrors app/content/experience.en.ts.
 *
 * Kept in English on purpose: organisation names, role titles, degree names,
 * award and certificate names (they are proper nouns and appear that way on
 * the certificates themselves), and the link labels. `url` and image paths are
 * structural, they must stay identical to the English file.
 */
export const experience: ExperienceCopy = {
  meta: {
    title: "Experience",
    description: "Hành trình của Felix Phan qua nội dung, sản xuất, sự kiện, lãnh đạo và thiết kế tổ chức.",
  },
  timeline: [
    { dates: "Tháng 2 - Tháng 5, 2026", org: "MBE: Mien Bac Event", role: "Assistant to Director, Internship", scope: [
      "Tinh gọn vận hành cấp điều hành cho Giám đốc qua 4 sự kiện, giảm 60% thời gian chuẩn bị họp và giúp mọi đầu việc phát sinh được xử lý ngay trong ngày với tất cả các bên liên quan.",
      "Đảm nhận hậu cần trọn gói cho 7 sự kiện doanh nghiệp (50-400 khách), quản lý tiến độ, điều phối nhà cung cấp và giám sát thi công.",
      "Điều phối một ngày tour khách hàng 270 người tại Hà Nội, về đích đúng giờ trên 6 luồng công việc hậu cần.",
    ], links: [
      { label: "Website", url: "https://sukienmienbac.vn/" },
    ], images: [
      "/images/p24-mbe.jpg",
    ] },
    { dates: "Tháng 5 - Tháng 12, 2024", org: "EMPACTS: Startup Ecosystem for SDGs", role: "Founder and Vice-President", scope: [
      "Thiết kế hơn 40 SOP và định nghĩa 21 vai trò trong 6 phòng ban, thiết lập quy trình và thẩm quyền ra quyết định rõ ràng, giúp việc chuyển giao cho nhiệm kỳ lãnh đạo kế tiếp diễn ra trọn vẹn.",
      "Quản lý toàn bộ vòng đời dự án cho một tổ chức 54 thành viên, gồm hoạch định chiến lược, thiết kế vai trò, theo dõi tiến độ liên phòng ban và đánh giá hiệu suất.",
    ], links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/company/empacts/posts/?feedView=all" },
      { label: "Facebook", url: "https://www.facebook.com/empacts.org" },
    ], images: [
      "/images/cases/p25/p25-onepager-1.png",
      "/images/cases/p25/p25-felix.jpg",
    ] },
    { dates: "Tháng 3 - Tháng 7, 2024", org: "ForArt Film Production", role: "Creative Intern", scope: [
      "Điều phối thực thi tại hiện trường cho 2 dự án sản xuất chiến dịch, bám sát tiến độ và kiểm soát chất lượng tại chỗ trong suốt các ngày quay.",
      "Lên ý tưởng và viết kịch bản cho 3 chiến dịch TVC thương mại của VinFast, BUV và Hapacol, sản xuất 4 vòng kịch bản mỗi chiến dịch từ brief tới storyboard cuối, tất cả đều đúng phạm vi và đúng hạn.",
      "Quản lý toàn bộ chu trình sản xuất cho một chuỗi nội dung short-form hỗ trợ chiến dịch VF5 × Kim Yoo-jung.",
    ], links: [
      { label: "Website", url: "https://forartproduction.com/" },
      { label: "Vimeo", url: "https://vimeo.com/forartfilm" },
      { label: "Facebook", url: "https://www.facebook.com/ForArtFilm/" },
    ], images: [
      "/images/p10-onset-1.jpg",
      "/images/p10-onset-2.jpg",
    ] },
    { dates: "Tháng 9, 2023 - Tháng 6, 2024", org: "RMIT Innovation & Entrepreneurship Club Hanoi", role: "Assistant to Vice President, Operations and Marketing Lead", scope: [
      "Dẫn dắt đội vận hành 42 người tổ chức chuỗi workshop và toạ đàm tại Hà Nội – đạt khoảng 200 người tham dự, 5 diễn giả ngành và hơn 30.000 lượt tương tác trên mạng xã hội mỗi chu kỳ.",
      "Giám sát hai phòng HR và Media, điều phối phối hợp liên phòng ban và đảm bảo chất lượng đầu ra của cả hai đội.",
      "Chỉ đạo đội 12 người cho một chương trình gây quỹ từ thiện hỗ trợ bệnh nhi ung thư tại Bệnh viện K Hà Nội – lên ý tưởng, sản xuất và bán một dòng sản phẩm thủ công, gây quỹ được 20.000.000 VND và hơn 20.000 lượt tương tác trên mạng xã hội trong 2 tuần.",
    ], links: [
      { label: "Facebook", url: "https://www.facebook.com/ieclub.hn/" },
    ], images: [
      "/images/cases/p26/p26-iec-leaders.jpg",
      "/images/cases/p26/p26-iec-event.jpg",
      "/images/cases/p26/p26-petals-recap.jpg",
    ] },
    { dates: "Tháng 10, 2022 - Tháng 6, 2024", org: "RMIT Vietnam Student Council Hanoi", role: "Content Creator → Media Planner → Director of Content → Student Rights & Welfare Officer", scope: [
      "Dẫn dắt đội 27 người sản xuất một triển lãm tương tác quy mô đầy đủ về sức khoẻ tinh thần – đạt 316 lượt tham quan, tỉ lệ quay lại 6,96% và hơn 34.500 lượt tương tác trên mạng xã hội trong 3 ngày.",
      "Dẫn dắt đội 25 người tổ chức sự kiện Giáng sinh thường niên của Student Council – mang về 225 lượt ghé booth, 101 người tham dự workshop và hơn 15.000 lượt tương tác trên mạng xã hội trong 5 ngày.",
      "Phối hợp với 5 phòng ban của RMIT University để nhận diện những khoảng trống trong phúc lợi sinh viên và vận động thay đổi chính sách, dẫn tới hành động ở cấp toàn trường.",
    ], links: [
      { label: "Đọc thêm (RMIT)", url: "https://www.rmit.edu.vn/students/student-news-and-events/student-news/student-council-empowering-voices-rmit-vietnam" },
    ], images: [
      "/images/cases/student council web.jpg",
      "/images/cases/student council election.jpg",
      "/images/cases/student council inclusion award.jpg",
      "/images/cases/student council cert.jpg",
    ] },
  ],
  education: {
    eyebrow: "Học vấn",
    title: "Học vấn",
    items: [
      { span: "2022 - Tháng 4, 2027", title: "Bachelor of Professional Communication", text: "RMIT University" },
      { span: "2022 - Tháng 4, 2027", title: "Bachelor of Business Administration in English", text: "Trường Đại học Kinh tế Quốc dân" },
    ],
    note: "Tôi có thể nhận công việc full-time ngay, vì đã hoàn tất toàn bộ môn học và sẽ nhận bằng tại lễ tốt nghiệp vào tháng 4 năm 2027.",
  },
  credentials: {
    eyebrow: "Thành tích tuyển chọn",
    title: "Các thành tích khác",
    list: [
      "Học bổng Khuyến khích học tập NEU các năm 2023, 2024 và 2025.",
      "Diversity & Inclusion Award của RMIT University 2023.",
      "Top 15 toàn quốc cuộc thi Map the System do Skoll Centre, University of Oxford tổ chức, năm 2023.",
      "Giải Khuyến khích quốc gia Microsoft Office Specialist World Championship 2022.",
      "Thành viên ban giám khảo HAEC Entrepreneurship Summer Camp 2024.",
      "Được bầu làm Student Rights & Welfare Officer của RMIT Vietnam Student Council nhiệm kỳ 2023-2024.",
      "Được bầu làm Đại sứ Viện Quản trị Kinh doanh, Trường Đại học Kinh tế Quốc dân, năm 2023.",
      "Học bổng Tài năng của Vin University (70%) năm 2022.",
      "Chứng chỉ Microsoft Office Specialist (Word, PowerPoint, Excel) do IIG Việt Nam cấp, năm 2021.",
    ],
    note: "Các chứng chỉ được cấp cho Nguyễn Phan Thục Hương, tên khai sinh của Felix Phan.",
    slideshow: [
      "/images/cases/Slideshow cert/1 Cert full.jpg",
      "/images/cases/Slideshow cert/2 SC.jpg",
      "/images/cases/Slideshow cert/3 student council inclusion award 2.jpg",
      "/images/cases/Slideshow cert/4 BUV cert.jpg",
      "/images/cases/Slideshow cert/5 Kawaii startup.jpg",
      "/images/cases/Slideshow cert/6 IEC.jpg",
      "/images/cases/Slideshow cert/7 MOA.jpg",
      "/images/cases/Slideshow cert/8 CMO.jpg",
      "/images/cases/Slideshow cert/9 Kawaii startup 1.jpg",
      "/images/cases/Slideshow cert/10 HR Sandbox.jpg",
      "/images/cases/Slideshow cert/11 d4i.png",
      "/images/cases/Slideshow cert/11 stratic.jpg",
      "/images/cases/Slideshow cert/12 lac.jpg",
      "/images/cases/Slideshow cert/12 ppg.jpg",
      "/images/cases/Slideshow cert/13 MOS National award.jpg",
      "/images/cases/Slideshow cert/14 MOS National cert.jpg",
      "/images/cases/Slideshow cert/15 MOS_Excel 2016.jpg",
      "/images/cases/Slideshow cert/16 MOS_Powerpoint 2013.jpg",
      "/images/cases/Slideshow cert/17 MOS_Powerpoint 2016.jpg",
      "/images/cases/Slideshow cert/18 MOS_Word 2013.jpg",
      "/images/cases/Slideshow cert/19 Charity.png",
      "/images/cases/Slideshow cert/20 certificate-171509.png",
      "/images/cases/Slideshow cert/21 aphw.jpg",
      "/images/cases/Slideshow cert/22 paidia.jpg",
      "/images/cases/Slideshow cert/23 gcb.jpg",
      "/images/cases/Slideshow cert/24 lumiere.jpg",
      "/images/cases/Slideshow cert/25 labougie2.png",
      "/images/cases/Slideshow cert/26 labeaute.jpg",
      "/images/cases/Slideshow cert/27 ccc.jpg",
      "/images/cases/Slideshow cert/28 anatolie.jpg",
      "/images/cases/Slideshow cert/29 hdt.jpg",
    ] as string[],
  },
  cta: {
    eyebrow: "Câu hỏi hữu ích tiếp theo",
    title: "Những vai trò đó đã tạo ra cái gì?",
    button: "Xem các dự án tuyển chọn",
  },
};
