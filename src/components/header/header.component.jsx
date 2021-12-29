import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import logo from "../../assets/store.png";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
// import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser, hidden, logUserOut }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <Logo className="logo" /> */}
        <img
          src={logo}
          alt="logo"
          style={{ height: "3em", width: "3em" }}
        ></img>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        <CartIcon />
        {currentUser ? (
          <div className="option" onClick={logUserOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
      { !hidden && <CartDropdown /> }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
