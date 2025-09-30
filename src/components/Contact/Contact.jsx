import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react"; // Make sure this package is installed
import "./Contact.css";

import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "bee9ce6e-1acd-4a47-8c57-fcd305deedab";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset(); // Clears form
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="contact">
      {/* Left Column */}
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          We'd love to hear from you! Whether you have a question about our
          programs, feedback, or anything else, feel free to reach out.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Email: <a href="mailto:Contact@123.dev">contact@123.dev</a>
          </li>
          <li>
            <img src={phone_icon} alt="" />
            Phone: <a href="tel:+9198653421">+91 98653421</a>
          </li>
          <li>
            <img src={location_icon} alt="" />
            Address: <br /> 78 Mascot Ave, <br /> MA 02312, India
          </li>
        </ul>
      </div>

      {/* Right Column - Form */}
      <div className="contact-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            {...register("phone")}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message"
            {...register("message", { required: true })}
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        {result && <span>{result}</span>}
      </div>
    </div>
  );
};

export default Contact;
