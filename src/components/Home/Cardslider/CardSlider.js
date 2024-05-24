import React, { useState , useEffect, useRef} from "react";
import { Swiper, SwiperSlide, Navigation } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import Arrow from "../../../Assets/anand/arrow.png";

import { useParams, Link, Route, Routes, useNavigate } from "react-router-dom";

import servicesData from "../../Services/ServicesData";


function ServiceDetail() {

  const { id } = useParams();
  const service = servicesData.find((service) => service.id === parseInt(id, 10));

  function ServiceCard({ id, card }) {
    return (
      <div className="relative w-[100%] my-2 md:my-3 mx-auto">
        <img src={card} loading="lazy" className=" min-w-full min-h-full" alt="Cards" />
        <Link to={`/services/${id}`}>
          <button className="border-[1px] md:rounded-md rounded-sm xl:px-3 md:px-2 px-1 xl:py-2 md:py-1 text-white absolute z-30 bottom-[5%] hover:scale-110 transition-all duration-300 shadow-md shadow-black left-0 right-0 mx-auto w-[50%]  xll:w-1/3 md:text-base text-[8px]">
            Know More
          </button>
        </Link>
      </div>
    );
  }

  const swiperRef = useRef(null); // Ref to the Swiper instance
  const [swiperIndex, setSwiperIndex] = useState(0); // State to track the swiper index
  const [autoplayInterval, setAutoplayInterval] = useState(null);

//   const handleNext = () => {
//     if (swiperRef.current !== null) {
//         swiperRef.current.swiper.slideNext();
//     }
// };

let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate('/services');
  }

  useEffect(() => {
    // Start autoplay when component mounts
    const intervalId = setInterval(() => {
      if (swiperRef.current !== null) {
        swiperRef.current.swiper.slideNext();
      }
    }, 2500); // Adjust autoplay interval here (in milliseconds)

    setAutoplayInterval(intervalId);

    // Stop autoplay when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const slidesPerView = window.innerWidth >= 786 ? 3 : 2;


  return (
    <div className="md:ml-16 ml-10 flex items-center justify-center ">
        <Swiper
                    ref={swiperRef} // Set ref to the Swiper instance
                    spaceBetween={30}
                    slidesPerView={slidesPerView}
                    autoplay={{ delay: 1500 }}
                    loop={true}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    initialSlide={swiperIndex} // Set initial slide index
                    navigation={{ prevEl: null, nextEl: null }} // Disable default navigation arrows
                >
          {servicesData.map((service) => (
           <SwiperSlide key={service.id}>
           <ServiceCard id={service.id} card={service.card} />
         </SwiperSlide>
          ))}
        </Swiper>
        <button className="xl:w-[20%] md:w-[30%] w-[35%] pr-5 hover:scale-95 focus:scale-95" onClick={routeChange}>
                    <img src={Arrow} alt="arrow"/>
                </button>
        <div className="">
          <Routes>
            <Route path="/:id" element={<ServiceDetail />} />
          </Routes>
        </div>
        </div>
  );
};

export default ServiceDetail;