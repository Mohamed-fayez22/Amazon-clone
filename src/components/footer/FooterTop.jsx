import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full border-t-[1px] border-b-[1px] py-6">
        <div className="w-64 mx-auto text-center font-titleFont flex flex-col gap-1">
          <p>See personalized recommendations</p>
          <Link to='/signin'>
            <button className="hover:bg-amazon_yellow w-full py-2 rounded font-titleFont font-semibold bg-yellow-500 ">
              Sign In
            </button>
          </Link>
          <p className="text-xs text-black py-1">
            New Customber ? <span className="text-blue-600">Start here </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
