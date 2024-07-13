import Head from "next/head";
import Layout from "./Components/Layout";
import HomeBanner from "./Components/HomeBanner";
import HomeBrandBox from "./Components/HomeBrandBox";
import WeOffer from "./Components/WeOffer";
import BestTeam from "./Components/BestTeam";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - INTACAD</title>
      </Head>
      {/* <AuthenticatedRoute> */}
        <div className="min-h-screen max-h-full home-container">
          <HomeBanner />
          <HomeBrandBox />
          <WeOffer />
          {/* <BestTeam /> */}
        </div>
      {/* </AuthenticatedRoute> */}
    </Layout>
  );
}
