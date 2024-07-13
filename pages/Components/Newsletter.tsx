import axios from "axios";
import React, { useState } from "react";
import { FaAngleRight, FaCircleCheck } from "react-icons/fa6";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [myAlert, setMyAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  console.log(email);

  async function newsletter(e:any) {
    e.preventDefault();
    const data = {
      email,
    };
    const response: any = await axios.post("/api/newsletter", data);
    if (response.ok) {
      console.log("Form submission failed.");
    } else {
      setEmail("");
      setMyAlert("Your subscription has been confirmed");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 8000);
      const audio = new Audio("/audio/notification.mp3");
      audio.play();
    }
  };

  return (
    <>
      <form className="newsletter-form !pt-4" onSubmit={newsletter}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <button type="submit">
          <FaAngleRight />
        </button>
      </form>
      {/* Alert Message */}
      {showAlert ? (
        <div className="fixed top-20 right-4 z-[99999] bg-[var(--btncolor5)] text-white text-medium px-6 py-2 rounded-md animate-pulse flex items-center justify-center gap-2">
          <FaCircleCheck />
          <p>{myAlert}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Newsletter;
