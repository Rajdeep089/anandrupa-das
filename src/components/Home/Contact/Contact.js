import React, { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import fmg from "../../../Assets/anand/fi-2.png";
import axios from "axios";
import {
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
import Form from "../../../Assets/anand/form.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/send-email",
        formData
      );
      console.log(response.data);
      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex xl:flex-row flex-col xl:justify-between md:justify-evenly items-center bg-bg3 bg-contain xl:bg-cover bg-no-repeat bg-center py-10 md:px-5">
      <div className="flex flex-col justify-evenly items-center xl:w-1/3 space-y-20 mx-5 ">
        <h3 className="md:text-5xl text-xl font-dm xss:mt-7">
          Contact Me
        </h3>
        <div className="hidden xl:flex xl:flex-col justify-between font-domine items-start space-y-16 ">
            <div className="flex flex-row items-end">
            <FiMail className="mt-1 mr-4 text-3xl" />
              <h3 className="font-semibold text-2xl">contact@anandrupa.com</h3>
            </div>
            <div className="flex flex-row items-end">
            <FiPhone className="mt-1 mr-4 text-3xl" />
              <h3 className="font-semibold text-2xl">+44 7459 331 504</h3>
            </div>
        </div>
        <div className="xl:flex flex-row w-full justify-evenly text-6xl hidden pt-10 ">
          <a
            className="no-underline text-black hover:scale-110 transition-all duration-300 rounded-full"
            href="https://www.facebook.com/anandrupadas"
          >
            <AiFillFacebook />
          </a>
          <a
            className="no-underline text-black hover:scale-110 transition-all duration-300"
            href="https://api.whatsapp.com/send/?phone=%2B447459331504&text&type=phone_number&app_absent=0"
          >
            <AiOutlineWhatsApp />
          </a>
          <a
            className="no-underline text-black hover:scale-110 transition-all duration-300"
            href="https://www.instagram.com/anandrupadas?igsh=MTQ5MHh3am56M2R0dA%3D%3D&utm_source=qr"
          >
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
      <div className="relative">
        <img src={Form} loading="lazy" className="w-full h-full" alt="pic" />
        <form
          onSubmit={handleSubmit}
          className="absolute -top-5 right-0 left-0 w-full h-full space-y-5 flex flex-col items-center justify-between mx-auto text-xl font-sans max-w-full scale-75 sm:text-2xl xll:text-3xl xxl:text-4xl "
        >
          <div className="flex flex-row justify-between space-x-3 w-full">
            <div className="flex flex-col justify-center items-start w-1/2 ">
              <label htmlFor="name" className="font-bold text-left">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-f1 bg-contain bg-center bg-no-repeat bg-transparent outline-none pl-3 py-1 xs:py-3 sm:py-4 md:py-6 lg:py-8 xll:py-10 active:scale-105 transition-all duration-100 w-full"
                required
              />
            </div>
            <div className="flex flex-col justify-center w-1/2">
              <label htmlFor="email" className="font-bold text-left">
                Email ID *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-f1 bg-contain bg-center bg-no-repeat bg-transparent outline-none pl-3 py-1 xs:py-3 sm:py-4 md:py-6 lg:py-8 xll:py-10 active:scale-105 transition-all duration-100 w-full"
                required
              />
            </div>
          </div>
          <div className="flex flex-row justify-between space-x-3 w-full">
            <div className="flex flex-col justify-center w-1/2">
              <label htmlFor="subject" className="font-bold text-left">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-f1 bg-contain bg-center bg-no-repeat bg-transparent outline-none pl-3 py-1 xs:py-3 sm:py-4 md:py-6 lg:py-8 xll:py-10 active:scale-105 transition-all duration-100 w-full"
                required
              />
            </div>
            <div className="flex flex-col justify-center w-1/2">
              <label htmlFor="phone" className="font-bold text-left">
                Phone No. *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-f1 bg-contain bg-center bg-no-repeat bg-transparent outline-none pl-3 py-1 xs:py-3 sm:py-4 md:py-6 lg:py-8 xll:py-10 active:scale-105 transition-all duration-100 w-full"
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full space-y-1 md:space-y-3 ">
            <label htmlFor="message" className="font-bold text-left">
              Message *
            </label>
            <div className="relative w-full active:scale-105 transition-all duration-100">
            <img src={fmg} alt="fmg" className="w-full h-full" loading="lazy" />
            <textarea
              id="message"
              name="message"
              rows="3"
              //   onSelect={{style:"border-none"}}
              value={formData.message}
              onChange={handleChange}
              className=" mx-auto absolute top-0 left-0 right-0 bottom-0 m-auto w-[90%] h-[75%] bg-transparent border-transparent outline-none resize-none  pl-3 "
              required
            />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#F7E4A1] w-[30%] border-black font-semibold border-2 p-2 rounded-xl  hover:bg-[#eccb57] transition-all duration-300 hover:scale-105 shadow-md "
          >
            Submit
          </button>
        </form>
      </div>
      <div className="xl:hidden flex justify-between items-center xs:w-[90%] w-full px-2 font-domine font-semibold xs:px-0">
        <div className="flex flex-row items-center justify-start  gap-x-1 md:text-xl text-[10px] xxs:text-xs apple:text-sm">
        <FiMail className=" xxs:mb-0"/>
        <p>contact@anandrupa.com</p>
        </div>
        <div className="flex flex-row items-center justify-end  gap-x-1 md:text-xl text-[10px] xxs:text-xs apple:text-sm">
        <FiPhone className=" xxs:mb-0"/>
        <p>+44 7459 331 504</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
