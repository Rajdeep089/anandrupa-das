import React from "react";
import blg1 from "../../Assets/anand/blogC1.png";
import blg2 from "../../Assets/anand/blogC2.png";
import blg3 from "../../Assets/anand/blogC3.png";
import blg4 from "../../Assets/anand/blog4.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section className="bg-bg3 bg-repeat-y bg-contain bg-center h-full pb-5">
      <h1 className="font-dm text-6xl font-normal leading-loose">Blogs</h1>
      <div className="md:grid md:grid-cols-2 gap-10 flex flex-col mx-5 xl:mx-12">
        <div className="relative">
          <div className="h-full w-full bg-gradient-to-r from-[#FFD8AB] to-[#FFE5C7] pb-4">
            <img src={blg1} alt="pic" loading="lazy" />
            <h1 className="text-[20px] xxs:text-[22px] xss:text-[25px] xs:text-[27px] md:text-[25px] xlg:text-[33px] lg:text-[35px] xl:text-[32px] font-bold text-start pl-4 pt-4">
              The significance of vivaha (Marriage) in hindu culture
            </h1>
            <p className="text-[16px] xl:text-[18px] text-start font-semibold pl-4 pb-8">
              Vivaha commonly known as marriage, holds a paramount position
              among the Hindu Samskaras. Revered as the most crucial of all
              ceremonies, it is considered the cornerstone of the gruhastha
              (householder) ashram....
            </p>
          </div>
          <button
            onClick={() => {
              navigate(`/blogdetail/1`);
            }}
            className="absolute md:bottom-3 md:right-3 bottom-2 right-3 border-2 border-black rounded-lg md:px-2 md:py-1 px-1 hover:scale-105 hover:bg-black hover:text-white transition-all duration-300"
          >
            Read More
          </button>
        </div>
        <div className="relative">
          <div className="h-full w-full bg-gradient-to-r from-[#FFD8AB] to-[#FFE5C7] pb-4">
            <img src={blg2} alt="pic" loading="lazy" />
            <h1 className="text-[20px] xxs:text-[22px] xss:text-[25px] xs:text-[27px] md:text-[25px] xlg:text-[33px] lg:text-[35px] xl:text-[32px] font-bold text-start pl-4 pt-4">
              Welcoming new beginnings: Traditional ceremonies in a child's early years
            </h1>
            <p className=" text-[16px] xl:text-[18px] text-start font-semibold pl-4 pb-8">
              In the rich tapestry of Hindu traditions, the jatakarma ceremony
              serves as the welcoming embrace for a newborn into the world. The
              father, in a poignant moment, anoints the baby's tongue with a
              mixture of ghee and honey while whispering the sacred name of God
              into the tiny ears...
            </p>
          </div>
          <button
            onClick={() => {
              navigate(`/blogdetail/2`);
            }}
            className="absolute md:bottom-3 md:right-3 bottom-2 right-3 border-2 border-black rounded-lg md:px-2 md:py-1 px-1 hover:scale-105 hover:bg-black hover:text-white transition-all duration-300"
            >
            Read More
          </button>
        </div>
        <div className="relative">
          <div className="h-full w-full bg-gradient-to-r from-[#FFD8AB] to-[#FFE5C7] pb-4">
            <img src={blg3} alt="pic" loading="lazy" />
            <h1 className="text-[20px] xxs:text-[22px] xss:text-[25px] xs:text-[27px] md:text-[25px] xlg:text-[33px] lg:text-[35px] xl:text-[32px] font-bold text-start pl-4 pt-4">
              Unlocking positive energies: The significance and procedure of
              griha pravesh puja
            </h1>
            <p className="text-[16px] xl:text-[18px]  text-start font-semibold pl-4 pb-10">
              Griha Pravesh Puja, a sacred ritual performed before entering a
              new home, holds the key to dispelling ill effects and doshas,
              ushering in positive energies, peace,and prosperity.....
            </p>
          </div>
          <button
            onClick={() => {
              navigate(`/blogdetail/3`);
            }}
            className="absolute md:bottom-3 md:right-3 bottom-2 right-3 border-2 border-black rounded-lg md:px-2 md:py-1 px-1 hover:scale-105 hover:bg-black hover:text-white transition-all duration-300"
            >
            Read More
          </button>
        </div>
        <div className="relative">
          <div className="h-full w-full bg-gradient-to-r from-[#FFD8AB] to-[#FFE5C7] pb-4">
            <img src={blg4} alt="pic" loading="lazy" />
            <h1 className="text-[20px] xxs:text-[22px] xss:text-[25px] xs:text-[27px] md:text-[25px] xlg:text-[33px] lg:text-[35px] xl:text-[32px] font-bold text-start pl-4 pt-4">
            Unveiling Puja: Exploring Significance and Depths of Puja and Yajña
            </h1>
            <p className="text-[16px] xl:text-[18px]  text-start font-semibold pl-4 pb-10">
            Puja, an ancient practice unveiled by revered sages and upheld for millennia without alteration, stands as a profound amalgamation of science and art—a sacred endeavour devoted to invoking and venerating the divine essence with boundless love and reverence.
            </p>
          </div>
          <button
            onClick={() => {
              navigate(`/blogdetail/4`);
            }}
            className="absolute md:bottom-3 md:right-3 bottom-2 right-3 border-2 border-black rounded-lg md:px-2 md:py-1 px-1 hover:scale-105 hover:bg-black hover:text-white transition-all duration-300"
            >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
