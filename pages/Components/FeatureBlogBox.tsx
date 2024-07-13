import React from "react";
import BlogCard from "./BlogCard";
import Webdevdisc from "@/public/image/webdevdisctop.jpg";
import Webdevmob from "@/public/image/webdevmobile.jpg";
import SectionsHead from "./SectionsHead";
import sectionIcon from "@/public/image/FeatureBlog.png";

const FeatureBlogBox = () => {
  return (
    <div className="feature-post-container">
      <SectionsHead
        SectionTitle="Feature Post"
        sectionAltText="feature-post-alt-text"
        sectionIcon={sectionIcon}
      />
      <div className="feature-post-box">
        {/* Web-developemt services card */}
        <BlogCard
          imageSrcDisc={Webdevdisc}
          imageSrcMob={Webdevmob}
          imageAltText={"web-dev-pic"}
          detailsUrl="/#"
          title="We offer a comprehensive suite of web"
          description="We offer a comprehensive suite of web development services to bring
          your vision to life, whether you need a completely custom solution or
          want to leverage the power of popular platforms like WordPress,
          Blogger, or Wix."
        />

        {/* SEO Optimization */}
        <BlogCard
          imageSrcDisc={Webdevdisc}
          imageSrcMob={Webdevmob}
          imageAltText={"web-dev-pic"}
          detailsUrl="/#"
          title="Ranking high in search engine results i"
          description="Ranking high in search engine results is crucial for attracting
          organic traffic and achieving success. Our expert SEO services
          encompass all aspects of optimization, ensuring your website gets
          seen by the right audience at right time."
        />

        {/* Graphic Designing */}
        <BlogCard
          imageSrcDisc={Webdevdisc}
          imageSrcMob={Webdevmob}
          imageAltText={"web-dev-pic"}
          detailsUrl="/#"
          title="Captivating graphic design is essential"
          description="Captivating graphic design is essential for grabbing attention,
          leaving a lasting impression, and achieving your marketing goals.
          Our team of skilled graphic designers offers a full spectrum of
          services to bring your vision to life."
        />

        {/* Social Media */}
        <BlogCard
          imageSrcDisc={Webdevdisc}
          imageSrcMob={Webdevmob}
          imageAltText={"web-dev-pic"}
          detailsUrl="/#"
          title="Dominate social media with our experts! We"
          description="Dominate social media with our experts! We craft strategy, content
          & manage ads to boost engagement & grow your brand.Social media is
          an undeniable powerhouse for brand awareness, customer engagement,
          and driving business growth."
        />
      </div>
    </div>
  );
};

export default FeatureBlogBox;
