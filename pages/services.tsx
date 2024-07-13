import React from "react";
import Layout from "./Components/Layout";
import Head from "next/head";
import ServiceSection from "./Components/ServiceSection";
import PagesBanner from "./Components/PagesBanner";
import OurPlans from "./Components/OurPlans";
import Faqs from "./Components/Faqs";

const ServicesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Services &rarr; StartupMAXIM</title>
      </Head>
      <div>
        <PagesBanner bannerTitle="Our Services" visitName="Services" />
        <div className="px-4 flex flex-col gap-12 py-4">
          <ServiceSection />
          <OurPlans />
          <Faqs />
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
