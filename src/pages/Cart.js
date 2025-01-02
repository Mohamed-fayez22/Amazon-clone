import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { emptyCart } from "../assets/index";
import { motion } from "framer-motion";
import "./cart.css";
import {
  deleteItemInCart,
  clearAllItem,
  incrementQuantity,
  decrementQuantity,
} from "../redux/amazonSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazonReducer.products);
  // console.log(products);

  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quanitity;
      return setTotalPrice(Total.toFixed(2));
    });
  }, [products]);

  return (
    <div className="w-full  bg-gray-100 p-4 ">
      {products.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-cols-5 gap-8 media">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div className=" font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400">
              <h2 className="text-3xl font-bold py-3 font-titleFont ">
                Shopping Cart
              </h2>
              <h4 className="text-lg  py-3 font-semibold font-titleFont">
                Subtotl
              </h4>
            </div>
            {/* product start herer */}
            <div>
              {products.map((item) => (
                <div
                  key={item.id}
                  className=" w-full border-b-[1px] border-b-gray-300 p-4
              flex items-center gap-6"
                >
                  <div className="flex justify-center items-center gap-8 box ">
                    <div className="w-1/6 ">
                      <img
                        className=" w-full h-44 object-contain"
                        src={item.img}
                        alt="productImage"
                      />
                    </div>
                    <div className="w-full box__content">
                      <h2 className="font-semibold text=lg">{item.title}</h2>
                      <p className="pr-10 text-sm">{item.description}</p>
                      <p className="text-base mt-2">
                        Unit Price{" "}
                        <span className="font-semibold">${item.price}</span>
                      </p>

                      <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
                        <p className="text-base font-normal">Qty:</p>
                        <p
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                        >
                          -
                        </p>
                        <p className="font-titleFont text-base font-semibold text-amazon_blue">
                          {item.quanitity}
                        </p>
                        <p
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                        >
                          +
                        </p>
                      </div>

                      <button
                        onClick={() => dispatch(deleteItemInCart(item.id))}
                        className="bg-red-500 px-5 py-2 rounded-lg text-white hover:bg-[#B91C1C] outline-none border-none 
                  mt-3 duration-200"
                      >
                        Delete Item
                      </button>
                    </div>
                    <div className="">
                      <p className="text-lg font-titleFont font-semibold">
                        ${item.price * item.quanitity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => dispatch(clearAllItem())}
              className="px-10 py-2 mt-5 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide"
            >
              Clear Cart
            </button>
          </div>
          <div className="w-full h-52 bg-white px-4 col-span-1 flex flex-col justify-center items-center p-4">
            <div>
              <p className="flex gap-2 items-start text-sm">
                <span>
                  <CheckCircleIcon className=" bg-white text-green-500 rounded-full " />
                </span>
                Your order qualifies for FREE Shipping Choose this option at
                checkout. See details....
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1  flex items-center gap-2 justify-between ">
                Total:
                <span className="text-lg font-bold">${totalPrice}</span>
              </p>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Proceed to Buy
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full flex items-center justify-center gap-4 mt-10 box__end"
        >
          <div className="">
            <img src={emptyCart} alt="" />
          </div>
          <div className="w-[28%]  text-center p-4 bg-white  rounded-md shadow-lg box__end__column">
            <h1 className="font-titleFont text-xl font-bold mb-2">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm items-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
