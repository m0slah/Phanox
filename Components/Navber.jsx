import React from "react";

import Link from "next/link";

import { AiOutlineShoppingCart } from "react-icons/ai";

import Cart from "./Cart";
import { useStateContext } from "context/StateContext";

const Navber = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <React.Fragment>
        <p className="logo">
          <Link href="/">JSM HeadPhones</Link>
        </p>

        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShoppingCart />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </React.Fragment>
    </div>
  );
};

export default React.memo(Navber);
