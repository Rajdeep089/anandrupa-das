import React from "react";
import { useNavigate } from 'react-router-dom';
// import { Container, Row, Col, Button } from "react-bootstrap";
import Testimonial from './Testimonials/Testimonials'
// import "./Home.css"
import CardSlider from "./Cardslider/CardSlider";
import Contact from "./Contact/Contact";

import homeLogo from "../../Assets/anand/home1.png";
import weddingImg from "../../Assets/anand/wedding.png";
import quoteImg from "../../Assets/anand/prabhupadji.png"

function Home() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate('/about');
  }

  let navigate2 = useNavigate(); 
  const routeChange2 = () =>{ 
    let path = `newPath`; 
    navigate('/blogdetail/1');
  }

  return (
    <section className="pt-4 sm:pt-6 xl:pt-8 mx-auto">
      {/* <div  className="flex justify-start items-center my-auto bg-bg2 bg-center bg-cover bg-no-repeat h-[32vh] xxs:h-[37vh] apple:h-[26vh] xss:h-[27vh] xl:h-[140vh] md:h-[50vh] " id="home">
        <div className=" text-left h-[100%] w-full">
          <div className="flex flex-row justify-end relative xl:mt-4 xl:w-[98%] w-[97%]">
            <div className="left-0 absolute xl:w-[95%] md:w-[90%] xxs:w-[90%]  mt-3 ">
              <img
                src={homeLogo}
                alt="home pic"
                className="h-full w-full"
              />
            </div>
            <div className=" xl:w-[50%] md:w-[70%]  w-[55%] absolute flex flex-col xxs:items-center justify-evenly items-end md:mt-0 xl:mt-10 md:mr-0 sm:mr-5 xxs:mr-4 xxs:scale-110 sm:scale-90 ">
              <h1 className=" text-right xxs:text-center xl:text-5xl md:text-3xl text-xs xss:text-sm flex flex-col font-dm">
              Step into the world of 
              <span className="xl:text-6xl md:text-5xl text-sm xss:text-base">Sacred <span className="text-[#165A11] "> Vedic Tradition </span></span>
              </h1>
              <p className="xxs:text-center text-right text-[5px] xxs:text-[7px] xss:text-[8px] xl:text-2xl md:text-sm lg:text-2xl md:mx-8 font-domine xl:leading-normal">
              Anand Rupa Das, a devoted priest and scholar. With over 6 years of training from renowned institutions like ISKCON Sri Dham Mayapur Academy, he specializes in personalized fire sacrifices and officiating various ceremonies, from weddings to Shanti paths. Experience spiritual enrichment guided by his profound expertise and heartfelt dedication.
              </p>
             
                <button onClick={routeChange} className=" md:px-3 md:py-2 transition-all duration-300 hover:scale-105 text-[8px] md:text-sm lg:text-xl px-1 md:rounded-md rounded-sm hover:bg-black hover:text-white border-[1px] border-[#000000] font-domine">Read More</button>
              
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative bg-bg2 bg-center bg-cover bg-no-repeat xlg:pb-10 xl:pb-24">
        <div>
          <img src={homeLogo} loading="lazy" height={"100%"} width={"100%"} alt="home pic"/>
        </div>
        <div className="flex flex-col justify-center xxs:items-center items-end absolute top-0 right-0 w-2/3 px-2 xxs:gap-y-1 xs:pt-3 sm:pt-4 md:pt-3 xlg:pt-5 lg:pt-7 xll:pt-10 xxl:pt-12" >
        <h1 className=" text-right xxs:text-center xl:text-5xl md:text-3xl sm:text-xl xs:text-base text-xs xss:text-sm flex flex-col font-dm">
              Step into the world of 
              <span className="xl:text-6xl xxl:text-7xl md:text-5xl sm:text-3xl xs:text-2xl text-sm xss:text-lg">Sacred <span className="text-[#165A11] "> Vedic Tradition </span></span>
              </h1>
          <p className="xxs:text-center text-right text-[5px] xxs:text-[6px] xss:text-[8px] xs:text-[9px] xl:text-2xl xxl:text-3xl sm:text-sm lg:text-xl xll:2xl md:mx-8 font-domine xs:leading-normal md:leading-normal xlg:leading-loose lg:leading-normal xll:leading-loose xl:leading-relaxed xxl:leading-relaxed">Anand Rupa Das, a devoted priest and scholar. With over 6 years of training from renowned institutions like ISKCON Sri Dham Mayapur Academy, he specializes in personalized fire sacrifices and officiating various ceremonies, from weddings to Shanti paths. Experience spiritual enrichment guided by his profound expertise and heartfelt dedication.</p>
          <button onClick={routeChange} className=" md:px-3 md:py-2 transition-all duration-300 hover:scale-105 text-[8px] md:text-sm xlg:text-base lg:text-xl px-1 md:rounded-md rounded-sm hover:bg-black hover:text-white border-[1px] border-[#000000] font-domine">Read More</button>
        </div>
      </div>
      <br/>
      <br/>
      
        <div className="flex flex-col justify-center items-center bg-bg2 bg-center md:bg-cover bg-contain bg-no-repeat xlg:pb-12 xl:pb-20">
          
          <div className="flex flex-col md:flex-row container justify-between md:pt-5 md:px-5 pt-4 items-center w-full md:gap-x-8">
            <h1 className="md:hidden flex text-xl font-dm pb-3 ">Wedding Ceremony</h1>
            <div className="md:w-[50%] w-[60%] xxl:w-[45%] mb-2 md:mb-0 h-full">
              <img src={weddingImg} loading="lazy" className="w-full h-full" alt="avatar" />
            </div>
            <div className="md:w-[50%] md:h-[95%] w-full h-full flex flex-col justify-between md:gap-y-10 xlg:gap-y-12 lg:gap-y-16 xll:gap-y-12 xl:gap-y-6 xxl:gap-y-16">
            <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-lg md:block hidden font-dm mx-auto ">
            Wedding Ceremony
            </h1>
            <div className="flex flex-col xlg:gap-y-3 lg:gap-y-4 ">
              <h4 className="text-justify text-[10px] xss:text-xs md:text-base lg:text-xl xll:text-2xl xxl:text-3xl  md:font-medium xl:leading-loose xxl:leading-relaxed xll:leading-relaxed lg:leading-relaxed xlg:leading-loose leading-none font-domine px-3 xxs:px-0">
                In Hindu tradition, marriage is revered as a pivotal stage within the four phases of life. Beyond being the union of two individual souls, it stands as a sacred bond intertwining two families. The essence of a Hindu wedding ceremony lies in the holistic unification of two souls—spiritually, mentally, and physically. The matrimonial bond is regarded with sanctity, and the marriage ceremony is conducted in accordance with Vedic traditions, rooted in the ancient scriptures of Hinduism known as the Vedas.
              </h4>
              <div className="text-[8px] xss:text-[10px] md:text-sm xxl:text-lg">
              <button onClick={routeChange2} className=" md:px-3 md:py-2  transition-all duration-300 hover:scale-105  px-1 md:rounded-md rounded-sm hover:bg-black hover:text-white border-[1px] border-black font-domine ">Read More</button>
              </div>
              </div>
            </div>
          </div>
          </div>
          <br/>
      <br/>
          <div className=" bg-bg2 bg-contain  bg-center bg-no-repeat  py-5 md:py-10 ">
        <div className="flex flex-col justify-center items-center xl:pb-10 md:pb-20 pb-4 px-2">
          <div className="flex flex-row justify-between items-center container">
            <div className="w-[50%] md:w-[50%] ">
              <img src={quoteImg} loading="lazy" alt="avatar" />
            </div> 
            <div className="w-[65%] md:w-[70%]">
              <h4 className="text-[10px] xss:text-xs xl:text-4xl md:text-2xl xl:leading-normal px-2 font-dm">
                “Saṁskāra means educational process, to elevate one. Just like we send to school, college, for elevating a child to the higher standard of life, knowledge, similarly, these saṁskāras also like that.”
                <br/>
                <br/>
              — A. C. Bhaktivedanta Swami Prabhupada
              </h4>
            </div>
          </div>
        </div>
        <br/>
        <h1 className="xl:py-16 md:py-6 xxs:py-3 text-center xl:text-5xl lg:text-4xl md:text-3xl text-lg font-dm">What We Do</h1>
        <CardSlider />
      </div>
      <Testimonial />
      <br/>
      <br/>
      <Contact />
    </section>
  );
}

export default Home;
