import React from "react";
import Link from "next/link";
import logo from "@/public/image/adminLogo2.png";
import Image from "next/image";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import FullscreenToggle from "./FullscreenToggle";
import { FaUser } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";

const Layout = ({ children }: any) => {
  return (
    <div className="flex items-start select-none">
      <div className="right-left-navbar-box-admin relative">
        <Link
          href={"/admin"}
          className="px-4 border-b-[1px] border-b-gray-400 py-5 flex items-center gap-3 fixed top-0 left-0 bg-[#000] w-[200px]"
        >
          <Image
            src={logo}
            alt="admin-startup-logo"
            className="w-[160] h-[50px] rounded-md"
          />
          {/* <h3 className="text-2xl font-bold">Startup</h3> */}
        </Link>
        <div className="page-triger-tabs-box-admin px-4 pt-20">
          <div className="main-tags-setting-page">
            <h4>Main</h4>
            <div>
              <Link href="/admin">Overview</Link>
              <Link href="/admin">All Replyer</Link>
              <Link href="/admin">Scheduler</Link>
            </div>
          </div>
          <div className="general-tags-setting-page">
            <h4>general</h4>
            <div>
              <Link href="/admin">About Manager</Link>
              <Link href="/admin">Team Writer</Link>
              <Link href="/admin">Team Manager</Link>
              <Link href="/admin">Client Manager</Link>
              <Link href="/admin">Meet Data</Link>
              <Link href="/admin">Contact Data</Link>
              <Link href="/admin">Newsletter Users</Link>
            </div>
          </div>
          <div className="blog-tags-setting-page">
            <h4>blog</h4>
            <div>
              <Link href="/admin">Blog Writer</Link>
              <Link href="/admin">Blog Controler</Link>
              <Link href="/admin">Blog Designer</Link>
              <Link href="/admin">Blog Ranker</Link>
            </div>
          </div>
          <div className="services-tags-setting-page">
            <h4>services</h4>
            <div>
              <Link href="/admin">Services Writer</Link>
              <Link href="/admin">Services Contoler</Link>
              <Link href="/admin">Services Designer</Link>
              <Link href="/admin">Services Ranker</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-and-body-admin flex flex-col w-[85.6%] relative">
        <div className="Header-box-admin flex items-center justify-between w-[85.3%] bg-[#fff] px-4 py-5 h-[90px] border-b-[1px] border-gray-400 fixed top-[1px] right-0">
          <button className="left-right-bar-triger-btn-admin-box">
            <IoArrowBackCircleOutline />
          </button>
          <div className="navbar-btn-admin-box">
            <button title="Notification">
              <MdNotifications />
            </button>
            <button title="Client Message">
              <RiUserVoiceFill />
            </button>
            <button title="Admin Profile">
              <FaUser />
            </button>
            <FullscreenToggle />
          </div>
        </div>
        <div className="admin-body-Box px-3 pt-28 pb-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
