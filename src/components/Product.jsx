// import React, {useState} from "react";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";


const Product = ({ id, title, price, description, category, image }) => {
//   const [rating] = useState(5 );
  return (
    <div>
      <p>{category}</p>
      <img
        src={image}
        alt={title}
        objectFit="contain"
        />
      <h3>{title}</h3>
    </div>
  );
};

export default Product;

// import React, { useState } from "react";
// import StarIcon from "@mui/icons-material/Star";
// import Image from "next/image";

// const MAX_RATING = 5;
// const MIN_RATING = 1;

// const Product = ({ products }) => {
//   const [rating] = useState(
//     Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
//   );

//   return (
//     <div>
//       <p> product food .....</p>
//       {products.map(({ id, title, price, description, category, image }) => (
//         <div key={id}>
//           <p>{category}</p>
//           <Image
//             src={image}
//             alt={title}
//             height={200}
//             width={200}
//             objectFit="contain"
//           />
//           <h3>{title}</h3>
//           <div className="flex">
//             {Array(rating)
//               .fill()
//               .map((_, i) => (
//                 <StarIcon className="h-5" />
//               ))}
//           </div>
//           <p>${price}</p>
//           <p>{description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Product;
