import React from "react";
import SkillCard from "../SkillCard/SkillCard";
import { useTheme } from "../../Context/ThemeContext.jsx";

function AboutMe({ skills }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      <section className="container flex flex-col items-center gap-20 lg:justify-between lg:flex-row ">
        {/* Image */}
        <div>
          <img
            className="lg:w-400"
            src="/src/assets/images/Group 62.svg"
            alt=""
          />
        </div>

        {/* Titles & Desc & Skill Cards */}
        <div className="flex gap-10 lg:flex-col">
          {/* About Me & Desc*/}
          <div className="flex flex-col gap-8">
            {/* Title */}

            <h1 className="flex gap-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span>درباره</span>
              <span className="text-primary">من</span>
            </h1>
            {/* Desc */}
            <div className="text-[14px] lg:text-[18px] text-secondary-light dark:text-secondary-dark">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                deleniti ipsam? Dolorem nemo repudiandae quod iusto harum?
                Ratione sed dolorem cum molestias amet! Culpa nostrum, itaque
                quia molestiae iste vero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="container relative">
        {/* Blured Circle */}
        <div className="circle--blured  top-[-5%] left-[20%] z-0"></div>

        <h1 className="text-4xl font-Morabba-Bold sm:text-5xl lg:text-6xl ">
          مهارت ها
        </h1>

        <div className="grid grid-cols-1 gap-4 bg-transparent lg:grid-cols-2 mt-11 ">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              desc={skill.desc}
              img={skill.img}
              darkMode={darkMode}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutMe;
