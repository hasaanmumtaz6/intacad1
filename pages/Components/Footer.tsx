import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/image/logo.svg";
import {
  FaXTwitter,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaAngleRight,
} from "react-icons/fa6";
import Newsletter from "./Newsletter";
import Heading from "./Heading";

const Footer = () => {
  return (
    <footer className="footer-box mt-8">
      <div className="footer-for-tab-and-desc">
        <div className="flex items-start justify-around gap-14 flex-wrap px-12 py-8">
          <div className="logo-social-icons flex items-start flex-col gap-2 w-[20%]">
            <Image
              src={logo}
              alt="logo-startup-maxim-pic"
              width={80}
              height={40}
            />
            <p className="text-justify">
              We are the digital Marketing Agency to create world digital and
              offensive
            </p>
            <div className="social-icons flex items-center gap-2 text-2xl text-white">
              <Link href="/">
                <FaFacebookF />
              </Link>
              <Link href="/">
                <FaXTwitter />
              </Link>
              <Link href="/">
                <FaWhatsapp />
              </Link>
              <Link href="/">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          <div className="flex items-start justify-start gap-14 flex-wrap">
            <span className="flex flex-col gap-1">
              <Heading heading="Top &nbsp; Services" fontSize="text-3xl" />
              <Link href="/">Web Development</Link>
              <Link href="/">Search Engine Optimization</Link>
              <Link href="/">Graphic Designing</Link>
              <Link href="/">Mobile App Development</Link>
              <Link href="/">Content Writing</Link>
            </span>
            <span className="flex flex-col gap-1">
              <Heading heading="Support" fontSize="text-3xl" />
              <Link href="/">Help Center</Link>
              <Link href="/">Professional Call</Link>
              <Link href="/">Sales Support</Link>
              <Link href="/">FAQs</Link>
              <Link href="/">Contact Us</Link>
            </span>
            {/* <span className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold pb-2">Company</h2>
            <Link href="/">About Us</Link>
            <Link href="/">Career</Link>
            <Link href="/">Professionals</Link>
            <Link href="/">Legal Notice</Link>
          </span> */}
          </div>

          <div>
            <Heading heading="Come &nbsp; Close" fontSize="text-3xl" />
            <Newsletter />
          </div>
        </div>
        <div className="border-t-[2px] border-gray-100 px-12 py-4 flex items-center justify-around">
          <span className="font-medium flex items-center gap-1 text-base">
            <p>2024 - All &copy; Rights reserved by</p>
            <Link href="/" className="font-bold text-base">
              <Heading
                heading="Intacad"
                fontSize="text-base !font-normal"
              />
            </Link>
          </span>
          <span className="flex items-center gap-4">
            <Link href="/">Terms & Condition</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">contact Us</Link>
          </span>
        </div>
      </div>

      {/* Mobile-footer */}
      <div className="footer-for-mobile">
        <div className="links-tabs-feature">
          <Link href="/contact">Contact</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <span className="h-[2px] bg-[#e6e6e6]"></span>
        <div className="copy-right-line-mob">
          {" "}
          2024 - All &copy; Rights reserved by Intacad
        </div>
      </div>
    </footer>
  );
};

export default Footer;
