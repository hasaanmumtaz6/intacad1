import React, { useState } from "react";
import SectionsHead from "../Components/SectionsHead";
import plansicon from "@/public/image/plansIcons.png";
import PlansCard from "./PlansCard";

const OurPlans = () => {
  const [isHourly, setIsHourly] = useState(true);
  const [isMonthly, setIsMonthly] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const onHandleHourlyClick = () => {
    setIsHourly(true);
    setIsMonthly(false);
    setIsYearly(false);
  };
  const onHandleMonthlyClick = () => {
    setIsHourly(false);
    setIsMonthly(true);
    setIsYearly(false);
  };
  const onHandleYearlyClick = () => {
    setIsHourly(false);
    setIsMonthly(false);
    setIsYearly(true);
  };

  return (
    <div className="ourPlans-container">
      <SectionsHead
        SectionTitle="Our Plans"
        sectionAltText="plans-services-alt-text"
        sectionIcon={plansicon}
      />
      <div className="plans-opner-container">
        <div className="plans-opner-box">
          <button
            className={`plans-opner-btn ${isHourly ? "active" : ""}`}
            onClick={onHandleHourlyClick}
          >
            Hourly
          </button>
          <button
            className={`plans-opner-btn ${isMonthly ? "active" : ""}`}
            onClick={onHandleMonthlyClick}
          >
            Monthly
          </button>
          <button
            className={`plans-opner-btn ${isYearly ? "active" : ""}`}
            onClick={onHandleYearlyClick}
          >
            Yearly
          </button>
        </div>
      </div>
      {isHourly && (
        <div className="PlansCardBox">
          <PlansCard
            cardCategory="Basic"
            cardLimit="hour"
            cardPrice="24.99"
            priceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem?"
            listNo1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo3="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo4="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo5="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo6="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            btnLink="/services"
            BtnText="Make It Your"
            list1icon={true}
            list2icon={true}
            list3icon={false}
            list4icon={true}
            list5icon={false}
            list6icon={false}
          />
          <PlansCard
            cardCategory="Premium"
            cardLimit="hour"
            cardPrice="144.99"
            priceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem?"
            listNo1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo3="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo4="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo5="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo6="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            btnLink="/services"
            BtnText="Make It Your"
            list1icon={true}
            list2icon={true}
            list3icon={true}
            list4icon={true}
            list5icon={true}
            list6icon={true}
          />
          <PlansCard
            cardCategory="Standard"
            cardLimit="hour"
            cardPrice="94.99"
            priceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem?"
            listNo1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo3="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo4="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo5="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo6="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            btnLink="/services"
            BtnText="Make It Your"
            list1icon={true}
            list2icon={true}
            list3icon={true}
            list4icon={true}
            list5icon={false}
            list6icon={false}
          />
        </div>
      )}
      {isMonthly && (
        <div className="PlansCardBox">
          <PlansCard
            cardCategory="Basic"
            cardLimit="mon"
            cardPrice="24.99"
            priceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem?"
            listNo1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo3="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo4="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo5="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo6="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            btnLink="/services"
            BtnText="Make It Your"
            list1icon={true}
            list2icon={true}
            list3icon={false}
            list4icon={true}
            list5icon={false}
            list6icon={false}
          />
          <PlansCard
            cardCategory="Premium"
            cardLimit="mon"
            cardPrice="144.99"
            priceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem?"
            listNo1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo3="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo4="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo5="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo6="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            btnLink="/services"
            BtnText="Make It Your"
            list1icon={true}
            list2icon={true}
            list3icon={true}
            list4icon={true}
            list5icon={true}
            list6icon={true}
          />
          <PlansCard
            cardCategory="Standard"
            cardLimit="mon"
            cardPrice="94.99"
            priceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem?"
            listNo1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo3="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo4="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo5="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo6="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            btnLink="/services"
            BtnText="Make It Your"
            list1icon={true}
            list2icon={true}
            list3icon={true}
            list4icon={true}
            list5icon={false}
            list6icon={false}
          />
        </div>
      )}
      {isYearly && (
        <div className="PlansCardBox">
          <PlansCard
            cardCategory="Basic"
            cardLimit="year"
            cardPrice="24.99"
            priceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem?"
            listNo1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo3="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo4="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo5="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo6="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            btnLink="/services"
            BtnText="Make It Your"
            list1icon={true}
            list2icon={true}
            list3icon={false}
            list4icon={true}
            list5icon={false}
            list6icon={false}
          />
          <PlansCard
            cardCategory="Premium"
            cardLimit="year"
            cardPrice="144.99"
            priceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem?"
            listNo1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo3="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo4="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo5="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo6="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            btnLink="/services"
            BtnText="Make It Your"
            list1icon={true}
            list2icon={true}
            list3icon={true}
            list4icon={true}
            list5icon={true}
            list6icon={true}
          />
          <PlansCard
            cardCategory="Standard"
            cardLimit="year"
            cardPrice="94.99"
            priceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem?"
            listNo1="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo3="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo4="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo5="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listNo6="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            btnLink="/services"
            BtnText="Make It Your"
            list1icon={true}
            list2icon={true}
            list3icon={true}
            list4icon={true}
            list5icon={false}
            list6icon={false}
          />
        </div>
      )}
    </div>
  );
};

export default OurPlans;
