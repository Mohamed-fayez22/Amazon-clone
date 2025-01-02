import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const HeaderBottom = () => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const [sideBar, setSideBar] = useState(false);
  // console.log(sideBar);

  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) setSideBar(false);
    });
  }, []);
  return (
    <div className="w-full flex px-4 h-[36px] bg-amazon_blue text-white items-center  ">
      {/* List Items Start Here */}{" "}
      <ul className=" flex items-center text-sm tracking-wide gap-2">
        <li
          onClick={() => setSideBar(true)}
          className=" gap-1 px-2  h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer
      duration-100 "
        >
          <MenuIcon />
          All
        </li>
        <li
          className="px-2  h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer
      duration-100 hidden md:inline-flex "
        >
          Today's Deals
        </li>
        <li
          className="px-2  h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer
      duration-100 hidden md:inline-flex"
        >
          Customer Service
        </li>
        <li
          className="px-2  h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer
      duration-100 hidden md:inline-flex"
        >
          Gift Cards
        </li>
        <li
          className="px-2  h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer
      duration-100 hidden md:inline-flex"
        >
          Registry
        </li>
        <li
          className="px-2  h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer
      duration-100 hidden md:inline-flex"
        >
          Sell
        </li>
      </ul>
      {/* List Items End Here */}
      {/* SideNav Start Here */}
      {sideBar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50 ">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="xs:w-[250px] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                {/* <AccountCircleIcon /> */}
                {userInfo ? (
                  <img src={userInfo.image} alt="" />
                ) : (
                  <AccountCircleIcon />
                )}
                {userInfo ? (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide  ">
                    {" "}
                     {userInfo.userName}
                  </h3>
                ) : (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide  ">
                    {" "}
                    Hello, Sign In{" "}
                  </h3>
                )}
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <hr className="h-px my-1 bg-gray-100 border-0 dark:bg-gray-300" />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <hr className="h-px my-1 bg-gray-100 border-0 dark:bg-gray-300" />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />{" "}
              <hr className="h-px my-1 bg-gray-100 border-0 dark:bg-gray-300" />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              <span
                onClick={() => setSideBar(false)}
                className="xs:left-[250px]  absolute top-0 md:left-[350px] w-10 h-10  cursor-pointer
              text-xl text-black flex items-center justify-center border
              bg-white hover:bg-red-600 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* SideNav End Here */}
    </div>
  );
};

export default HeaderBottom;
