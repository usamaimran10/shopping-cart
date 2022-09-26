import { Container } from "@mui/material";
import React from "react";
import Products from "../Products/Products";
import Sizes from "../Sizes/Sizes";
import classes from "./ShowCase.module.css";
import productData from "../Products/productData";
const ShowCase = ({ showHandler }) => {
  const [filters, setFilters] = React.useState([
    {
      id: 1,
      label: "XS",
      selected: false,
    },
    {
      id: 2,
      label: "S",
      selected: false,
    },
    {
      id: 3,
      label: "M",
      selected: false,
    },
    {
      id: 4,
      label: "ML",
      selected: false,
    },
    {
      id: 5,
      label: "L",
      selected: false,
    },
    {
      id: 6,
      label: "XL",
      selected: false,
    },
    {
      id: 7,
      label: "XXL",
      selected: false,
    },
  ]);
  const [products, setProducts] = React.useState(productData);
  const changeHandler = (index) => {
    const data = [...filters];
    data[index].selected = !data[index].selected;

    const selectedOptions = data.filter((item) => item.selected);
    const filteredData = productData.filter((product) => {
      let isAvailable = false;
      selectedOptions.forEach((item) => {
        if (product.size.includes(item.label)) {
          isAvailable = true;
        }
      });
      if (isAvailable) return product;
    });
    setProducts(filteredData.length > 0 ? filteredData : productData);
    setFilters(data);
  };
  return (
    <>
      <div className={classes.mobileSizes}>
        <Sizes
          changeHandler={changeHandler}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <Container maxWidth="400px">
        <div className={classes.showCase}>
          <div className={classes.Size}>
            <Sizes
              changeHandler={changeHandler}
              filters={filters}
              setFilters={setFilters}
            />
          </div>

          <div>
            <Products
              productsData={products}
              showHandler={showHandler}
              filters={filters}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShowCase;
