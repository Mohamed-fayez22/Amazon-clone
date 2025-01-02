import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { logo } from "../assets";
import { allItems } from "../constans";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from "../redux/amazonSlice";

const Header = () => {
  const auth = getAuth();
  const dispatch = useDispatch()
  const products = useSelector((state) => state.amazonReducer.products);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);

  const [showAll, setShowAll] = useState(false);
  // console.log(showAll);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        dispatch(userSignOut())
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full  sticky top-0 z-50">
      <div className="w-full bg bg-amazon_blue text-white px-4 py-3 flex items-center gap-4 ">
        {/* Img Start Here */}
        <Link to="/">
          <div
            className="px-2  h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer
  duration-100 "
          >
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </div>
        </Link>
        {/* img End Here  */}

        {/* Deliver Start Here  */}
        <div
          className="px-2 hidden mdl:inline-flex h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer
  duration-100"
        >
          <LocationOnIcon />
          <p className="text-sm text-lightText flex flex-col ">
            Deliver To{" "}
            <span className="text-sm -mt-1  font-semibold text-whiteText  ">
              Egypt
            </span>
          </p>
        </div>
        {/* Deliver End Here */}

        {/* Search Start Here */}
        <div className="h-10 rounded-md hidden lgl:flex flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300
         border-2 cursor-pointer duration-300
         text-sm text-amazon_blue 
         flex items-center justify-center rounded-tl-md rounded-bl-md "
          >
            All
            <span></span>
            <ArrowDropDownIcon />
          </span>
          {showAll && (
            <div>
              <ul
                className="absolute w-56 h-80 top-10 left-0 
            overflow-scroll overflow-x-hidden bg-white
             border-[1px] border-amazon_blue
              text-black p-2 flex-col gap-1 z-50"
              >
                {allItems.map((item) => (
                  <li
                    key={item._id}
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none
             px-2 type-text"
            type="text"
          />
          <span
            className="w-12 h-full flex items-center justify-center
         bg-amazon_yellow  hover:bg-[#f3a847]
         cursor-pointer duration-300 text-amazon_blue 
         rounded-tr-md rounded-br-md"
          >
            <SearchIcon />
          </span>
        </div>
        {/* Search End Here */}

        {/* SignIn Start Here */}
        <Link to="/signin">
          <div
            className="flex flex-col justify-center px-2  h-[80%]  items-center border border-transparent hover:border-white cursor-pointer
  duration-100 "
          >
            {userInfo ? (
              <p>
                {" "}
                <p
                  className="text-sm mdl:text-xs text-white mdl:text-lightText font-light 
          "
                >
                  {userInfo.userName}
                </p>
              </p>
            ) : (
              <p
                className="text-sm mdl:text-xs text-white mdl:text-lightText font-light 
          "
              >
                Hello, sign in{" "}
              </p>
            )}

            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex ">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>
        </Link>
        {/* SignIn Start Here */}

        {/* Orders Start Here */}
        <div
          className="hidden  lgl:flex flex-col items-center justify-center px-2  h-[80%]  border border-transparent hover:border-white cursor-pointer
  duration-100 "
        >
          <p className="text-xs text-lightText hidden lgl:flex">Returns</p>
          <p className="text-sm text-whiteText font-semibold">& Orders</p>
        </div>
        {/* Orders End Here */}

        {/* Cart Sart Heere */}
        <Link to="/cart">
          <div
            className="flex items-center justify-center relative  px-2  h-[80%]  border border-transparent hover:border-white cursor-pointer
  duration-100 "
          >
            <p className="">
              <ShoppingCartIcon />
              <span
                className="absolute text-amazon_blue text-xs
           font-semibold bg-amazon_yellow rounded-full
          w-4 h-4 flex justify-center items-center bottom-3 left-4"
              >
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
            <p className="text-xs font-semibold -mb-4 ">Cart</p>
          </div>
        </Link>
        {userInfo && (
          <div
            onClick={handleLogOut}
            className="flex flex-col justify-center items-center headerHover relative cursor-pointer"
          >
            <LogoutIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              LogOut
            </p>
          </div>
        )}
        {/* Cart End Here */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
