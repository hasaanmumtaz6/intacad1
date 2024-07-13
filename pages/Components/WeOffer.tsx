import React from "react";
import SectionsHead from "./SectionsHead";
import sectionIcon from "@/public/image/bestofferIcon.png";
import LinkBtn from "./LinkBtn";
import Webdevdisc from "@/public/image/webdevdisctop.jpg";
import Webdevmob from "@/public/image/webdevmobile.jpg";
import ServiceCard from "./ServiceCard";

const WeOffer = () => {
  return (
    <div className="sections-box relative">
      <SectionsHead
        SectionTitle="What We Offer"
        sectionAltText="offer-alt-text"
        sectionIcon={sectionIcon}
      />
      <div className="we-offer-box-homepage">
        {/* Web-developemt services card */}
        <ServiceCard
          imageSrcDisc={Webdevdisc}
          imageSrcMob={Webdevmob}
          imageAltText={"web-dev-pic"}
          detailsUrl="/#"
          title="Web Development"
          description="We offer a comprehensive suite of web development services to bring
          your vision to life, whether you need a completely custom solution or
          want to leverage the power of popular platforms like WordPress,
          Blogger, or Wix."
        />

        {/* SEO Optimization */}
        <ServiceCard
          imageSrcDisc={Webdevdisc}
          imageSrcMob={Webdevmob}
          imageAltText={"web-dev-pic"}
          detailsUrl="/#"
          title="SEO Optimization"
          description="Ranking high in search engine results is crucial for attracting
          organic traffic and achieving success. Our expert SEO services
          encompass all aspects of optimization, ensuring your website gets
          seen by the right audience at right time."
        />

        {/* Graphic Designing */}
        <ServiceCard
          imageSrcDisc={Webdevdisc}
          imageSrcMob={Webdevmob}
          imageAltText={"web-dev-pic"}
          detailsUrl="/#"
          title="Graphic Design"
          description="Captivating graphic design is essential for grabbing attention,
          leaving a lasting impression, and achieving your marketing goals.
          Our team of skilled graphic designers offers a full spectrum of
          services to bring your vision to life."
        />

        {/* Social Media */}
        <ServiceCard
          imageSrcDisc={Webdevdisc}
          imageSrcMob={Webdevmob}
          imageAltText={"web-dev-pic"}
          detailsUrl="/#"
          title="Social Media"
          description="Dominate social media with our experts! We craft strategy, content
          & manage ads to boost engagement & grow your brand.Social media is
          an undeniable powerhouse for brand awareness, customer engagement,
          and driving business growth."
        />
      </div>

      {/* services-page-trigger-btn */}
      <LinkBtn url="/services" btntext="Other Services &rarr;" />
      {/* <Image src={illwave} alt="Wave-We-Offer-Section" className="w-full absolute -bottom-24" /> */}
    </div>
  );
};

export default WeOffer;
