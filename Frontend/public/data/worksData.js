import ChandRasanehConver from "../../src/assets/images/Portfolio/1.jpg"




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
        "/images/work-quran-1.jpg",
        "/images/work-quran-2.jpg",
        "/images/work-quran-3.jpg",
        "/images/work-quran-4.jpg",
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
