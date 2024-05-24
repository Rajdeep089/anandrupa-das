// import React from "react";
import T1 from "../../../Assets/anand/t1.png";
import T2 from "../../../Assets/anand/t2.png";
import T3 from "../../../Assets/anand/t3.png";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import { FaQuoteLeft } from "react-icons/fa";

// import image1 from "../../../Assets/anand/jainamgala.png";
// import image2 from "../../../Assets/anand/omkar.png";
// import image3 from "../../../Assets/anand/harini.png";
// import Q from "../../../Assets/anand/q.png";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/navigation';
import "swiper/swiper-bundle.css";
// import { useParams, Link, Route, Routes, useNavigate } from "react-router-dom";

export default function App() {
  const swiperRef = useRef(null); // Ref to the Swiper instance
  const [swiperIndex, setSwiperIndex] = useState(0); // State to track the swiper index
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  const handleNext = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    // Start autoplay when component mounts
    const intervalId = setInterval(() => {
      if (swiperRef.current !== null) {
        swiperRef.current.swiper.slideNext();
      }
    }, 3000); // Adjust autoplay interval here (in milliseconds)

    setAutoplayInterval(intervalId);

    // Stop autoplay when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col justify-between items-center bg-bg3 md:bg-cover bg-contain bg-no-repeat bg-center">
      <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-lg font-dm pt-8 apple:pt-20 pb-3 xl:pb-12 xxs:pb- xss:pb-5">
        Client Testimonials
      </h1>
      <div className="hidden md:flex flex-row justify-center items-center w-full xl:gap-x-20 md:gap-x-8 ">
        {/* T1 */}
        {/* <div className="flex flex-col justify-center items-center md:pl-5 bg-bg-t bg-cover bg-no-repeat bg-center xl:py-28 xl:w-[25%] md:w-[30%] md:py-4 w-[30%] py-4 h-full relative">
          <img src={image1} alt="m1" className="rounded-full xl:w-24 md:w-20 w-10 my-5 absolute md:-top-28 -top-16"/>
          <div className="text-center pt-2">
            <h4 className="font-semibold md:text-lg text-sm">Jainam Gala</h4>
            <p className="md:text-base text-xs ">Project Manager</p>
          </div>
          <img src={Q} alt="q" className="md:w-12 w-6 my-2"/>
          <h4 className="text-center xl:w-72 md:w-56 w-24 xl:text-xl md:text-base text-xs/3 ">I have been on a personal journey of spiritual exploration, and the guidance and teachings of our priest have been a guiding light. His services extend beyond rituals; they encompass a profound understanding of the human spirit.</h4>
        </div> */}
        {/* T2 */}
        {/* <div className="flex flex-col justify-center items-center md:pl-5 bg-bg-t bg-cover bg-no-repeat bg-center xl:py-20  xl:w-[23%] md:w-[30%] md:py-5 w-[30%] py-4 xl:h-full relative">
          <img src={image1} alt="m1" className="rounded-full xl:w-24 md:w-20 w-10 my-5 absolute md:-top-28 -top-16"/>
          <div className="text-center pt-2 ">
            <h4 className="font-semibold md:text-lg text-sm">Jainam Gala</h4>
            <p className="md:text-base text-xs ">Project Manager</p>
          </div>
          <img src={Q} alt="q" className="md:w-12 w-6 my-2"/>
          <h4 className="text-center xl:w-72 md:w-56 w-24 xl:text-xl md:text-base text-xs/3">I have been on a personal journey of spiritual exploration, and the guidance and teachings of our priest have been a guiding light. His services extend beyond rituals; they encompass a profound understanding of the human spirit.</h4>
        </div> */}
        {/* T3 */}
        {/* <div className="flex flex-col justify-center items-center md:pl-5 bg-bg-t bg-cover bg-no-repeat bg-center xl:py-20  xl:w-[23%] md:w-[30%] md:py-5 w-[30%] py-4 xl:h-full relative">
          <img src={image1} alt="m1" className="rounded-full xl:w-24 md:w-20 w-10 my-5 absolute md:-top-28 -top-16"/>
          <div className="text-center pt-2">
            <h4 className="font-semibold md:text-lg text-sm">Jainam Gala</h4>
            <p className="md:text-base text-xs ">Project Manager</p>
          </div>
          <img src={Q} alt="q" className="md:w-12 w-6 my-2"/>
          <h4 className="text-center xl:w-72 md:w-56 w-24 xl:text-xl md:text-base text-xs/3">I have been on a personal journey of spiritual exploration, and the guidance and teachings of our priest have been a guiding light. His services extend beyond rituals; they encompass a profound understanding of the human spirit.</h4>
        </div> */}

        {/* img Testimonials */}
        <img src={T1} loading="lazy" alt="t1" className="w-[25%]" />
        <img src={T2} loading="lazy" alt="t2" className="w-[25%]" />
        <img src={T3} loading="lazy" alt="t3" className="w-[25%]" />
      </div>

      <div className="md:hidden flex flex-row  items-center justify-center w-[50%] xxs:pt-3">
        <Swiper
          ref={swiperRef} // Set ref to the Swiper instance
          // spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mr-0"
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          initialSlide={swiperIndex} // Set initial slide index
          navigation={{ prevEl: null, nextEl: null }} // Disable default navigation arrows
        >
          <SwiperSlide className="w-[100%] h-full">
            <img src={T1} loading="lazy" alt="t1" className="w-[100%] h-full" />
          </SwiperSlide>
          <SwiperSlide className="w-[100%] h-full">
            <img src={T2} loading="lazy" alt="t2" className="w-[100%] h-full" />
          </SwiperSlide>
          <SwiperSlide className="w-[100%] h-full">
            <img src={T3} loading="lazy" alt="t3" className="w-[100%] h-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
