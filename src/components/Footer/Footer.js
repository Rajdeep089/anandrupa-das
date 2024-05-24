import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./Footer.css";
import line from "../../Assets/anand/footer.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="text-center ">
        <Col md="12" className="">
          <div className="flex justify-around items-center flex-col h-fit mx-auto my-4  xl:w-[25%] md:w-[40%] w-[90%] xxs:w-[60%] xxs:space-y-2 xss:space-y-4">
          <div className="xxs:space-y-1 xss:space-y-3 xl:scale-125 pt-5">
          <h1  className="font-dm xxs:text-xl xss:text-3xl">Anandrupa Das</h1>
          <p className="text-right text-xs xss:text-sm font-domine" >Vedic Priest</p>
          </div>
          <img src={line} loading="lazy" alt="line" className="w-[120%] mx-auto"/>
          </div>
          <div className="flex justify-center items-center font-semibold md:text-lg text-[8px] xxs:text-xs md:py-4">
            <Link className="text-white md:mx-4 mx-2 hover:scale-110 transition-all duration-300 hover:text-yellow-100 no-underline" to="/">Home</Link>
            <Link className="text-white md:mx-4 mx-2 hover:scale-110 transition-all duration-300 hover:text-yellow-100 no-underline" to="/about">About Me</Link>
            <Link className="text-white md:mx-4 mx-2 hover:scale-110 transition-all duration-300 hover:text-yellow-100 no-underline" to="/services">My Services</Link>
            <Link className="text-white md:mx-4 mx-2 hover:scale-110 transition-all duration-300 hover:text-yellow-100 no-underline" to="/blog">Blog</Link>
            <Link className="text-white md:mx-4 mx-2 hover:scale-110 transition-all duration-300 hover:text-yellow-100 no-underline" to="/contact">Contact Me</Link>
          </div>
          <div className="flex flex-row md:w-1/4 w-2/3 justify-evenly text-2xl xxs:text-3xl mx-auto my-4">
            <a className='no-underline text-white hover:scale-110 transition-all duration-300' href="https://www.facebook.com/anandrupadas">
              <AiFillFacebook />
            </a>
            <a className='no-underline text-white hover:scale-110 transition-all duration-300' href="https://api.whatsapp.com/send/?phone=%2B447459331504&text&type=phone_number&app_absent=0">
              <AiOutlineWhatsApp />
            </a>
            <a className='no-underline text-white hover:scale-110 transition-all duration-300' href="https://www.instagram.com/anandrupadas?igsh=MTQ5MHh3am56M2R0dA%3D%3D&utm_source=qr">
              <AiOutlineInstagram />
            </a>
          </div>
          <p className="text-[10px] xxs:text-xs xxs:pb-3">
            &copy; Goloka IT {year}. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
