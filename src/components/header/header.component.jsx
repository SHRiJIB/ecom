import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import Logo from "../../assets/crown.png";
import Avatar from "../avatar/Avatar.component";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";
const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isOpen } = useSelector((state) => state.cart);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "SET_CURRENT_USER", payload: null });
    history.push("/");
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <div className="header">
      <Link to="/" className="logo-cotainer">
        <img src={Logo} className="logo" alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        <CartIcon />
        {user ? (
          <div className="profile">
            <Avatar imgUrl={user?.image} name={user?.result?.name} />

            <button className="logout-btn" onClick={logout}>
              Log out
            </button>
          </div>
        ) : (
          <div>
            <Link className="option" to="/signin">
              SIGNIN
            </Link>
          </div>
        )}
      </div>
      {isOpen && <CartDropDown />}
    </div>
  );
};

export default Header;
