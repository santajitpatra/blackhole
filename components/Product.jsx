import React, { useState } from "react";
import Image from "next/legacy/image";
// import StarIcon from "@mui/icons-material/Star";
import Currency from "react-currency-formatter";
// import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/redux/slices/basketSlice";

// const MAX_RATING = 5;
// const MIN_RATING = 1;

 function Product  ({ id, title, price, description, category, image }) {

  const dispatch = useDispatch();

  // const [rating] = useState(
  //   Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  // );

  // const [prime] = useState(Math.random() < 0.5);

  const addItemToBasket = () =>{
    const product ={
      id,
      title,
      price,
      // rating,
      description,
      category,
      image,
      // prime,
    }

    dispatch(addToBasket(product));
  }

  return (
    <div className="relative items-center flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        alt={title}
        height={150}
        width={150}
        objectFit="contain"
        className="h-52"
      />
      <h4 className="my-3 line-clamp-2">{title}</h4>
      <div className="flex">
        {/* {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 to-yellow-500" key={id} />
          ))} */}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        {/* <Currency quantity={price} currency="USD" /> */}
        <p> &yen; {price}</p>
      </div>
      <div className="flex items-center space-x-2 -mt-5 mb-4">
        <span className="text-cyan-100 bg-cyan-900 rounded-lg px-1 text-center w-14">
          Prime
        </span>
        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
      </div>
      {/* {prime && (
        <div className="flex items-center space-x-2 -mt-5 mb-4">
          <span className="text-cyan-100 bg-cyan-900 rounded-lg px-1 text-center w-14">
            Prime
          </span>
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )} */}
      <button onClick={addItemToBasket} className="mt-auto btn">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;

// export default dynamic(() => Promise.resolve(Product), { ssr: false });
