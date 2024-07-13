import React from "react";
import SettingPagesLayout from "../Components/SettingPagesLayout";
import Head from "next/head";
import Layout from "../Components/Layout";
import AnimatedHeading from "../Components/AnimatedHeading";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import AuthenticatedRoute from "../Components/AuthenticatedRoute";

const VerifyIdentityPage = () => {
  return (
    <AuthenticatedRoute>
      <Layout>
        <Head>
          <title>Verify - StartupMAXIM</title>
        </Head>
        <SettingPagesLayout>
          <div className="pages-shower p-4 min-h-screen flex flex-col justify-center items-center">
            <div className="flex items-center gap-6 flex-col">
              <div className="flex items-center gap-2 flex-col">
                <b className="text-6xl text-center text-[var(--ourorangeColor)]">
                  <FaRegCircleCheck />
                </b>
                <h2 className="text-center w-full text-3xl select-none">
                  Verify your Identity
                </h2>
                <p className="text-base text-[var(--grayColor)] text-center">
                  Verify your Identity just in few minutes to proceed next with
                  us.
                </p>

                <h3 className="font-bold">example@xyz.com</h3>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <button className="custom-btn pointer-events-none select-none !flex items-center gap-1">
                    <MdCancel />
                    <p>Not Verified</p>
                  </button>
                  <button className="custom-btn">Change Email</button>
                </div>
                <button className="custom-btn">Verify Now!!</button>
              </div>
              <p className="text-center text-[var(--grayColor)] w-[80%]">
                <b className="text-black">Note</b>: You must double-check your
                email before verifying your email. If you want to change your
                email, you must use the Change Email link.
              </p>
            </div>
          </div>
        </SettingPagesLayout>
      </Layout>
    </AuthenticatedRoute>
  );
};

export default VerifyIdentityPage;
