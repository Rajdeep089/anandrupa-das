import React, { useState, useRef } from "react";
import { useParams, Link, Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide, Navigation } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Container, Row, Col } from "react-bootstrap";
import servicesData from "./ServicesData";
import bg from "../../Assets/anand/dBg.png";
import Arrow from "../../Assets/anand/arrow.png";

function ServiceDetail() {
  const { id } = useParams();
  const [activeCardId, setActiveCardId] = useState(null);
  const [swiperIndex, setSwiperIndex] = useState(0); // State to track the swiper index
  const service = servicesData.find(
    (service) => service.id === parseInt(id, 10)
  );
  const swiperRef = useRef(null); // Ref to the Swiper instance

  function ServiceCard({ id, card }) {
    const handleClick = () => {
      setActiveCardId(id);
    };

    return (
      <div className="relative w-[100%] my-2 md:my-3 mx-auto">
        <img src={card} loading="lazy" className=" min-w-full min-h-full" alt="Cards" />
        <Link to={`/services/${id}`}>
          <button onClick={handleClick} className="border-[1px] md:rounded-md rounded-sm xl:px-3 md:px-2 px-1 xl:py-2 md:py-1 text-white absolute z-30 bottom-[5%] hover:scale-110 transition-all duration-300 shadow-md shadow-black left-0 right-0 mx-auto w-[70%] xss:w-1/2 xll:w-1/3 md:text-base text-[8px]">
            Know More
          </button>
        </Link>
      </div>
    );
  }

  if (!service) {
    return (
      <Container className="py-5">
        <Row>
          <Col>
            <h2>Service Not Found</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  const { title, description } = service;

  const handleNext = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className=" bg-bg3 bg-contain bg-center bg-repeat-y pb-5">
      <div>
        <div className="pt-8">
          <h1 className="md:text-5xl xl:text-6xl xxl:text-7xl text-2xl text-center font-dm">{title}</h1>
        </div>
      </div>
      <div className="w-full ">
        <div className="">
          <div className="flex relative justify-center items-center lg:scale-95 lg:text-xl xll:scale-90 xll:text-2xl xl:scale-[0.8] xl:text-3xl xxl:scale-75 xxl:text-4xl lg:leading-normal xl:leading-relaxed xxl:leading-relaxed">
            <img src={bg} loading="lazy" alt="pic" className="h-full" />
            <p className="absolute overflow-y-auto scroll-smooth scroll top-0 bottom-0 left-0 right-0 m-auto  w-[60%] h-[70%]   text-center font-domine text-black">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="xl:ml-24 md:ml-16 ml-6 flex items-center justify-center">
        <Swiper
          ref={swiperRef} // Set ref to the Swiper instance
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          initialSlide={swiperIndex} // Set initial slide index
          navigation={{ prevEl: null, nextEl: null }} // Disable default navigation arrows
        >
          {servicesData
            .filter((service) => service.id !== activeCardId)
            .map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard id={service.id} card={service.card} />
              </SwiperSlide>
            ))}
        </Swiper>
        <button
          className="xl:w-[20%] md:w-[30%] w-[35%] pr-5 hover:scale-95 focus:scale-95"
          onClick={handleNext}
        >
          <img src={Arrow} alt="arrow" />
        </button>
        <div className="mt-4">
          <Routes>
            <Route path="/:id" element={<ServiceDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
