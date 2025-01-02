import React from "react";

const FooterMiddleList = ({ title, listItem }) => {
  return (
    <div  >
      <div >
        <h3 className=" font-titleFont text-white text-base font-semibold mb-3">
          {title}
        </h3>
        <div>
          <ul className="flex flex-col gap-2 font-bodyFont">
            {listItem.map((item) =>
              item.ListData.map((data, i) => (
                <li
                  key={i}
                  className="  text-sm font-titleFont tracking-wide hover: text-gray-100 cursor-pointer hover:underline duration-150"
                >
                  {data}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};

export default FooterMiddleList;
