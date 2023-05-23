import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "context/StateContext";
import { runFireworks } from "Lib/utils";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  //   const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks(); 
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You For Your Order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          if you have any question, please email
          <a className="email" href="https://muhammedslah098765@gmail.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Coutinue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
