import React from "react";

import Link from "next/link";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Navber=()=> {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM HeadPhones</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
}

export default Navber;
