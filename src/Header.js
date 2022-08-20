import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useStateValue} from "./StateProvider";
library.add(faMagnifyingGlass, faCartShopping);
//import { MagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <FontAwesomeIcon
          className="header__searchIcon"
          icon="fa-solid fa-magnifying-glass"
        />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLinetwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLinetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
