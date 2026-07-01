import React from "react";

function PortfolioCard({ title, desc, img }) {
  return (
    <div className="cursor-pointer">
      <div
        className={`${"w-66 md:w-76 lg:w-96"} h-fit  p-6 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 hover:dark:bg-slate-700 transform transition-all duration-500 `}
      >
        {/* Card Img */}
        <div className="object-cover w-full h-48 overflow-hidden rounded-2xl">
          <img src={img} alt="" />
        </div>

        {/* Card Texts */}
        <div className="flex flex-col justify-between mt-6 h-20">
          <div className="space-y-2">
            <h3 className="text-xl tracking-tight md:text-2xl font-Dana-DemiBold">
              {title}
            </h3>
            <p className="text-[12px] md:text-base line-clamp-2">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
