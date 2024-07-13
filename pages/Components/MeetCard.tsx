import React from "react";
import Image from "next/image";
import LinkBtn from "./LinkBtn";

const MeetCard = ({plateform, picSrc }:any) => {

  return (
    <div className="form-handler-meet">
      <Image src={picSrc} alt={`{plateform}-meet-icon`} width={80} height={80} />
      <div className="meetChannel-info">
        <h2>BOOK A {plateform} MEET</h2>
        <p>We are offering only 30/mins meet on {plateform}.</p>
        <LinkBtn url="/bookmeet" btntext={`Book ${plateform} Meet`} />
      </div>
    </div>
  );
};

export default MeetCard;
