import Product from "./Product"

const ProductFeed = ({ products }) => {

  return (
    <div>
      <p> product food .....</p>
      {products.map(({ id, title, price, description, category, image }) => (      <Product 
      key={id}
      id={id}
      title={title}
      price={price}
      description={description}
      category={category}
      image={image}

      />

))}
    </div>
  );
};

export default ProductFeed;
