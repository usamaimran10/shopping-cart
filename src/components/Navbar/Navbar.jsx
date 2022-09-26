import * as React from "react";
import classes from "./Navbar.module.css";
import SideBar from "../../components/Navbar/SideBar/SideBar";
import { useProductsContext } from "../../Context/Context";

const Navbar = ({ showSidebar, showHandler }) => {
  const { products } = useProductsContext();
  return (
    <>
      <div className={classes.nav}>
        <div onClick={showHandler}>
          <nav className={classes.navbar}>
            <img src="/image/cart-icon.png" alt="N/A"></img>
            <div className={classes.bug}>
              <span>{products.length}</span>
            </div>
          </nav>
        </div>
        <div>{showSidebar && <SideBar showHandler={showHandler} />}</div>
      </div>
    </>
  );
};

export default Navbar;
