import React, { useState, useEffect } from "react";
import classes from "./SideBar.module.css";
import CloseIcon from "@mui/icons-material/Close";
import SideBarCard from "./SideBarCard/SideBarCard";
import { useProductsContext } from "../../../Context/Context";

const Sidebar = ({ showHandler }) => {
  const { products, setProducts } = useProductsContext();
  const [total, setTotal] = React.useState(0);

  const handleClose = (id) => {
    const data = products.filter((val) => {
      if (val.id === id) {
        val.quantity = 0;
      }
      return val.id !== id;
    });

    setProducts(data);
  };
  const handleAdd = (id) => {
    const data = products.map((val) => {
      if (val.id === id) {
        val.quantity++;
        return val;
      }
      return val;
    });
    setProducts(data);
  };
  const handleRemove = (id) => {
    const data = products.map((val) => {
      if (val.id === id) {
        if (val.quantity > 1) {
          val.quantity--;
        }
        return val;
      }
      return val;
    });
    setProducts(data);
  };
  React.useEffect(() => {
    let price = 0;
    products.forEach((val) => {
      price += val.price * val.quantity;
    });
    setTotal(price.toFixed(2));
  }, [products]);

  const clicked = () => {
    alert(`Checkout - Subtotal: $ ${total}`);
    console.log(total);
  };
  return (
    <>
      <div className={classes.SidebarContainer}>
        <div onClick={showHandler} className={classes.closeIcon}>
          <CloseIcon />
        </div>
        <div className={classes.sidebarNav}>
          <div>
            <img src="/images/cart-icon.png" alt="N/A" />
          </div>
          <div className={classes.bug1}>
            <span>{products.length}</span>
          </div>
          <div>
            <span className={classes.cart}>Cart</span>
          </div>
        </div>
        <div className={classes.noProduct}>
          {products?.map((val) => {
            return (
              <SideBarCard
                key={val.id}
                id={val.id}
                smallImage={val.smallImage}
                productDesc={val.productDesc}
                cardDesc={val.cardDesc}
                itemSize={val.itemSize}
                price={val.price}
                onClose={handleClose}
                quantity={val.quantity}
                onAdd={handleAdd}
                onRemove={handleRemove}
              />
            );
          })}
        </div>
        <div className={classes.mainBtn}>
          <div className={classes.total}>
            <div>
              <span className={classes.subTotal}>Subtotal</span>
            </div>
            <div>
              <span className={classes.price}>$ {total}</span>
            </div>
          </div>
          <div>
            <button onClick={clicked} className={classes.checkoutButton}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
