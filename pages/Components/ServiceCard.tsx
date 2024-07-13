import React from "react";
import LinkBtn from "./LinkBtn";
import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({ imageSrcDisc, imageSrcMob, detailsUrl, title, description, imageAltText }: any) => {
  return (
    <div className="service-card-conatiner">
      <Image src={imageSrcDisc} alt={imageAltText} width={136} height={275} className="disktopPicCard"/>
      <Image src={imageSrcMob} alt={imageAltText} width={300} height={136} className="mobilePicCard"/>
      <div className="content-box-descktop">
        <Link
          href={`${detailsUrl}`}
          className="text-2xl font-bold hover:text-[#00b869]"
        >
          {title}
        </Link>
        <p className="text-[14px] text-[#acacac] text-justify">{description}</p>
        <LinkBtn url={detailsUrl} btntext="Read More &rarr;" />
      </div>
      <div className="content-box-mobile">
        <Link
          href={`${detailsUrl}`}
          className="text-2xl font-bold hover:text-[#00b869]"
        >
          {title}
        </Link>
        <p className="text-[14px] text-[#acacac] text-justify">{description}</p>
        <LinkBtn url={detailsUrl} btntext="Read More &rarr;" />
      </div>
    </div>
  );
};

export default ServiceCard;
