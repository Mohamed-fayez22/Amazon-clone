import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SideNavContent = ({ title, one, two, three }) => {
  return (
    <div className="">
      <h3 className="font-semibold font-titleFont text-lg px-6 mt-3 mb-1 ">
        {title}
      </h3>
      <ul className="text-sm">
        <li className="flex items-center justify-between px-6 hover:bg-zinc-200 py-2 cursor-pointer">
          {one}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>{" "}
        <li className="flex items-center justify-between px-6 hover:bg-zinc-200 py-2 cursor-pointer">
          {two}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>{" "}
        <li className="flex items-center justify-between px-6 hover:bg-zinc-200 py-2 cursor-pointer">
          {three}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideNavContent;
