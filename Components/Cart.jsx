import React, { useRef } from "react";

import { useStateContext } from "context/StateContext";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { urlFor } from "Lib/client";
import Link from "next/link";

const Cart = () => {
  const cartRef = useRef(0);
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div>
            <div className="empty-cart">
              <HiOutlineShoppingBag size={250} />
              <h3>Your Shopping Bag Is Empty</h3>
              <Link href="/">
                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                  className="btn"
                >
                  Coutinue Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
