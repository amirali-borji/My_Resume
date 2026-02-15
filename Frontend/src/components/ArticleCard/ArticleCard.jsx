import React from "react";

function ArticleCard({ title, desc, img, fullWidth }) {
  return (
    <div className="cursor-pointer">
      <div
        className={`${
          fullWidth ? "w-full" : "w-66 md:w-76 lg:w-96"
        } h-98  p-6 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 hover:dark:bg-slate-700 transform transition-all duration-500 hover:scale-105`}
      >
        {/* Card Img */}
        <div className="rounded-2xl w-full h-48 object-cover overflow-hidden">
          <img src={img} alt="" />
        </div>

        {/* Card Texts */}
        <div className="mt-6 space-y-2">
          <h3 className="text-xl md:text-2xl tracking-tight font-Dana-DemiBold">
            {title}
          </h3>
          <p className="text-[12px] md:text-base line-clamp-2">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
