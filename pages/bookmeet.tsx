import React from "react";
import Layout from "./Components/Layout";
import PagesBanner from "./Components/PagesBanner";
import Head from "next/head";
import MeetForm from "./Components/MeetForm";

const BookMeetPage = () => {
  return (
    <Layout>
      <Head>
        <title>Book A Meet</title>
      </Head>
      <PagesBanner bannerTitle="Book A Meet" visitName="Book Meet" />
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-5xl font-bold">Book Meet</h2>
        <p className="text-[var(--grayColor)]">We are reaching out to you in next 45-min to confirm your Booking</p>
        <MeetForm />
      </div>
    </Layout>
  );
};

export default BookMeetPage;
