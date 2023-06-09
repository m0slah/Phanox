import React, { useRef } from "react";

import { useStateContext } from "context/StateContext";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { urlFor } from "Lib/client";
import Link from "next/link";
import getStripe from "Lib/getStripe";

const Cart = () => {
  const cartRef = useRef(0);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    try {
      const stripe = await getStripe();

      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      });

      if (response.status === 500) {
        return;
      }

      const data = await response.json();

      toast.loading("Redirecting...");

      stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      // Handle any potential errors here
      console.error(error);
    }
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <React.Fragment>
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

          <div className="product-container">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="product" key={item._id}>
                  {item.image && item.image[0] ? (
                    <img
                      src={urlFor(item.image[0])}
                      className="cart-product-image"
                      alt={item.name}
                    />
                  ) : (
                    <img
                      src="placeholder.jpg"
                      className="cart-product-image"
                      alt="Placeholder"
                    />
                  )}
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>${item.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <span
                            className="minus"
                            onClick={() =>
                              toggleCartItemQuanitity(item._id, "dec")
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num">{item.quantity}</span>
                          <span
                            className="plus"
                            onClick={() =>
                              toggleCartItemQuanitity(item._id, "inc")
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div>
              <div className="cart-bottom">
                <div className="total">
                  <h3>Subtotal:</h3>
                  <h3>${totalPrice}</h3>
                </div>
                <div className="btn-container">
                  <button
                    type="button"
                    className="btn"
                    onClick={handleCheckout}
                  >
                    Pay with Stripe
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    </div>
  );
};

export default React.memo(Cart);
