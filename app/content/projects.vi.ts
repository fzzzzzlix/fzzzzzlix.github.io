import type { ProjectOverlays } from "./projects";

/*
 * Vietnamese project prose, laid over app/data.ts by app/content/projects.ts.
 *
 * Only the seven feature cases are translated so far (P02, P13, P20, P22, P25,
 * P31, P32). Every other project falls back to English automatically. To
 * translate one more, add its id here with the fields you want in Vietnamese,
 * nothing else needs to change.
 *
 * Deliberately NOT translated: `title` (project titles, several are already
 * Vietnamese and the rest carry brand names), `tags` and `slug` (structural).
 * Method and platform terms the industry uses in English stay in English:
 * insight, brief, TVC, storyboard, NVivo, SOP, KPI, UGC, DOOH, social listening.
 */
export const projectsVi: ProjectOverlays = {
  P02: {
    year: "2022",
    publicType: "Phim ngắn đã sản xuất",
    role: "Đạo diễn, Biên kịch và Đồng dựng phim; người dẫn dắt dự án.",
    tension: "Kể một câu chuyện thanh xuân mà không dựa vào nỗi hoài niệm sáo mòn.",
    approach: "Dùng cấu trúc ba hồi với một cú đổi điểm nhìn thay cho một cú twist thông thường. Felix viết kịch bản, rồi mang nó đi tiếp vào phần đạo diễn và dựng phim cùng đội sản xuất.",
    output: "Phim ngắn hoàn chỉnh, kịch bản và bản dựng cuối.",
    significance: "Phim đoạt Giải Nhất lượt tương tác tại showcase video mùa tốt nghiệp của trường Yên Hoà. Giải thưởng ghi nhận tập thể lớp (D5 K60); phần credit sản xuất ghi Felix là người viết kịch bản duy nhất, còn đạo diễn và dựng phim là công việc chung của cả đội.",
    evidence: "Giải Nhất lượt tương tác, được xác nhận bằng ảnh lễ trao giải, trao cho tập thể lớp (D5 K60) chứ không phải cho cá nhân Felix. Phần credit xác nhận Felix là người viết kịch bản duy nhất, với đồng đạo diễn và đồng dựng phim.",
    alt: "Một khung hình từ phim ngắn thanh xuân Mùa Hạ Của Chúng Tôi",
  },

  P13: {
    year: "2025",
    publicType: "Đề bài khách hàng trong môi trường học thuật",
    role: "Nghiên cứu viên và người hoạch định chiến lược ở giai đoạn nghiên cứu; biên kịch và người dựng storyboard ở giai đoạn thực thi.",
    tension: "Chẩn đoán vì sao MAGGI có độ nhận biết nhưng lại yếu về mức độ yêu thích so với Barona và Cholimex, rồi biến insight đó thành một chiến dịch mùa vụ đủ nổi bật trong một ngành hàng Tết đã quá đông đúc.",
    approach: "Giai đoạn một, nghiên cứu: phân tích 74 bài đăng, mã hoá 755 bình luận trong NVivo, rà soát 82 đánh giá sản phẩm trên sàn thương mại điện tử, dựng so sánh từ khoá và hành trình khách hàng, rồi đề xuất định hướng ‘Authentic Convenience’ cùng chiến lược influencer hai tầng. Giai đoạn hai, thực thi: phát triển kịch bản TVC MAGGI Tết 2026 và storyboard minh hoạ, áp định hướng authentic convenience vào một khoảnh khắc mùa vụ cụ thể thay vì một motif đoàn viên chung chung.",
    output: "Giai đoạn nghiên cứu: phân tích cạnh tranh và người tiêu dùng, biểu đồ, định hướng định vị, concept #MaggiNhanhMaNgon và chiến lược influencer hai tầng. Giai đoạn thực thi: kịch bản TVC MAGGI Tết 2026 và storyboard minh hoạ.",
    significance: "Trong tập dữ liệu đã phân tích, thảo luận về MAGGI nghiêng về sản phẩm, giá và các mối quan tâm mang tính giao dịch, trong khi Barona tạo ra nhiều thảo luận về công thức, cách dùng và khám phá hơn, cùng mức tương tác mạnh hơn. Điều đó chỉ tới định hướng ‘Authentic Convenience’, và định hướng này sau đó định hình phần sáng tạo đề xuất cho Tết 2026.",
    evidence: "Một dự án nghiên cứu theo đề bài khách hàng trong môi trường học thuật. Các con số đến từ chính phần phân tích của Felix trên 74 bài đăng, 755 bình luận mã hoá bằng NVivo và 82 đánh giá sản phẩm.",
    alt: "Key visual chiến dịch MAGGI Recipe Solution, từ nghiên cứu tới thực thi mùa Tết",
  },

  P20: {
    year: "Tháng 7, 2024",
    publicType: "Đề bài khách hàng trong môi trường học thuật",
    role: "Nghiên cứu viên và media planner.",
    tension: "Giải thích vì sao hiệu quả mạnh trên TikTok lại tồn tại song song với sự sụt giảm hoặc chững lại trên Facebook, Instagram và YouTube.",
    approach: "Dùng dữ liệu Fanpage Karma trên bốn nền tảng và các đối thủ, chẩn đoán ra một khoảng hụt trong việc chuyển giao niềm tin, rồi đề xuất ‘Step up your hair game at home’ cùng các hoạt động AI DOOH, UGC, pop-up và hợp tác với stylist-creator.",
    output: "Báo cáo insight truyền thông người tiêu dùng và một đề xuất kế hoạch media với ngân sách khoảng 7,3 tỷ VND.",
    significance: "Phần chẩn đoán dựa trên các chỉ số nền tảng có mốc thời gian rõ ràng, ví dụ TikTok khoảng 60 nghìn người theo dõi, 3,3% tương tác và 16% tăng trưởng, để giải thích khoảng cách giữa các nền tảng.",
    evidence: "Một báo cáo insight và kế hoạch media theo đề bài khách hàng trong môi trường học thuật. Các chỉ số là số liệu gắn với mốc thời gian, lấy từ phần phân tích Fanpage Karma của Felix, và ngân sách ~7,3 tỷ VND là một đề xuất mô phỏng, không phải ngân sách đã được chi.",
    alt: "Báo cáo và dữ liệu minh chứng cho TRESemmé Vietnam Insights Report and Media Plan",
  },

  P22: {
    year: "3-5 tháng 4, 2024",
    publicType: "Sự kiện & trải nghiệm",
    role: "Trưởng ban tổ chức; dẫn dắt đội 27 người.",
    tension: "Tạo ra một trải nghiệm về sức khoẻ tinh thần dễ tiếp cận giữa một kỳ học nhiều áp lực, mà không khiến nó giống một buổi can thiệp chính thức.",
    approach: "Thiết kế một triển lãm tương tác để người xem tự đi theo nhịp của mình, với Draw Little Me, DIY Calm Jar và một không gian trưng bày chung; điều phối Diversity & Inclusion Office, Wellbeing Department, Student Life Department của RMIT, RMIT Current Media Club và các nghệ sĩ RMIT độc lập.",
    output: "Triển lãm ba ngày, gây quỹ, vận hành, điều phối đối tác và truyền thông đa nền tảng.",
    significance: "Báo cáo sự kiện ghi nhận 316 lượt tham quan (97 / 115 / 104 qua ba ngày), 34.588 lượt tiếp cận tự nhiên và 22 lượt quay lại (6,96%), vượt các KPI đặt ra là 300+ lượt tham quan và 15.000+ lượt tiếp cận khi ba ngày sự kiện khép lại.",
    evidence: "Vai trò, đối tác và việc triển khai sự kiện do Felix xác nhận. Các con số về lượt tham quan, lượt quay lại và lượt tiếp cận lấy từ báo cáo của chính sự kiện; KPI 300+ lượt tham quan đạt được vào thời điểm kết thúc ba ngày, không phải trong Ngày 2.",
    alt: "Không gian triển lãm tương tác về sức khoẻ tinh thần Little Me",
  },

  P25: {
    year: "Tháng 5 - Tháng 12, 2024",
    publicType: "Lãnh đạo & thiết kế tổ chức",
    role: "Đồng sáng lập và Phó Chủ tịch; thiết kế một tổ chức trải trên sáu phòng ban.",
    tension: "Xây một tổ chức vận hành nhanh, kết nối các doanh nghiệp xã hội giai đoạn đầu với hệ sinh thái SDG tại Việt Nam, và làm cho việc chuyển giao lãnh đạo trở nên khả thi.",
    approach: "Thiết kế sáu phòng ban, 21 vai trò, hơn 40 SOP, các kế hoạch chiến lược, cơ chế theo dõi liên phòng ban và quy trình đánh giá hiệu suất cho một tổ chức 54 thành viên.",
    output: "Cấu trúc tổ chức, hệ vận hành liên phòng ban, và một cuộc chuyển giao lãnh đạo. Tài liệu tổ chức chi tiết thuộc diện bảo mật.",
    significance: "Cho thấy năng lực thiết kế tổ chức và tư duy hệ thống, trình bày được kiến trúc vận hành trong khi các tài liệu nội bộ vẫn được giữ bảo mật.",
    evidence: "Vai trò Đồng sáng lập, Phó Chủ tịch và cấu trúc sáu phòng ban do Felix xác nhận. Tài liệu tổ chức nội bộ được giữ bảo mật.",
    alt: "EMPACTS, một tổ chức hệ sinh thái khởi nghiệp vì các Mục tiêu Phát triển Bền vững",
  },

  P31: {
    year: "2025",
    publicType: "Đồ án capstone về quản trị dự án",
    role: "Project Manager của một đội học thuật bảy người, trực tiếp sở hữu một số hạng mục bàn giao và rà soát chéo phần còn lại.",
    tension: "Đưa một đội bảy người đi hết một chu trình quản trị dự án đầy đủ, đồng thời hoạch định một mô hình du lịch cộng đồng tại Hà Giang kết nối du khách với văn hoá bản địa mà không biến văn hoá đó thành món hàng.",
    approach: "Dựng hệ vận hành thay vì tự viết mọi phần: Project Manager tới PIC của từng hạng mục tới các thành viên, với cơ chế rà soát hai lớp và họp hằng tuần suốt chu trình. Felix trực tiếp sở hữu một số hạng mục bàn giao và rà soát phần còn lại, theo dõi công việc trên Trello và chạy bảy vòng đánh giá chéo hằng tuần.",
    output: "Một hệ quản trị dự án được mô phỏng cho mô hình kinh doanh đề xuất, bao trùm phạm vi, nhân sự, ngân sách, quản trị các bên liên quan, một sổ đăng ký 30 rủi ro, các cổng kiểm soát chất lượng và một tiến độ. Felix là PIC được ghi nhận cho Project Charter, Human Resources Plan, video thuyết trình và Peer Evaluation, và xuất hiện với vai trò người rà soát trên 15 đầu việc được phân bổ. Soft launch (20 tháng 9, 2025) và launch chính thức (4 tháng 10, 2025) là các mốc trong tiến độ kế hoạch, không phải sự kiện đã diễn ra.",
    significance: "Cho thấy năng lực quản trị dự án có cấu trúc: quản lý công việc, chứ không chỉ mô tả ý tưởng. Kế hoạch kinh doanh, mô hình chi phí khoảng 2,594 tỷ VND và các mốc ra mắt là kịch bản hoạch định, không phải kết quả thương mại.",
    evidence: "Một đồ án capstone học thuật về quản trị dự án. Các con số tài chính và mốc ra mắt là mô hình hoạch định, không phải kết quả đã đạt được. Điểm đánh giá chéo đến từ việc đánh giá ẩn danh trong nhóm học thuật, không phải nhận xét của khách hàng hay giới chuyên môn. Felix không tự tay viết mọi hạng mục bàn giao.",
    alt: "Bìa bài thuyết trình quản trị dự án Be Local trên nền phong cảnh núi Hà Giang",
  },

  P32: {
    year: "2025",
    publicType: "Mô phỏng capstone học thuật",
    role: "Communication Manager, vai trò trong mô phỏng.",
    tension: "Một tổ chức nên truyền thông về trách nhiệm của mình như thế nào khi cả an toàn của sinh viên lẫn niềm tin của công chúng đều đang bị đặt dấu hỏi?",
    approach: "Dựng một kịch bản truyền thông ứng phó khủng hoảng quanh một vụ việc an toàn thực phẩm có thật tại HUST năm 2024. Felix trực tiếp viết thông cáo báo chí; phần media kit và tài liệu họp báo rộng hơn chỉ được trưng ra như bối cảnh của cả đội.",
    output: "Thông cáo báo chí khủng hoảng do Felix viết, nằm trong một gói chuẩn bị truyền thông của cả đội, phát triển cho một bài mô phỏng học thuật.",
    significance: "Bổ sung bằng chứng PR chuyên sâu: khung xử lý vấn đề và rủi ro, lối viết nhận trách nhiệm ở cấp tổ chức, và sự sẵn sàng với báo chí khi đang bị soi.",
    evidence: "Một bài mô phỏng học thuật năm 2025, không phải công việc tại HUST hay truyền thông chính thức của trường. Quyền sở hữu cá nhân trực tiếp chỉ được khẳng định với thông cáo báo chí; các tài liệu ứng phó khác là bối cảnh của cả đội. Một số hiện vật trong mô phỏng dùng nhãn hư cấu ‘Dr. Felix Phan’, đây không phải một học vị có thật và không được công bố tại đây.",
    alt: "Thông cáo báo chí do Felix Phan viết cho bài mô phỏng truyền thông khủng hoảng an toàn thực phẩm tại HUST năm 2025",
  },
};
