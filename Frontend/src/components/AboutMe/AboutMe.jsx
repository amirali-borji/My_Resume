import React from "react";
import SkillCard from "../SkillCard/SkillCard";
import { useTheme } from "../../Context/ThemeContext.jsx";
import groupImg from "../../assets/images/Group 62.svg";

function AboutMe({}) {
  const { darkMode } = useTheme();

  return (
    <>
      <section className="container flex flex-col items-center gap-20 lg:justify-between lg:flex-row ">
        {/* Image */}
        <div className="w-full lg:w-1/2 shrink-0">
          <img className="w-full max-w-[400px] mx-auto" src={groupImg} alt="" />
        </div>

        {/* Titles & Desc & Skill Cards */}
        <div className="flex gap-10 lg:flex-col min-w-0">
          {/* About Me & Desc*/}
          <div className="flex flex-col gap-8">
            {/* Title */}

            <h1 className="flex gap-2 font-Morabba-Bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span>درباره</span>
              <span className="text-primary">من</span>
            </h1>
            {/* Desc */}
            <div className="text-[14px] font-Dana-Medium lg:text-[18px] text-secondary-light dark:text-secondary-dark">
              <p>
              توسعه‌دهنده بک‌اند با تجربه در طراحی، توسعه و نگهداری سرویس‌ها و APIهای مقیاس‌پذیر و قابل اعتماد. مسلط به اصول توسعه نرم‌افزار، نوشتن کدهای تمیز و قابل نگهداری و علاقه‌مند به ارائه راهکارهای بهینه برای حل چالش‌های فنی. دارای روحیه یادگیری مستمر، توانایی کار تیمی و اشتیاق به استفاده از فناوری‌های روز برای توسعه نرم‌افزارهای باکیفیت و کارآمد
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
          {/* {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              desc={skill.desc}
              img={skill.img}
              darkMode={darkMode}
            />
          ))} */}
          <SkillCard
            key={1}
            title={"JavaScript"}
            desc={"Front-end language"}
            img={
              "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            }
            darkMode={darkMode}
          />
          <SkillCard
            key={2}
            title={"Python"}
            desc={"Back-end and AI"}
            img={
              "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            }
            darkMode={darkMode}
          />
          <SkillCard
            key={3}
            title={"React"}
            desc={"Frontend framework"}
            img={
              "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            }
            darkMode={darkMode}
          />
          <SkillCard
            key={4}
            title={"Node.js"}
            desc={"Backend runtime"}
            img={
              "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
            }
            darkMode={darkMode}
          />
        </div>
      </section>
    </>
  );
}

export default AboutMe;
