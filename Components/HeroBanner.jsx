import React from "react";
import Link from "next/link";

import { urlFor } from "Lib/client";

function HeroBanner({ heroBanner }) {
  return (
    <div className="hero-banner-container">
      <div>
        <p>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="Headphones"
          className="hero-banner-image"
        />
      </div>

      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeroBanner;
