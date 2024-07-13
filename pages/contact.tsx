import React from "react";
import Layout from "./Components/Layout";
import Head from "next/head";
import ContactTouch from "./Components/ContactTouch";
import PagesBanner from "./Components/PagesBanner";
import MoreWayContact from "./Components/MoreWayContact";
import BestTeam from "./Components/BestTeam";

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us &rarr; StartupMAXIM</title>
      </Head>
      <PagesBanner bannerTitle="Contact Us" visitName="Contact" />
      <div className="contact-us-page-container flex flex-col gap-6">
        <ContactTouch />
        <MoreWayContact />
        <BestTeam />
      </div>
    </Layout>
  );
};

export default ContactPage;
