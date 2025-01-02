import React from "react";
import { footerBottom } from "../../constans";

const FooterBottom = () => {
  return (
    <div className="w-full bg-footer_bottom p-8 ">
      <div className="max-w-5xl mx-auto ">
        <div className="w-full grid grid-cols-3 md:grid-cols-4 mdl:grid-cols-6 xl:grid-cols-7 gap-3 place-conyent
         text-gray-400">
          {footerBottom.map((data , i) => (
            <div className="hover:underline" key={i}>
              <h3 className="w-24 font-semibold text-[12px] hover:underline text-[#DDD] leading-3 mb-[2px]">
                {data.title}
              </h3>
              <p className="w-24 tracking-tight text-[12px] text-[#999] hover:underline leading-3 cursor-pointer">{data.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
