import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import SettingPagesLayout from "../Components/SettingPagesLayout";
import Image from "next/image";
import avatar from "@/public/image/haspic.png";
import AuthenticatedRoute from "../Components/AuthenticatedRoute";

const ContactInfoPage = () => {
  return (
    <AuthenticatedRoute>
      <Layout>
        <Head>
          <title>Contact Info - StartupMAXIM</title>
        </Head>
        <SettingPagesLayout>
          <div className="pages-shower p-4 flex flex-col gap-8 justify-between">
            <div className="flex flex-col gap-4">
              <div className="username-name-avatar-id-box py-5 flex flex-wrap items-center justify-between gap-2 hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-200 p-4 rounded-md border-y-[3px] border-y-[var(--btncolor1)]">
                <div className="name-username-id">
                  <h4>Id: 6632c42f8c3fab3475bd48da</h4>
                  <h2>Full Name: Muhammad Hasaan</h2>
                  <h3>Username: hash24-aioass</h3>
                  <h3>Email: example@gmail.com</h3>
                </div>
                <div>
                  <Image
                    src={avatar}
                    alt="user-avatar"
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] rounded-md object-cover"
                  />
                </div>
              </div>

              <div className="address py-5 flex flex-wrap items-center justify-between gap-2 hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-200 p-4 rounded-md border-y-[3px] border-y-[var(--btncolor1)]">
                <h4>City: Newyark</h4>
                <h2>State/Province: Newyark,USA</h2>
                <h3>Country: United Sates of Amarica</h3>
                <h3>Zip-Code/Post: 12122</h3>
              </div>
            </div>

            <p className="text-base text-center text-[var(--grayColor)]">
              Make sure your saved details are correct if you need to change any
              of your details like username, avatar, city name, state/province,
              zip code/postal, or country name. To change Username, Avatar, Use
              this link
              <b className="text-black select-none cursor-pointer">
                {" "}
                Username & Avatar
              </b>
              , and use this link for the{" "}
              <b className="text-black select-none cursor-pointer">Address</b>.
            </p>
          </div>
        </SettingPagesLayout>
      </Layout>
    </AuthenticatedRoute>
  );
};

export default ContactInfoPage;
