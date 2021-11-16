import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/store.png";
// import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser, logUserOut }) => {

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
      <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={logUserOut}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/auth'>
          SIGN IN
        </Link>
      )}
    </div>
    </div>
  );
};

export default Header;