import React from "react";
import LinkBtn from "./LinkBtn";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";

const PlansCard = ({
  cardCategory,
  cardLimit,
  cardPrice,
  priceDescription,
  listNo1,
  listNo2,
  listNo3,
  listNo4,
  listNo5,
  listNo6,
  btnLink,
  BtnText,
  list1icon,
  list2icon,
  list3icon,
  list4icon,
  list5icon,
  list6icon,
}: any) => {
  return (
    <div className="plans-Card-month">
      <div className="badge-Box">
        <div className="price-card-badge">
          <h2 className="capitalize">{cardCategory}</h2>
        </div>
      </div>
      <div className="price-box">
        <h3>
          ${cardPrice}/{cardLimit}
        </h3>
        <p>{priceDescription}</p>
      </div>
      <ol className="plans-Details-Box">
        <div className="lisbox-plans">
          {list1icon ? (
            <GiCheckMark className="TickMark" />
          ) : (
            <GiCrossMark className="CroseMark" />
          )}
          <li className={`${list1icon ? "text-black" : " text-gray-400"}`}>
            {listNo1}
          </li>
        </div>
        <div className="lisbox-plans">
          {list2icon ? (
            <GiCheckMark className="TickMark" />
          ) : (
            <GiCrossMark className="CroseMark" />
          )}
          <li className={`${list2icon ? "text-black" : " text-gray-400"}`}>
            {listNo2}
          </li>
        </div>
        <div className="lisbox-plans">
          {list3icon ? (
            <GiCheckMark className="TickMark" />
          ) : (
            <GiCrossMark className="CroseMark" />
          )}
          <li className={`${list3icon ? "text-black" : " text-gray-400"}`}>
            {listNo3}
          </li>
        </div>
        <div className="lisbox-plans">
          {list4icon ? (
            <GiCheckMark className="TickMark" />
          ) : (
            <GiCrossMark className="CroseMark" />
          )}
          <li className={`${list4icon ? "text-black" : " text-gray-400"}`}>
            {listNo4}
          </li>
        </div>
        <div className="lisbox-plans">
          {list5icon ? (
            <GiCheckMark className="TickMark" />
          ) : (
            <GiCrossMark className="CroseMark" />
          )}
          <li className={`${list5icon ? "text-black" : " text-gray-400"}`}>
            {listNo5}
          </li>
        </div>
        <div className="lisbox-plans">
          {list6icon ? (
            <GiCheckMark className="TickMark" />
          ) : (
            <GiCrossMark className="CroseMark" />
          )}
          <li className={`${list6icon ? "text-black" : " text-gray-400"}`}>
            {listNo6}
          </li>
        </div>
      </ol>
      <LinkBtn url={btnLink} btntext={BtnText} />
    </div>
  );
};

export default PlansCard;
