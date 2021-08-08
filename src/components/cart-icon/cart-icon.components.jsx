import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ setIsOpen }) => {
  return (
    <div className="cart-icon" onClick={() => setIsOpen((prev) => !prev)}>
      <Icon />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
