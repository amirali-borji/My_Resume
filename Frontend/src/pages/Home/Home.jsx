import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import ArticlesSlider from "../../components/ArticlesSlider/ArticlesSlider";
import axios from "axios";
import { useTheme } from "../../Context/ThemeContext.jsx";
import Portfolio from "../../components/Portfolio/Portfolio.jsx";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    let attempts = 0;
    const maxAttempts = 30; // حداکثر 30 * 100ms = 3 ثانیه صبر می‌کنیم

    const tryScroll = () => {
      const el = document.querySelector(location.hash);
      attempts++;

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < maxAttempts) {
        setTimeout(tryScroll, 100);
      }
    };

    const timer = setTimeout(tryScroll, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="">
      {/* Blured Circle */}
      <div className="circle--blured top-[-15%] right-[-20%]"></div>

      <main className="container space-y-34">
        {/* Intro Section */}
        <Hero />

        {/* Portfolio */}
        <div id="portfolio" className="scroll-mt-24">
          <Portfolio />
        </div>

        {/* About Me */}
        <AboutMe />

        {/* Articles Slider */}
        <ArticlesSlider />
      </main>
    </div>
  );
}

export default Home;
