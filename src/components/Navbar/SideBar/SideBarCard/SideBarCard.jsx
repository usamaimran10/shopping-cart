import React from "react";
import classes from "./SideBarCard.module.css";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const SideBarCard = ({
  smallImage,
  productDesc,
  cardDesc,
  price,
  onClose,
  id,
  quantity,
  onAdd,
  onRemove,
}) => {
  return (
    <div className={classes.sideBarCard}>
      <div className={classes.itemFlex}>
        <div className={classes.imageSidebar}>
          <img className={classes.imgCard} src={smallImage} alt="N/A"></img>
        </div>
        <div className={classes.descSidebar}>
          <div>{productDesc}</div>
          <div>{cardDesc}</div>
          <div>Quantity: {quantity}</div>
        </div>
        <div>
          <div
            className={classes.closeIcon}
            onClick={() => {
              return onClose(id);
            }}
          >
            <CloseIcon />
          </div>
          <div className={classes.price}>{price}</div>
          <div className={classes.buttons}>
            <button className={classes.add}>
              <AddCircleOutlineIcon
                onClick={() => {
                  onAdd(id);
                }}
              />
            </button>
            <button className={classes.minus}>
              <RemoveCircleOutlineIcon
                onClick={() => {
                  onRemove(id);
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarCard;
