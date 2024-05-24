import HeroSection from "../About/HeroSection";
import Detail from "./Detail";
import T1 from "../../Assets/anand/t1.png";
import T2 from "../../Assets/anand/t2.png";
import T3 from "../../Assets/anand/t3.png";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
const About = () => {
  const swiperRef = useRef(null); // Ref to the Swiper instance
  const [swiperIndex, setSwiperIndex] = useState(0); // State to track the swiper index
  const [autoplayInterval, setAutoplayInterval] = useState(null);
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
    <main>
      <section>
        <HeroSection />
        <Detail />
        <div className="flex flex-col justify-evenly items-center bg-bg3 md:bg-cover bg-contain bg-no-repeat bg-center pb-10">
          <h1 className="text-[16px] xxs:text-[18px] xss:text-[20px] xs:text-[24px] md:text-4xl lg:text-[40px] xl:text-6xl my-8 xl:my-16 font-dm ">
          Client Testimonials
          </h1>
          <div className="hidden md:flex flex-row justify-center items-center w-full xl:gap-x-20 md:gap-x-8 gap-x-2">
            <img src={T1} loading="lazy" alt="t1" className="w-[25%]" />
            <img src={T2} loading="lazy" alt="t2" className="w-[25%]" />
            <img src={T3} loading="lazy" alt="t3" className="w-[25%]" />
          </div>

          <div className="md:hidden flex flex-row  items-center justify-center w-[50%]">
            <Swiper
              ref={swiperRef} // Set ref to the Swiper instance
              // spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="mr-0"
              initialSlide={swiperIndex} // Set initial slide index
              navigation={{ prevEl: null, nextEl: null }} // Disable default navigation arrows
            >
              <SwiperSlide className="w-[100%] h-full">
                <img src={T1} alt="t1" className="w-[100%] h-full" />
              </SwiperSlide>
              <SwiperSlide className="w-[100%] h-full">
                <img src={T2} alt="t2" className="w-[100%] h-full" />
              </SwiperSlide>
              <SwiperSlide className="w-[100%] h-full">
                <img src={T3} alt="t3" className="w-[100%] h-full" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
