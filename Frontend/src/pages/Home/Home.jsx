import React from "react";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import ArticlesSlider from "../../components/ArticlesSlider/ArticlesSlider";
import axios from "axios";
import { useTheme } from "../../Context/ThemeContext.jsx";

function Home() {
  const [skills, setSkills] = useState([]);

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
        <Hero />

        {/* About Me */}
        <AboutMe skills={skills} />

        {/* Articles Slider */}
        <ArticlesSlider />
      </main>
    </div>
  );
}

export default Home;
