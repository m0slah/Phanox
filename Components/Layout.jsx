import React from "react";

import Head from "next/head";
import Navber from "./Navber";
import Footer from "./Footer";

function Layout({children}) {
  return (
    <div className="layout">
      <Head>
        <title>JS Mastery Store</title>
      </Head>
      <header>
        <Navber />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
