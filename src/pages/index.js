import React from "react";

function Home() {
  return (
    <React.Fragment>
      Hero Banner Comp
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speaking of many variations</p>
      </div>
      <div className="products-container">
        {["product1", "product2"].map((product) => product)}
      </div>
      footer
    </React.Fragment>
  );
}

export default Home;
