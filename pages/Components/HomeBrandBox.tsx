import Image from "next/image";
import React from "react";
import brand from "@/public/image/brandtestpic2.png";
import sectionIcon from "@/public/image/sectionIcon.png";
import Link from "next/link";
import SectionsHead from "./SectionsHead";
import Heading from "./Heading";

const HomeBrandBox = () => {
  return (
    <div className="sections-box">
      {/* <SectionsHead
        sectionIcon={sectionIcon}
        sectionAltText="brand-section-icon"
        SectionTitle="Our Brands"
      /> */}
      <div className="brand-box relative">
        <div className="absolute -top-[22px] left-28 font-bold tracking-[-0.08em] capitalize">
          <Heading heading="OUR &nbsp; BRANDS" fontsize="text-5xl " />
        </div>
        <h3>
          Trusted by
          <b>150+</b>
          of The World{"'"}s Best Organization
        </h3>
        <div className="flex items-center flex-wrap justify-center gap-10 py-5">
          <Link href="/#">
            <Image src={brand} alt="brand=pic" />
          </Link>
          <Link href="/#">
            <Image src={brand} alt="brand=pic" />
          </Link>
          <Link href="/#">
            <Image src={brand} alt="brand=pic" />
          </Link>
          <Link href="/#">
            <Image src={brand} alt="brand=pic" />
          </Link>
          <Link href="/#">
            <Image src={brand} alt="brand=pic" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBrandBox;
