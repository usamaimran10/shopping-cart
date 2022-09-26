import React from "react";
import classes from "./Products.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProductsContext } from "../../Context/Context";

const Products = ({ showHandler, productsData }) => {
  const { products, setProducts } = useProductsContext();

  const handleClick = (id) => {
    let flag = true;
    products.forEach((val) => {
      if (val.id === id) {
        alert("Already Exist, if you want to add more go to cart.");
        flag = false;
      }
    });
    if (flag) {
      const data = productsData.filter((value) => {
        return value.id === id;
      });
      setProducts((prev) => [...prev, ...data]);
    }
  };
  return (
    <>
      <span>{productsData.length} Product(s) Found</span>
      <div className={classes.products}>
        {productsData.map((val) => {
          return (
            <ProductCard
              showHandler={showHandler}
              key={val.id}
              image={val.image}
              secImage={val.secImage}
              heading={val.productDesc}
              currency={val.currency}
              price={val.price}
              text={val.text}
              sale={val.sale}
              id={val.id}
              handleListen={handleClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
