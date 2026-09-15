import { muaHa as en, type MuaHaCopy } from "./mua-ha.en";

/*
 * P02 Mùa Hạ Của Chúng Tôi, Vietnamese case copy.
 *
 * Each block spreads the English one first (`...en.film`), so every URL, image
 * path and embed source is inherited automatically and can never drift between
 * the two languages. Only the words are overridden below. If a link changes in
 * mua-ha.en.ts, this file follows it with no edit needed.
 */
export const muaHa: MuaHaCopy = {
  hero: {
    ...en.hero,
    title: "Mùa Hạ Của Chúng Tôi",
    strip: [
      { value: "Leader", label: "của dự án" },
      { value: "Director", label: "biên kịch và đồng dựng phim" },
      { value: "Giải Nhất", label: "tập thể lớp D5 K60" },
      { value: "3 hồi", label: "cấu trúc với một cú đổi điểm nhìn" },
    ],
  },
  film: {
    ...en.film,
    eyebrow: "Sản phẩm cuối",
    title: "Bộ phim",
    body: [
      "Phim ngắn hoàn chỉnh, được chiếu tại showcase video mùa tốt nghiệp của trường Yên Hoà. Phim phát ngay bên dưới qua bài đăng Facebook gốc, kèm một đường dẫn trực tiếp để dự phòng.",
    ],
    embed: {
      ...en.film.embed,
      title: "Mùa Hạ Của Chúng Tôi, phim ngắn bản gốc",
      fallbackLabel: "Xem phim trên Facebook",
      extraLinks: [{ ...en.film.embed.extraLinks[0], label: "Bản có phụ đề tiếng Anh" }],
    },
  },
  authorship: {
    ...en.authorship,
    eyebrow: "Quyền tác giả",
    title: "Viết một ký ức lớp học mà không viết thành hoài niệm sáo mòn",
    body: [
      "Phim tốt nghiệp rất dễ sụp xuống thành một montage quen thuộc: đồng phục, hành lang, ngày cuối cùng, một bài hát đa cảm. Bài toán sáng tạo là dựng một tác phẩm thanh xuân vẫn đủ thân thuộc với lớp sắp ra trường, nhưng có đủ cấu trúc để đứng được như một phim ngắn thay vì một cuộn băng ký ức.",
      "Phần Felix sở hữu rõ ràng nhất với tư cách cá nhân là kịch bản. Credit sản xuất gốc ghi Felix là người viết kịch bản duy nhất, với đạo diễn và dựng phim được chia sẻ trong cả đội: vừa là quyền tác giả, vừa là khả năng chuyển một câu chuyện đã được viết ra đi qua một quy trình sản xuất tập thể.",
    ],
  },
  script: {
    ...en.script,
    title: "Kịch bản",
    body: [
      "Kịch bản được tổ chức quanh một tiến trình ba hồi và một cú đổi điểm nhìn, thay vì một cú lật quá khổ, để những tương tác nhỏ và quen thuộc dồn lại thành bước ngoặt cảm xúc. Bạn có thể đọc nó ngay bên dưới, cạnh phần credit sản xuất và giải thưởng.",
    ],
    embed: {
      ...en.script.embed,
      title: "Mùa Hạ Của Chúng Tôi, kịch bản gốc",
      fallbackLabel: "Đọc kịch bản gốc",
    },
    creditsFigure: {
      ...en.script.creditsFigure,
      alt: "Credit sản xuất phim Mùa Hạ Của Chúng Tôi, ghi Felix Phan là người viết kịch bản duy nhất, với nhiều đạo diễn và người dựng phim.",
      caption: "Phần credit: Felix là người viết kịch bản duy nhất, đạo diễn và dựng phim là công việc chung của cả đội.",
      tag: "Bằng chứng về quyền sở hữu",
    },
    awardFigure: {
      ...en.script.awardFigure,
      alt: "Ảnh lễ trao giải, Giải Nhất lượt tương tác trao cho tập thể lớp D5 K60.",
      caption: "Giải Nhất lượt tương tác, trao cho tập thể lớp D5 K60, không phải cho cá nhân Felix.",
      tag: "Bằng chứng về kết quả",
    },
    cameoFigure: en.script.cameoFigure
      ? {
          ...en.script.cameoFigure,
          alt: "Felix diễn một cảnh trong phim Mùa Hạ Của Chúng Tôi.",
          caption: "Felix xuất hiện trong phim, một vai cameo trong phim ngắn tốt nghiệp của lớp.",
          tag: "Vai cameo trên màn ảnh",
        }
      : null,
  },
  demonstrates: {
    ...en.demonstrates,
    eyebrow: "Điều dự án này cho thấy",
    title: "Quyền tác giả của câu chuyện sống sót qua quá trình làm chung",
    body: [
      "Làm bộ phim này dạy tôi rằng một kịch bản chỉ tồn tại một nửa trên trang giấy: phần còn lại được quyết định trong diễn xuất, trong cách quay và trong phòng dựng. Việc mang chính phần viết của mình đi qua đạo diễn và dựng phim, bên cạnh một đội ngũ, cho tôi thấy một câu chuyện dịch chuyển nhiều đến mức nào trên đường ra tới màn ảnh, và làm sao để bảo vệ ý đồ của nó mà không bám chặt lấy quyền tác giả của từng khung hình.",
    ],
    links: [
      { ...en.demonstrates.links[0], label: "Xem phim (Facebook)" },
      { ...en.demonstrates.links[1], label: "Bản có phụ đề tiếng Anh" },
      { ...en.demonstrates.links[2], label: "Đọc kịch bản gốc" },
    ],
  },
};
