import aboutImg1 from "../../Assets/anand/abhero.png";
const HeroSection = () => {
  return (
    <div className="flex items-center justify-evenly bg-bg2 bg-no-repeat bg-cover bg-center pb-5 pt-4 sm:pt-6 xl:pt-8">
      <div className="flex items-center mx-auto w-[80%]">
        <div className="mx-auto items-start">
          <div className="w-full">
            <h1 className="text-3xl md:text-[87px] lg:text-[95px] text-center text-black pt-3 font-dm">
              About Me
            </h1>
          </div>
        </div>
        <div className="w-[40%] ">
          <img src={aboutImg1} loading="lazy" alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
