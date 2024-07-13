import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaCircleCheck,
  FaEnvelopeOpenText,
  FaMapLocationDot,
  FaPhone,
} from "react-icons/fa6";

const ContactTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [myAlert, setMyAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  // Api Posting
  async function contact(ev: any) {
    ev.preventDefault();
    setFormStatus('Submitting...');

    const data = {
      name,
      email,
      message,
    };
    const response: any = await axios.post("/api/contact", data);
    const response2: any = await axios.post("/api/contactresponse", data);
    if (response.ok) {
      console.log("Form submission failed.");
    } else {
      setName("");
      setEmail("");
      setMessage("");
      setFormStatus('Message sent successfully!');
      setShowAlert(true);
      setTimeout(() => {
        setFormStatus('');
      }, 8000);
      const audio = new Audio("/audio/notification.mp3");
      audio.play();
    }
  }

  return (
    <div className="contact-touch-Box !items-start">
      <div className="touch-box">
        <div className="touch-heading-box">
          <h3>Get In Touch</h3>
          <p>We{"'"}ll get back to you within 2 hours.</p>
          <div className="flex items-start gap-1">
            <span className="w-[20px] h-[3px] rounded-full bg-[#00b869]"></span>
            <span className="w-[30px] h-[3px] rounded-full bg-[#ffbb54]"></span>
            <span className="w-[20px] h-[3px] rounded-full bg-[#00b869]"></span>
          </div>
        </div>

        <div className="touch-info-box">
          <FaPhone />
          <div>
            <b>Phone:</b>
            <Link href="tel:+923289589969">
              {"("}+92{")"} 328 9589 969
            </Link>
          </div>
        </div>

        <div className="touch-info-box">
          <FaEnvelopeOpenText />
          <div>
            <b>Email:</b>
            <Link href="mailto:contactus@startupmaxim.com">
              contactus@startupmaxim.com
            </Link>
          </div>
        </div>

        <div className="touch-info-box">
          <FaMapLocationDot />
          <div>
            <b>Address:</b>
            <p>Chalanger Zone, NY, 11232, USA</p>
          </div>
        </div>

        <div className="touch-info-box">
          <FaMapLocationDot />
          <div>
            <b>Service Hours:</b>
            <p>10:00AM TO 03:30AM</p>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-heading-box">
          <h3>Message Us</h3>
          <p>We{"'"}ll get back to you within 2 hours.</p>
          <div className="flex items-start gap-1">
            <span className="w-[20px] h-[3px] rounded-full bg-[#00b869]"></span>
            <span className="w-[30px] h-[3px] rounded-full bg-[#ffbb54]"></span>
            <span className="w-[20px] h-[3px] rounded-full bg-[#00b869]"></span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-box" onSubmit={contact}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <textarea
            rows={5}
            cols={5}
            placeholder="Message"
            className="max-h-[220px] min-h-[220px]"
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
          />
          <button type="submit" className="custom-btn btn-13 w-fit">
            Send Message
          </button>
          {formStatus && <p className="mt-1 text-sm flex items-start justify-start w-full">{formStatus}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactTouch;
