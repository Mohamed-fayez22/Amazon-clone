import React from "react";
import { useLoaderData } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ApiIcon from "@mui/icons-material/Api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";
const Products = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  // console.log(data.data);
  const ProductData = data.data;
  return (
    <div
      className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6
     max-w-screen-2xl mx-auto grid  px-4 "
    >
      {ProductData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 
          hover:border-transparent shadow-none hover:shadow-testShadow duration-200 
          relative flex flex-col gap-4"
        >
          <span className="text-xs absolute capitalize text-gray-500 italic top-2 right-2">
            {item.category}
          </span>

          <div className="w-full h-auto flex justify-center items-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImage"
            />
            <ul
              className="w-full h-36 bg-gray-100 absolute bottom-[-170px]   
            flex flex-col items-end justify-center gap-2 font-titleFont 
             border-1 border-r group-hover:bottom-0 duration-700"
            >
              <li className="productLi">
                Compare{" "}
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Cart{" "}
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Wish List{" "}
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4 z-10 bg-white">
            <div className=" flex items-center justify-between">
              <h2 className="text-lg tracking-wide font-titleFont text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
            <div>
              <p className="text-sm">{item.description.substring(0, 100)}...</p>
            </div>
            <div className="text-amazon_yellow ">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    category: item.category,
                    img: item.image,
                    quanitity: 1,
                  })
                )
              }
              className="w-full bg-gradient-to-tr from-yellow-400
               to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400
                border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
                 active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 
                 mt-3 rounded-md font-titleFont font-medium text-base 
            "
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
