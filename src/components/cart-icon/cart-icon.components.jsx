import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";

const CartIcon = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleCart());
  };
  return (
    <div className="cart-icon" onClick={toggle}>
      <Icon />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
