import React from "react";
import Image from "next/image";

const SectionsHead = ({ sectionIcon, sectionAltText, SectionTitle }: any) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center pb-4">
      {/* <div className="bg-[#ffffff] w-[70px] h-[70px] flex items-center justify-center shadow-gray-200 border-gray-200 border-[1px] border-solid rounded-full shadow-inner p-2">
        <Image
          src={sectionIcon}
          alt={sectionAltText}
          className="w-[48px]"
          width={48}
          height={48}
        />
      </div> */}
      <h2 className="section-title text-5xl text-center font-bold bg-gradient-to-r from-[var(--btncolor1)] to-[var(--btncolor5)] text-transparent bg-clip-text cursor-context-menu">
        {SectionTitle}
      </h2>
    </div>
  );
};

export default SectionsHead;
