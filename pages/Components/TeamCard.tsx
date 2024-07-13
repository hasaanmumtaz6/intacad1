import React from "react";
import Image from "next/image";
import Link from "next/link";

const TeamCard = ({
  imageSrc,
  MemberName,
  MemberProf,
  MemberDetailUrl,
}: any) => {
  return (
    <div className="text-center flex flex-col w-[270px]">
      <div className="team-card relative">
        <div className="team-pic-back-box absolute z-10"></div>
        <div className="relative z-20">
          <Image
            src={imageSrc}
            alt="imran-pic-team"
            className="team-pic relative z-20"
            width={260}
            height={260}
          />
        </div>
      </div>
      <div className="pt-10">
        <Link
          href={`${MemberDetailUrl}`}
          className="font-bold text-xl text-[#00b869]"
        >
          {MemberName}
        </Link>
        <p className="text-[14px] text-[#ffbb54] font-bold">{MemberProf}</p>
      </div>
    </div>
  );
};

export default TeamCard;
