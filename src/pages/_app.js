import React from "react";
import { Toast, Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import { Layout } from "Components";
import { StateContext } from "context/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
