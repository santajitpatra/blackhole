import React from "react";
import Image from "next/legacy/image";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/redux/slices/basketSlice";


function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  prime,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      prime,
    };

    dispatch(addToBasket(product));
  };


  const removeItemFromBasket = () => {

    dispatch(removeFromBasket({ id }));

  };
  
  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        objectFit="contain"
      />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        {/* <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 to-yellow-500" key={i} />
          ))} 
        </div>   */}

        <p className="text-xs my-2 line-clamp-2">{description}</p>
        {/* <Currency quantity={price} currency="GBP" /> */}
        <p className="py-5"> &#36; {price}</p>
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
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="btn" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="btn" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
