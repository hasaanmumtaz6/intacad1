import React from "react";
import SectionsHead from "./SectionsHead";
import pic from "@/public/image/imran.png";
import pic2 from "@/public/image/haspic.png";
import pic3 from "@/public/image/faheem.png";
import pic4 from "@/public/image/shoaib.png";
import iconsection from "@/public/image/amazingTeam.png";
import TeamCard from "./TeamCard";

const BestTeam = () => {
  return (
    <div className="sections-box relative">
      <SectionsHead
        sectionIcon={iconsection}
        sectionAltText="team-best-section-icon"
        SectionTitle="Amazing Team Members"
      />
      <div className="best-team-box-homepage">
        <TeamCard
          imageSrc={pic}
          MemberName="Imran Ahmad Lashari"
          MemberProf="Digital Marketing Expert"
          MemberDetailUrl="/#"
        />
        <TeamCard
          imageSrc={pic2}
          MemberName="M Hasaan Mumtaz"
          MemberProf="Full-Stack Developer"
          MemberDetailUrl="/#"
        />
        <TeamCard
          imageSrc={pic4}
          MemberName="M Shoaib Abbas"
          MemberProf="Wordpress & Graphic Designer"
          MemberDetailUrl="/#"
        />
      </div>
    </div>
  );
};

export default BestTeam;
