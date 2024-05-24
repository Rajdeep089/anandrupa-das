import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/anand/logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function onToggleMenu() {
    setMenuOpen(!menuOpen);
    console.log("Menu open:", !menuOpen);
  }

  return (
    <header className="bg-[#fcefdf] font-domine w-full fixed top-0 left-0 z-50">
      <nav className="flex relative justify-between items-center w-[100%] mx-auto min-h-[100px]">
        <Link className=" md:hidden mx-auto" to="/">
          <img src={Logo} loading="lazy" alt="Logo" className="w-48"/>
        </Link>
        <div
          className={`nav-links duration-500 md:static absolute z-40 md:min-h-fit min-h-[100vh] ${
            menuOpen ? "top-[0%]" : "top-[-100000%]"
          }  w-full py-7 flex flex-col items-center justify-evenly md:justify-around bg-navBg2 md:bg-none bg-contain bg-center bg-repeat-y`}
        >
          {/* <Link className="w-1/2 mx-auto md:hidden  mb-5" to="/">
          <img src={Logo} alt="Logo" className="h-fit" />
        </Link> */}
        <div className="flex absolute right-10 top-10 cursor-pointer z-50 items-center scale-150 gap-6 md:hidden">
          <ion-icon
            onClick={onToggleMenu}
            name={menuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer"
          ></ion-icon>
        </div>
          <ul className="flex md:flex-row flex-col md:justify-evenly justify-between md:items-center md:gap-[1vw] gap-2 bg-navBg md:bg-none bg-contain bg-center bg-no-repeat w-[85%] md:w-[100%] xl:px-3 md:px-0 px-3 md:my-auto py-10 md:py-0 ">
            
            <li className="max-lg:py-2 px-3 max-lg:rounded">
            <Link className=" md:flex hidden w-48 xlg:w-52 mx-auto" to="/">
          <img src={Logo} loading="lazy" alt="Logo" className="w-full"/>
        </Link>
            </li>
            <li className="max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to="/"
                className="py-2 lg:py-0 text-black mx-auto no-underline font-semibold hover:font-bold  transition-all duration-300 transform hover:scale-105 relative xl:text-[22px] xxl:text-3xl md:text-base lg:text-lg text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className=" max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to="/about"
                className="py-2 lg:py-0 text-black mx-auto no-underline font-semibold hover:font-bold  transition-all duration-300 transform hover:scale-105 relative xl:text-[22px] xxl:text-3xl md:text-base lg:text-lg text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                onClick={() => setMenuOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li className=" max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to="/services"
                className="py-2 lg:py-0 text-black mx-auto no-underline font-semibold hover:font-bold  transition-all duration-300 transform hover:scale-105 relative xl:text-[22px] xxl:text-3xl md:text-base lg:text-lg text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                onClick={() => setMenuOpen(false)}
              >
                My Services
              </Link>
            </li>
            <li className=" max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to="/blog"
                className="py-2 lg:py-0 text-black mx-auto no-underline font-semibold hover:font-bold  transition-all duration-300 transform hover:scale-105 relative xl:text-[22px] xxl:text-3xl md:text-base lg:text-lg text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li className=" max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to="/contact"
                className="py-2 lg:py-0 text-black mx-auto no-underline font-semibold hover:font-bold  transition-all duration-300 transform hover:scale-105 relative xl:text-[22px] xxl:text-3xl md:text-base lg:text-lg text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                onClick={() => setMenuOpen(false)}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex absolute right-5 scale-125 cursor-pointer items-center gap-6 md:hidden">
          <ion-icon
            onClick={onToggleMenu}
            name={menuOpen ? "close" : "menu"}
            className=""
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
