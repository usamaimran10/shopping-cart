import * as React from "react";
import classes from "./Sizes.module.css";
import { useProductsContext } from "../../Context/Context";
import productData from "../Products/productData";
const Sizes = ({ changeHandler, filters, setFilters }) => {
  const { setProducts, products } = useProductsContext();

  return (
    <div>
      <span>Sizes:</span>
      <div className={classes.sizes}>
        {filters.map((item, index) => {
          return (
            <div
              onClick={() => changeHandler(index)}
              className={`${classes.sizeBtn} ${
                filters[index].selected && classes.sizeBtn1
              }`}
              key={item.id}
            >
              <span>{item.label}</span>
            </div>
          );
        })}
        <p className={classes.para}>
          <small>Leave a star on Github if this repository was useful :)</small>
        </p>
        <a
          className={classes.link}
          href="https://github.com/usamaimran10?tab=repositories"
          target="_blank"
        >
          Star
        </a>
      </div>
    </div>
  );
};

export default Sizes;
