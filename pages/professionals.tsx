import React from "react";
import SectionsHead from "./Components/SectionsHead";
import PagesBanner from "./Components/PagesBanner";
import Head from "next/head";
import Layout from "./Components/Layout";
import sectionPic from "@/public/image/amazingTeam.png";
import TeamCard from "./Components/TeamCard";
import ImranPic from '@/public/image/imran.png'
import HasaanPic from '@/public/image/haspic.png'
import ShoaibPic from '@/public/image/shoaib.png'

const ProfessionalsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Professionals &rarr; StartupMAXIM</title>
      </Head>
      <PagesBanner bannerTitle="Our Team" visitName="Professionals" />
      <div className="about-us-page-container">
        <SectionsHead
          sectionIcon={sectionPic}
          sectionAltText="professionals-us-section"
          SectionTitle="Professionals Team Members"
        />
        <div className="flex items-center justify-center w-full gap-10 py-6 px-14 flex-wrap">
          <TeamCard
            imageSrc={ImranPic}
            MemberName="Imran Ahmad Lashari"
            MemberProf="Digital Marketing Expert"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={HasaanPic}
            MemberName="Muhammad Hasaan Mumtaz"
            MemberProf="Senior Full-Stack Developer"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ShoaibPic}
            MemberName="Muhammad Shoaib Abbass"
            MemberProf="WordPress / Graphic Designing"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ImranPic}
            MemberName="Imran Ahmad Lashari"
            MemberProf="Digital Marketing Expert"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={HasaanPic}
            MemberName="Muhammad Hasaan Mumtaz"
            MemberProf="Senior Full-Stack Developer"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ShoaibPic}
            MemberName="Muhammad Shoaib Abbass"
            MemberProf="WordPress / Graphic Designing"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ImranPic}
            MemberName="Imran Ahmad Lashari"
            MemberProf="Digital Marketing Expert"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={HasaanPic}
            MemberName="Muhammad Hasaan Mumtaz"
            MemberProf="Senior Full-Stack Developer"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ShoaibPic}
            MemberName="Muhammad Shoaib Abbass"
            MemberProf="WordPress / Graphic Designing"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ImranPic}
            MemberName="Imran Ahmad Lashari"
            MemberProf="Digital Marketing Expert"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={HasaanPic}
            MemberName="Muhammad Hasaan Mumtaz"
            MemberProf="Senior Full-Stack Developer"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ShoaibPic}
            MemberName="Muhammad Shoaib Abbass"
            MemberProf="WordPress / Graphic Designing"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ImranPic}
            MemberName="Imran Ahmad Lashari"
            MemberProf="Digital Marketing Expert"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={HasaanPic}
            MemberName="Muhammad Hasaan Mumtaz"
            MemberProf="Senior Full-Stack Developer"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ShoaibPic}
            MemberName="Muhammad Shoaib Abbass"
            MemberProf="WordPress / Graphic Designing"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ImranPic}
            MemberName="Imran Ahmad Lashari"
            MemberProf="Digital Marketing Expert"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={HasaanPic}
            MemberName="Muhammad Hasaan Mumtaz"
            MemberProf="Senior Full-Stack Developer"
            MemberDetailUrl="/professionals"
          />
          <TeamCard
            imageSrc={ShoaibPic}
            MemberName="Muhammad Shoaib Abbass"
            MemberProf="WordPress / Graphic Designing"
            MemberDetailUrl="/professionals"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProfessionalsPage;
