import Navbar from "@/components/Navbar";
import React from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="py-24 px-12 lg:px-48 font-latoBold">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
