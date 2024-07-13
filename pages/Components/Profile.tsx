import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import LinkBtn from "./LinkBtn";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import userPic from "@/public/image/mypic2.svg";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineSettings, MdVerified } from "react-icons/md";

const Profile = () => {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow((current) => !current);
  };
  const { data: session } = useSession<any>();
  if (session) {
    return (
      <>
        <div className="flex items-center justify-center relative">
          <FaUserCircle
            className="cursor-pointer text-4xl hover:text-[var(--ourorangeColor)]"
            onClick={handleShow}
          />
          {isShow && (
            <div className="profileDropdown absolute -right-2 top-[3.36rem] bg-[#fff] shadow-md shadow-gray-300 border-x-[3px] border-x-[var(--btncolor1)] flex flex-col !gap-5 !justify-start !items-start w-[240px] px-4 py-6 rounded-md z-40">
              <div className="userAvatar flex flex-col !gap-2 relative">
                <div className="relative">
                  <Image
                    src={userPic}
                    alt="user-pic"
                    width={120}
                    height={120}
                    className="rounded-full w-[80px] h-[80px] object-cover"
                  />
                  <div className="absolute -right-1 top-3">
                    <MdVerified className="text-xl text-[#0000ff] cursor-pointer" />
                  </div>
                </div>
                <div className="flex flex-col !gap-[2px]">
                  <Link
                    href="/setting"
                    className="font-bold text-lg text-[#545454] select-none hover:text-[var(--ourorangeColor)]"
                  >
                    {session?.user?.name}
                  </Link>
                  <p className="text-base text-[var(--grayColor)] select-none" title={`${session?.user?.email}`}>
                    {session?.user?.email}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start !gap-2">
                <Link
                  href="/setting"
                  className="flex items-center justify-start !gap-2 hover:text-[var(--ourorangeColor)]"
                >
                  <MdOutlineSettings className="text-xl" /> <p>Setting</p>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center justify-start !gap-2 hover:text-[var(--ourorangeColor)]"
                >
                  <BiLogOut className="text-xl" /> <p>Sign out</p>
                </button>
              </div>

              <div className="tooltipNode bg-[#fff] w-[20px] h-[20px] -rotate-45 absolute -top-2 right-4 z-[30] rounded-sm"></div>
            </div>
          )}
        </div>
      </>
    );
  }
  return (
    <>
      <LinkBtn url="/register" btntext="Sign In" />
    </>
  );
};

export default Profile;
