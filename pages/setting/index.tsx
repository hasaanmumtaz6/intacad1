import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import Link from "next/link";
import SettingPagesLayout from "../Components/SettingPagesLayout";
import { FaMoneyBillWave, FaNetworkWired } from "react-icons/fa";
import {
  MdContacts,
  MdMiscellaneousServices,
  MdOutlineHistoryEdu,
} from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import {
  RiCustomerService2Fill,
  RiLightbulbFlashFill,
  RiProfileFill,
  RiVerifiedBadgeFill,
} from "react-icons/ri";
import AuthenticatedRoute from "../Components/AuthenticatedRoute";

const SettingPage = () => {
  return (
    <AuthenticatedRoute>
      <Layout>
        <Head>
          <title>Setting - StartupMAXIM</title>
        </Head>
        <SettingPagesLayout>
          <div className="pages-shower p-4">
            <h2 className="text-4xl font-bold text-center pt-6 pb-1 px-4 select-none">
              Setting
            </h2>
            <p className="text-center pb-6 text-[var(--grayColor)] select-none">
              Chose setting option to proceed next.
            </p>
            <div className="payments-billing-transiction flex items-center gap-5 flex-wrap justify-center border-b-[1px] border-gray-100 pb-5">
              <Link
                href="/setting/billing"
                className="hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-100 p-6 w-[230px] h-[130px] flex items-center justify-center text-center rounded-md transition-all duration-700 ease-in-out flex-col hover:text-[var(--ourorangeColor)] border-x-[3px] border-x-[var(--btncolor1)]"
              >
                <b className="text-2xl">
                  <FaMoneyBillWave />
                </b>
                <h3>Add Billing Method</h3>
              </Link>
              <Link
                href="/setting/billing"
                className="hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-100 p-6 w-[230px] h-[130px] flex items-center justify-center text-center rounded-md transition-all duration-700 ease-in-out flex-col hover:text-[var(--ourorangeColor)] border-x-[3px] border-x-[var(--btncolor1)]"
              >
                <b className="text-2xl">
                  <MdOutlineHistoryEdu />
                </b>
                <h3>Payments History</h3>
              </Link>
              <Link
                href="/setting/billing"
                className="hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-100 p-6 w-[230px] h-[130px] flex items-center justify-center text-center rounded-md transition-all duration-700 ease-in-out flex-col hover:text-[var(--ourorangeColor)] border-x-[3px] border-x-[var(--btncolor1)]"
              >
                <b className="text-2xl">
                  <GrTransaction />
                </b>
                <h3>Transiction Notification</h3>
              </Link>
            </div>

            <div className="Contacts-infUser-identityVer flex items-center gap-5 flex-wrap justify-center border-b-[1px] border-gray-100 py-5">
              <Link
                href="/setting/contactinfo"
                className="hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-100 p-6 w-[230px] h-[130px] flex items-center justify-center text-center rounded-md transition-all duration-700 ease-in-out flex-col hover:text-[var(--ourorangeColor)] border-x-[3px] border-x-[var(--btncolor1)]"
              >
                <b className="text-2xl">
                  <RiProfileFill />
                </b>
                <h3>Profile Overview</h3>
              </Link>
              <Link
                href="/setting/verifyidentity"
                className="hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-100 p-6 w-[230px] h-[130px] flex items-center justify-center text-center rounded-md transition-all duration-700 ease-in-out flex-col hover:text-[var(--ourorangeColor)] border-x-[3px] border-x-[var(--btncolor1)]"
              >
                <b className="text-2xl">
                  <RiVerifiedBadgeFill />
                </b>
                <h3>Identity Verfication</h3>
              </Link>
              <Link
                href="/contact"
                className="hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-100 p-6 w-[230px] h-[130px] flex items-center justify-center text-center rounded-md transition-all duration-700 ease-in-out flex-col hover:text-[var(--ourorangeColor)] border-x-[3px] border-x-[var(--btncolor1)]"
              >
                <b className="text-2xl">
                  <MdContacts />
                </b>
                <h3>Contact Us</h3>
              </Link>
            </div>

            <div className="helpCent-Services-WorkingSer flex items-center gap-5 flex-wrap justify-center py-5">
              <Link
                href="/setting/plans"
                className="hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-100 p-6 w-[230px] h-[130px] flex items-center justify-center text-center rounded-md transition-all duration-700 ease-in-out flex-col hover:text-[var(--ourorangeColor)] border-x-[3px] border-x-[var(--btncolor1)]"
              >
                <b className="text-2xl">
                  <RiLightbulbFlashFill />
                </b>
                <h3>Your Plans</h3>
              </Link>
              <Link
                href="/setting/services"
                className="hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-100 p-6 w-[230px] h-[130px] flex items-center justify-center text-center rounded-md transition-all duration-700 ease-in-out flex-col hover:text-[var(--ourorangeColor)] border-x-[3px] border-x-[var(--btncolor1)]"
              >
                <b className="text-2xl">
                  <MdMiscellaneousServices />
                </b>
                <h3>Your Services</h3>
              </Link>
              <Link
                href="/setting/workon"
                className="hover:shadow-md hover:shadow-gray-300 border-[1px] border-gray-100 p-6 w-[230px] h-[130px] flex items-center justify-center text-center rounded-md transition-all duration-700 ease-in-out flex-col hover:text-[var(--ourorangeColor)] border-x-[3px] border-x-[var(--btncolor1)]"
              >
                <b className="text-2xl">
                  <FaNetworkWired />
                </b>
                <h3>Work on Services</h3>
              </Link>
            </div>
          </div>
        </SettingPagesLayout>
      </Layout>
    </AuthenticatedRoute>
  );
};

export default SettingPage;
