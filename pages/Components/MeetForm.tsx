import React, { useState } from "react";
import countriesData from "../countries.json";
import axios from "axios";
import { FaCircleCheck } from "react-icons/fa6";

type Country = {
  name: string;
  timezone: string;
  available: boolean;
  flag: string;
};

const MeetForm = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<any>();
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const [amPm, setAmPm] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [plateform, setPlateform] = useState("");
  const [country, setCountry] = useState<any>("");
  const [myAlert, setMyAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setSelectedCountry(null);
  };

  const handleCountrySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    setSearchQuery("");
  };

  const handleSelectFocus = () => {
    setIsSearchActive(true);
  };

  const handleSelectBlur = () => {
    setIsSearchActive(false);
  };

  // Convert countriesData object into an array of countries
  const countriesArray: Country[] = Object.entries(countriesData).flatMap(
    ([_, countries]) => countries
  );

  const filteredCountries = searchQuery
    ? countriesArray.filter((country: Country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : countriesArray;

  // Api Posting
  async function meetscheduale(ev: any) {
    ev.preventDefault();
    const data = {
      name,
      email,
      message,
      time,
      amPm,
      month,
      date,
      plateform,
      country: selectedCountry,
    };
    const response: any = await axios.post("/api/meet", data);
    if (response.ok) {
      console.log("Form submission failed.");
    } else {
      setName(""),
        setEmail(""),
        setMessage(""),
        setTime(""),
        setAmPm(""),
        setMonth(""),
        setDate(""),
        setPlateform("")
      setCountry(null);
      setMyAlert("Message Sent Successfully");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 8000);
      const audio = new Audio("/audio/notification.mp3");
      audio.play();
    }
  }

  return (
    <form className="meet-form" onSubmit={meetscheduale}>
      <div className="user-info">
        {/* User Information Inputs */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="service-info">
        <textarea
          cols={10}
          rows={3}
          placeholder="Write About Service (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="time-stamp-date">
        {/* Time, Date, Frame stamp Inputs */}
        <select
          className="time-number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select Time</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
            <option key={hour} value={hour}>
              {hour}:00
            </option>
          ))}
        </select>

        <select
          className="am-pm"
          value={amPm}
          onChange={(e) => setAmPm(e.target.value)}
        >
          <option value="">Select AM/PM</option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>

        <select
          className="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {new Date(0, month - 1).toLocaleString("default", {
                month: "long",
              })}
            </option>
          ))}
        </select>

        <select
          className="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          <option value="">Select Date</option>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      <select
        value={plateform}
        onChange={(e) => setPlateform(e.target.value)}
      >
        <option value="">Choose Meet Platform</option>
        <option value="Zoom">Zoom</option>
        <option value="Google Meet">Google Meet</option>
        <option value="Skype">Skype</option>
      </select>

      {/* Country Select with Search */}
      <div className="countries-box">
        <select
          value={selectedCountry}
          onChange={handleCountrySelect}
          onFocus={handleSelectFocus}
          onBlur={handleSelectBlur}
        >
          <option value="">Select Country</option>
          {filteredCountries.map((country: Country, index: number) => (
            <option key={index} value={`${country.name} - ${country.timezone}`}>
              {country.name} - {country.timezone}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="custom-btn">
        Schedule Meet
      </button>

      {/* Alert Message */}
      {showAlert ? (
        <div className="fixed top-20 right-4 z-[99999] bg-[var(--btncolor5)] text-white text-medium px-6 py-2 rounded-md animate-pulse flex items-center justify-center gap-2">
          <FaCircleCheck />
          <p>{myAlert}</p>
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default MeetForm;
