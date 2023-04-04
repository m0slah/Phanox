import React from "react";
import Link from "next/link";

function HeroBanner() {
  return (
    <div className="hero-banner-container">
      <div>
        <p>SMALL TEXT</p>
        <h3>MID TEXT</h3>

        <img src="" alt="Headphones" className="hero-banner-image" />
          </div>
          
          <div>
              <Link href=".product/ID">
                  <button type="button">BUTTON TEXT</button>
                  <div className="desc">
                      <h5>Description</h5>
                      <p>Description</p>
                  </div>
              </Link>
          </div>
    </div>
  );
}

export default HeroBanner;
