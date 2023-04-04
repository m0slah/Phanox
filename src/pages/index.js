import React from "react";

import HeroBanner from "Components/HeroBanner";
import FooterBanner from "Components/FooterBanner";

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

      <FooterBanner />
    </React.Fragment>
  );
}

export default Home;
