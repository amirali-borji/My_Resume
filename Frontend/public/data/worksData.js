import ChandRasanehConver from "../../src/assets/images/Portfolio/1.jpg";
import ChandRasanehPic1 from "../../src/assets/images/ChandRasaneh/pic1.jpg";
import ChandRasanehPic2 from "../../src/assets/images/ChandRasaneh/pic2.jpg";
import ChandRasanehPic3 from "../../src/assets/images/ChandRasaneh/pic3.jpg";
import ChandRasanehPic4 from "../../src/assets/images/ChandRasaneh/pic4.jpg";
import ChandRasanehPic5 from "../../src/assets/images/ChandRasaneh/pic5.jpg";
import ChandRasanehPic6 from "../../src/assets/images/ChandRasaneh/pic6.jpg";
import ChandRasanehPic7 from "../../src/assets/images/ChandRasaneh/pic7.jpg";
import ChandRasanehPic8 from "../../src/assets/images/ChandRasaneh/pic8.jpg";
import ChandRasanehPic9 from "../../src/assets/images/ChandRasaneh/pic9.jpg";

// data/worksData.js
const works = {
  religious: [
    {
      id: 1,
      slug: "quran-institute",
      title: "وبسایت چند رسانه",
      desc: "وبسایت امین قدیم برای حفظ و ترویج آثار ایشان",
      cover: ChandRasanehConver,
      gallery: [
        ChandRasanehPic1,
        ChandRasanehPic2,
        ChandRasanehPic3,
        ChandRasanehPic4,
        ChandRasanehPic5,
        ChandRasanehPic6,
        ChandRasanehPic7,
        ChandRasanehPic8,
        ChandRasanehPic9,
      ],
      liveUrl: "https://aminghadim.com",
    },
    {
      id: 2,
      slug: "heyat-site",
      title: "سایت هیئت مذهبی",
      desc: "طراحی سایت اطلاع‌رسانی برنامه‌ها و پخش زنده مراسم مذهبی.",
      cover: "/images/work-heyat.jpg",
      gallery: [
        "/images/work-heyat-1.jpg",
        "/images/work-heyat-2.jpg",
        "/images/work-heyat-3.jpg",
      ],
      liveUrl: "https://example.com",
    },
    {
      id: 3,
      slug: "dua-app",
      title: "اپلیکیشن دعا و زیارت",
      desc: "رابط کاربری اپلیکیشن متون دعا با قابلیت جست‌وجو و بوکمارک.",
      cover: "/images/work-dua.jpg",
      gallery: ["/images/work-dua-1.jpg", "/images/work-dua-2.jpg"],
      liveUrl: "https://example.com",
    },
  ],
  frontend: [],
  uiux: [],
  app: [],
};

export default works;
