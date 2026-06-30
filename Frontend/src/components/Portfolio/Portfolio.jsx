import React, { useState } from "react";
import { Link } from "react-router-dom";
import works from "../../../public/data/worksData";

const categories = [
  { id: "religious", label: "مذهبی" },
  { id: "frontend", label: "توسعه فرانت‌اند" },
  { id: "uiux", label: "طراحی UI/UX" },
  { id: "app", label: "اپلیکیشن موبایل" },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("religious");
  const activeWorks = works[activeCategory] || [];

  return (
    <section className="container relative py-10">
      <div className="circle--blured top-[10%] right-[10%] z-0"></div>

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-Morabba-Bold sm:text-5xl lg:text-6xl">
          نمونه‌کارها
        </h1>
        <span className="block h-1 w-28 rounded-full bg-gradient-to-r from-primary to-transparent"></span>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-8 mt-10 text-sm sm:text-base">
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          const isDisabled = works[cat.id].length === 0;
          return (
            <button
              key={cat.id}
              disabled={isDisabled}
              onClick={() => !isDisabled && setActiveCategory(cat.id)}
              className={`relative pb-2 transition-colors duration-300 ${
                isActive
                  ? "text-primary"
                  : isDisabled
                  ? "text-secondary-light/40 dark:text-secondary-dark/40 cursor-not-allowed"
                  : "text-secondary-light dark:text-secondary-dark hover:text-primary"
              }`}
            >
              {cat.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {activeWorks.map((work) => (
          <Link
            to={`/portfolio/${work.slug}`}
            key={work.id}
            className="group relative h-[300px] overflow-hidden rounded-2xl shadow-lg block"
          >
            <img
              src={work.cover}
              alt={work.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-primary/60 transition-all duration-300"></div>

            <div className="absolute bottom-0 right-0 left-0 p-5 text-right">
              <h3 className="text-lg font-Morabba-Bold text-white sm:text-xl">
                {work.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                {work.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;