import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import SettingPagesLayout from "../Components/SettingPagesLayout";
import AuthenticatedRoute from "../Components/AuthenticatedRoute";

const WorkOnServicesPage = () => {
  return (
    <AuthenticatedRoute>
      <Layout>
        <Head>
          <title>Work on Services - StartupMAXIM</title>
        </Head>
        <SettingPagesLayout>
          <div className="pages-shower p-4 min-h-screen flex flex-col items-center justify-center">
            <div className="text-xl text-center text-[var(--grayColor)]">
              <p>You have not purchased any Services, Plans yet.</p>
            </div>
          </div>
        </SettingPagesLayout>
      </Layout>
    </AuthenticatedRoute>
  );
};

export default WorkOnServicesPage;
