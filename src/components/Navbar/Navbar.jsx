import * as React from "react";
import classes from "./Navbar.module.css";
import SideBar from "../../components/Navbar/SideBar/SideBar";
import { useProductsContext } from "../../Context/Context";

const Navbar = ({ showSidebar, showHandler, setshowSidebar }) => {
  const { products } = useProductsContext();
  return (
    <>
      <div className={classes.nav}>
        <div onClick={showHandler}>
          <nav className={classes.navbar}>
            <img src="/images/cart-icon.png" alt="N/A"></img>
            <div className={classes.bug}>
              <span>{products.length}</span>
            </div>
          </nav>
        </div>
        <div>
          {showSidebar && (
            <SideBar
              showHandler={showHandler}
              showSidebar={showSidebar}
              setshowSidebar={setshowSidebar}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
