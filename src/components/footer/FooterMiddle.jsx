import React from "react";
import FooterMiddleList from "./FooterMiddleList";
import { MiddleList } from "../../constans";
import { logo , bdFlag } from "../../assets";
const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      {/* Top Start Here */}
      <div className="w-full border-b-[1px] border-gray-500 p-10">
        <div className="max-w-5xl mx-auto text-gray-300 ">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 
          md:place-items-center md:items-start  ">
            {MiddleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Top End Here */}
      {/* Bottom Start Here  */}
      <div className="w-full flex gap-6 py-6 items-center justify-center">
        <div>
          <img className="w-20 pt-3 " src={logo} alt="" />
        </div>
        <div>
          <p className="border border-gray-500 py-1 px-3 cursor-pointer ">
            English
          </p>
        </div>
        <div className="flex items-center border-gray-500 justify-center border py-1 px-3">
          <img className="w-8 h-5 " src={bdFlag} alt="" />
          <p>Bangladsh</p>
        </div>
      </div>
      {/* Bottom End Here */}
    </div>
  );
};

export default FooterMiddle;
