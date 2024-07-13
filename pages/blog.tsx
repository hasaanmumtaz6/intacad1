import React from "react";
import Layout from "./Components/Layout";
import Head from "next/head";
import PagesBanner from "./Components/PagesBanner";
import FeatureBlogBox from "./Components/FeatureBlogBox";

const BlogPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blog &rarr; StartupMAXIM</title>
      </Head>
      <div>
        <PagesBanner bannerTitle="Our Blog" visitName="Blog" />
        <FeatureBlogBox />
      </div>
    </Layout>
  );
};

export default BlogPage;
