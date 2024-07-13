import React from "react";
import SettingPagesLayout from "../Components/SettingPagesLayout";
import Head from "next/head";
import Layout from "../Components/Layout";
import AnimatedHeading from "../Components/AnimatedHeading";
import AuthenticatedRoute from "../Components/AuthenticatedRoute";

const BillingPage = () => {
  return (
    <AuthenticatedRoute>
      <Layout>
        <Head>
          <title>Billing - StartupMAXIM</title>
        </Head>
        <SettingPagesLayout>
          <div className="pages-shower p-4 min-h-screen">
            <div className="form-opner-header-trigger flex items-center justify-between w-full gap-4 flex-wrap text-[#545454] border-b-[1px] border-gray-200 py-6">
              <AnimatedHeading
                heading="ADD&nbsp;BILLING&nbsp;METHOD"
                fontSize="text-2xl method-heading"
              />
              <button className="custom-btn">ADD METHOD &rarr;</button>
            </div>

            <div className="saved-cards py-5">
              <p className="text-base text-[var(--grayColor)] text-center">
                You have not yet saved any cards in the billing process.
              </p>
            </div>
          </div>
        </SettingPagesLayout>
      </Layout>
    </AuthenticatedRoute>
  );
};

export default BillingPage;
