import * as React from "react";
import classes from "./ProductCard.module.css";

const ProductCard = ({
  image,
  secImage,
  heading,
  currency,
  price,
  text,
  sale,
  handleListen,
  id,
}) => {
  const [enter, setEnter] = React.useState(false);
  const handleEnter = () => {
    setEnter(true);
  };
  const handleLeave = () => {
    setEnter(false);
  };
  return (
    <>
      <div
        className={classes.productCard}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className={classes.cardImage}>
          <img
            src={enter ? secImage : image}
            alt="N/A"
            className={classes.image}
          />
        </div>
        <p style={{ height: "50px", paddingTop: "15px" }}>{heading}</p>
        <div className={classes.productPrice}>
          <p>{currency}</p>
          <h2>{price}</h2>
        </div>
        <div className={classes.productRate}>
          <p>{text}</p>
          <h3>{sale}</h3>
        </div>
        <button
          className={enter ? classes.cardBtn : classes.cartButton}
          onClick={() => {
            handleListen(id);
          }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
