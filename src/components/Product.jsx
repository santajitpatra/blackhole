import React, { useState } from "react";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Currency from "react-currency-formatter";
import dynamic from "next/dynamic";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {


  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [prime] = useState(Math.random() < 0.5);

  return (
    <div className="relative items-center flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        objectFit="contain"
      />
      <h4 className="my-3 line-clamp-2">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 to-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {prime && (
        <div className="flex items-center space-x-2 -mt-5">
          <span className="text-cyan-100 bg-cyan-900 rounded-lg px-1 text-center w-14">Prime</span>
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto btn">Add to Basket</button>
    </div>
  );
};

// export default Product;

export default dynamic (() => Promise.resolve(Product), {ssr: false});
