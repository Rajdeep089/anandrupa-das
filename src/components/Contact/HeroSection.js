import contact from "../../Assets/anand/contact.png";
const HeroSection = () => {
  return (
    <div className="flex items-center justify-evenly w-full bg-bg3 bg-no-repeat bg-cover bg-center pb-8 xl:pb-16">
      <div className="flex items-center mx-auto w-[90%]">
        <div className="w-[60%] md:w-[45%]">
          <img src={contact} alt="pic" className="h-full" />
        </div>
        <div className="mx-auto">
          <div className="w-full">
            <h1 className="text-3xl md:text-[73px] xl:text-[95px] lg:text-[95px] text-center text-black pt-3 font-dm">
              Contact Me
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
