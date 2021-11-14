import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/store.png'
// import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.scss'

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <Logo className="logo" /> */}
        <img src={logo} alt="logo" style={{height: '3em', width: '3em'}}></img>
      </Link>
      <div className="options">
        <div className="option">
          <Link to="/">HOME</Link>
        </div>
        <div className="option">
          <Link to="/shop">SHOP</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
