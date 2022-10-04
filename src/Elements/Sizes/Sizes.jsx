import * as React from "react";
import classes from "./Sizes.module.css";
import { useProductsContext } from "../../Context/Context";
import productData from "../Products/productData";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
const Sizes = ({ changeHandler, filters, setFilters, setValue }) => {
  const { products, setProducts } = useProductsContext();
  const [input, setInput] = React.useState("");

  return (
    <div className={classes.sizesFilter}>
      <Paper
        className={classes.mobileInput}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 200,
          marginBottom: 5,
          marginTop: 0,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Products"
          inputProps={{ "aria-label": "Search Products" }}
          onChange={(e) => {
            setValue(e.target.value);
            setInput(e.target.value);
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          onClick={() => {
            setValue(input);
          }}
        >
          <SearchIcon color="secondary" />
        </IconButton>
      </Paper>
      <span className={classes.mobileheading}>Sizes:</span>
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
