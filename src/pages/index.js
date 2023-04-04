import React from "react";

import Product from "../../Components/Product";
import HeroBanner from "Components/HeroBanner";
import Footer from "Components/Footer";

function Home() {
  return (
    <React.Fragment>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speaking of many variations</p>
      </div>
      
      <div className="products-container">
        {["product1", "product2"].map((product) => product)}
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Home;
