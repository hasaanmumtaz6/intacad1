import React from "react";
import Layout from "./Components/Layout";
import Head from "next/head";
import PagesBanner from "./Components/PagesBanner";
import SectionsHead from "./Components/SectionsHead";
import sectionPic from "@/public/image/aboutus.png";
import cardPic from "@/public/image/mypic.svg";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <Layout>
      <Head>
        <title>About Us &rarr; StartupMAXIM</title>
      </Head>
      <PagesBanner bannerTitle="About Us" visitName="About" />
      <div className="about-us-page-container">
        <SectionsHead
          sectionIcon={sectionPic}
          sectionAltText="about-us-section"
          SectionTitle="About Us"
        />
        <div className="about-us-page-box">
          <div className="about-us-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              itaque quasi perferendis, aut enim inventore sint magni deleniti
              ab cupiditate quas! Culpa repellat nulla laudantium blanditiis nam
              magni vero autem sit! Neque, quibusdam voluptate nihil iure,
              dolorem, ea veritatis voluptatem accusamus dolorum veniam repellat
              commodi incidunt consectetur nulla labore ducimus quo at
              repellendus corporis numquam non maiores! Repudiandae excepturi
              dicta praesentium! Incidunt dolore tempora libero natus odit.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, molestias perspiciatis vel dolor ad quibusdam! Aut
              reiciendis praesentium aliquam eius ullam. Aperiam alias eum
              iusto. Sunt aliquam temporibus ullam illo!
            </p>

            <h2>Why we are?</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              itaque quasi perferendis, aut enim inventore sint magni deleniti
              ab cupiditate quas! Culpa repellat nulla laudantium blanditiis nam
              magni vero autem sit! Neque, quibusdam voluptate nihil iure,
              dolorem, ea veritatis voluptatem accusamus dolorum veniam repellat
              commodi incidunt consectetur nulla labore ducimus quo at
              repellendus corporis numquam non maiores! Repudiandae excepturi
              dicta praesentium! Incidunt dolore tempora libero natus odit.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quos perferendis tenetur repellat sed perspiciatis provident autem
              nam. Minus, harum eos.
            </p>
          </div>

          <div className="founder-detail py-6">
            <Image
              src={cardPic}
              alt="founder-pic"
              className="rounded-md w-[220px]"
            />
            <div className="select-none">
              <h3 className="text-[var(--grayColor)]">
                Founder / Chief Executive Oficer
              </h3>
              <h2>
                Imran Ahmad Lashari
              </h2>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque eos repudiandae ipsa est temporibus, commodi corrupti
                  consectetur dicta eligendi laboriosam, minima quam dignissimos
                  inventore recusandae aspernatur deserunt laudantium non sed
                  ipsam facilis et quia?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  est deserunt libero maiores reiciendis, neque omnis tempora
                  ducimus, sunt inventore voluptates modi eveniet recusandae
                  alias ex!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque eos repudiandae ipsa est temporibus, commodi corrupti
                  consectetur dicta eligendi laboriosam, minima quam dignissimos
                  inventore recusandae aspernatur deserunt laudantium non sed
                  ipsam facilis et quia?
                </p>
              </div>
            </div>
          </div>

          <div className="co-founder-detail pb-4">
            <div className="select-none">
              <h3 className="text-[var(--grayColor)] text-right">
                Co-Founder / Chief Marketing Oficer {"("}CMO{")"}
              </h3>
              <h2 className="text-right">
                Muhammad Hasaan Mumtaz
              </h2>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque eos repudiandae ipsa est temporibus, commodi corrupti
                  consectetur dicta eligendi laboriosam, minima quam dignissimos
                  inventore recusandae aspernatur deserunt laudantium non sed
                  ipsam facilis et quia?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  est deserunt libero maiores reiciendis, neque omnis tempora
                  ducimus, sunt inventore voluptates modi eveniet recusandae
                  alias ex!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque eos repudiandae ipsa est temporibus, commodi corrupti
                  consectetur dicta eligendi laboriosam, minima quam dignissimos
                  inventore recusandae aspernatur deserunt laudantium non sed
                  ipsam facilis et quia?
                </p>
              </div>
            </div>
            <Image
              src={cardPic}
              alt="founder-pic"
              className="rounded-md w-[220px]"
            />
          </div>          
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
