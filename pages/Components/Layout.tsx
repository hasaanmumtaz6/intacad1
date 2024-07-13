import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Ruda } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ruda = Ruda({
  weight: "400",
  subsets: ["latin"],
});
const Layout = ({ children }: any) => {
  return (
    <div className={`${ruda.className} cursor-animation`}>
      <SpeedInsights />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
