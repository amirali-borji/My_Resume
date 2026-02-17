import React from "react";
import { useState, useEffect } from "react";
import IntroSection from "../../components/IntroSection/IntroSection";
import AboutMe from "../../components/AboutMe/AboutMe";
import ArticlesSlider from "../../components/ArticlesSlider/ArticlesSlider";
import axios from "axios";
import { useTheme } from "../../Context/ThemeContext.jsx";

function Home() {
  const [skills, setSkills] = useState([]);

  const articles = [
    {
      id: 1,
      title: "امنیت سایت و داده‌ها",
      excerpt: "روش‌های نوین برای محافظت از وب سایت ها در برابر حملات",
    },
    {
      id: 2,
      title: "طراحی رابط کاربری مدرن",
      excerpt: "اصول مهم در ساخت رابط های کاربری سریع ساده و کاربرپسند",
    },
    {
      id: 3,
      title: "بهینه سازی عملکرد وب",
      excerpt: "تکنیک هایی برای افزایش سرعت بارگذاری صفحات و تجربه بهتر",
    },
    {
      id: 4,
      title: "ری اکت و معماری فرانت اند",
      excerpt: "روش های اصولی برای ساخت پروژه های مقیاس پذیر در ری اکت",
    },
    {
      id: 5,
      title: "سئو در توسعه وب",
      excerpt: "چگونه سایت را برای موتورهای جستجو بهینه کنیم و دیده شویم",
    },
  ];

  // Get Skills
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get("http://localhost:8000/skills");
        setSkills(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="">
      {/* Blured Circle */}
      <div className="circle--blured top-[-15%] right-[-20%]"></div>

      <main className="container space-y-34">
        {/* Intro Section */}
        <IntroSection />

        {/* About Me */}
        <AboutMe skills={skills} />

        {/* Articles Slider */}
        <ArticlesSlider articles={articles} />
      </main>
    </div>
  );
}

export default Home;
