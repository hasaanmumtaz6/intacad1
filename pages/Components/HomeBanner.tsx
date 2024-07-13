import React from "react";
import LinkBtn from "./LinkBtn";
import ill5 from "@/public/illustartion/ill5.svg";
import Image from "next/image";
import { MdOutlineDesignServices } from "react-icons/md";
import Heading from "./Heading";
import AnimatedHeading from "./AnimatedHeading";

const HomeBanner = () => {
  return (
    <div className="home-banner-box">
      <div className="banner-content">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MdOutlineDesignServices />
            <h3>Make Brand Powerfull</h3>
          </div>
          <h2 className="text-5xl">
            {/* <AnimatedHeading heading="Supercharge" fontSize="text-5xl" /> */}
            <b>Supercharge</b> Your Brand. Rule the Web.
          </h2>
        </div>
        <p>
          Grow beyond with our all-in-one digital marketing toolbox. Web Dev,
          SEO, Design, Social Media & Ads. We craft, optimize & manage - You
          watch results soar.
        </p>
        <LinkBtn url="/register" btntext="Start Growing Today." />
      </div>
      <div className="banner-graphic">
        <Image src={ill5} alt="home-illustration" />
      </div>
    </div>
  );
};

export default HomeBanner;
