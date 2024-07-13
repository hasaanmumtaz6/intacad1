import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/public/image/logo.png";
import LinkBtn from "./LinkBtn";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import Profile from "./Profile";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleShowHide = () => {
    setIsShow((current) => !current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header fixed z-50 transition-all duration-700 ${
        isSticky
          ? "sticky -top-[2px] bg-[#fff] shadow-md shadow-gray-200 text-[#000]"
          : "text-[#000]"
      }`}
    >
      <Link href="/" className="logo-title">
        {/* <Image src={logo} alt="logo-pic" className="header-items logoBox" /> */}
        <h1 className="text-2xl text-center font-bold bg-[var(--btncolor5)] text-transparent bg-clip-text">
          Intacad
        </h1>
      </Link>

      <div className="tabs-box">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <div className="droper-maxim relative">
          <button className="">My INT</button>
          <div className="flex flex-col z-40 bg-[#fff] absolute w-[180px] top-[2rem] -left-[2.2rem] border-[1px] border-gray-100 rounded-md shadow-md shadow-gray-300 !gap-2 !items-start !justify-start p-4 border-t-0 mymaxim-drop-cont">
            <Link href="/setting/services">Your Services</Link>
            <Link href="/setting/workon">Work On Services</Link>
            <Link href="/setting/plans">Your Plans</Link>
          </div>
          <div className="point-node-tol-maxim absolute z-20 border-[1px] border-gray-100 w-[15px] h-[15px] bg-[#fff] top-[1.6rem] rotate-45 rounded-sm"></div>
        </div>
        <Link href="/contact">Contact</Link>
        <div className="dropdown">
          <span>About</span>
          <div className="dropdown-content">
            <Link href="/about">
              <div className="about-tab-us-name-box flex items-center !gap-1">
                <BsInfoCircle />
                <p>About US</p>
              </div>
              <p className="text-[var(--grayColor)] font-normal text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Link>

            <Link href="/professionals">
              <div className="about-tab-us-name-box flex items-center !gap-1">
                <FaRegUserCircle />
                <p>Professionals</p>
              </div>
              <p className="text-[var(--grayColor)] font-normal text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-end">
        {/* <LinkBtn url="/register" btntext="Sign In" /> */}
        <Profile />

        <MdMenu
          className={`mob-menu-btn cursor-pointer transition-all duration-400 ease-in-out ${
            isShow ? "text-transparent" : ""
          }`}
          onClick={handleShowHide}
        />
      </div>

      <div
        className={`transition-all duration-400 delay-400 ease-in-out ${
          isShow ? "mob-tabs-box " : "!hidden"
        }`}
      >
        <IoClose
          className={`text-4xl cursor-pointer ${isShow ? "" : "hidden"}`}
          onClick={handleShowHide}
        />
        <Link className={`cursor-pointer ${isShow ? "" : "hidden"}`} href="/">
          Home
        </Link>
        <Link
          className={`cursor-pointer ${isShow ? "" : "hidden"}`}
          href="/services"
        >
          Services
        </Link>
        <Link
          className={`cursor-pointer ${isShow ? "" : "hidden"}`}
          href="/blog"
        >
          Blog
        </Link>
        <Link className={`cursor-pointer ${isShow ? "" : "hidden"}`} href="/">
          My MAXIM
        </Link>
        <Link
          className={`cursor-pointer ${isShow ? "" : "hidden"}`}
          href="/about"
        >
          About Us
        </Link>
        <Link
          className={`cursor-pointer ${isShow ? "" : "hidden"}`}
          href="/professionals"
        >
          Professionals
        </Link>
        <Link
          className={`cursor-pointer ${isShow ? "" : "hidden"}`}
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
