import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import IntroSection from "../../components/IntroSection/IntroSection";
import AboutMe from "../../components/AboutMe/AboutMe";
import ArticlesSlider from "../../components/ArticlesSlider/ArticlesSlider";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
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

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.remove("bg-slate-50");
      document.body.classList.add("bg-slate-900");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-slate-900");
      document.body.classList.add("bg-slate-50");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container space-y-34">
        {/* Intro Section */}
        <IntroSection />

        {/* About Me */}
        <AboutMe skills={skills} darkMode={darkMode} />

        {/* Articles Slider */}
        <ArticlesSlider articles={articles} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
