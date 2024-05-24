import servicesImg1 from "../../Assets/anand/services1.png";
import React, { useState, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ServiceDetail from "./ServicesDetail";
import servicesData from "./ServicesData";
import Contact from "../Home/Contact/Contact";
// import { Swiper, SwiperSlide, Navigation } from "swiper/react";
// import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/swiper-bundle.css';
// import Arrow from "../../Assets/anand/arrow.png";

function ServiceCard({ id, card }) {
  return (
    
    <div className="relative w-[90%] my-2 md:my-3 mx-auto">
      <img src={card} loading="lazy" className=" min-w-full min-h-full" alt="Cards" />
      <Link to={`/services/${id}`}>
        <button className="border-[1px] md:rounded-md rounded-sm xl:px-3 md:px-2 px-1 xl:py-2 md:py-1 text-white absolute z-30 bottom-[5%] hover:scale-110 transition-all duration-300 shadow-md shadow-black left-0 right-0 mx-auto w-[70%] xss:w-1/2 xll:w-1/3 md:text-base text-[8px]">
          Know More
        </button>
      </Link>
    </div>
    
  );
}

function ServicesPage() {
  const swiperRef = useRef(null); // Ref to the Swiper instance
  // const [swiperIndex, setSwiperIndex] = useState(0); // State to track the swiper index

  // const handleNext = () => {
  //   if (swiperRef.current !== null) {
  //     swiperRef.current.swiper.slideNext();
  //   }
  // };

  return (
    <div>
       {/* <div className="flex items-center justify-evenly w-full bg-bg3 bg-no-repeat bg-cover bg-center py-8 xl:py-16">
      <div className="flex items-center mx-auto w-[90%]">
        <div className="w-[60%] md:w-[45%]">
          <img src={servicesImg1} alt="pic" className="h-full  rounded-2xl" />
        </div>
        <div className="mx-auto">
          <div className="w-full">
            <h1 className="text-3xl md:text-[73px] xl:text-[95px] lg:text-[95px] text-center text-black pt-3 font-dm">
              Services
            </h1>
          </div>
        </div>
      </div>
    </div> */}
      <div className="bg-bg3 bg-contain bg-center bg-repeat-y">
        <h1 className="md:py-8 py-7 text-center md:text-6xl text-4xl font-dm">
          Services
        </h1>
        <div className="mx-auto w-[90%]">
          <div className="grid grid-cols-3 ">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                card={service.card}
              />
            ))}
          </div>
          {/* <button
    className="xl:w-[20%] md:w-[30%] w-[35%] pr-5 hover:scale-95 focus:scale-95"
    onClick={handleNext}
  >
    <img src={Arrow} alt="arrow" />
  </button> */}
          <div className="mt-4">
            <Routes>
              <Route path="/:id" element={<ServiceDetail />} />
            </Routes>
          </div>
        </div>

        {/* form part */}

        <Contact />
      </div>
    </div>
  );
}

export default ServicesPage;
