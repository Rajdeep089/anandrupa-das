import React, { useState, useEffect } from "react";
import Logo from "../../Assets/anand/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [expand, setExpand] = useState(false);

  useEffect(() => {
    const toggleBtn = document.getElementById("toggle");
    const collapseMenu = document.getElementById("collapseMenu");
    const menu = document.getElementById("menu");

    const handleClick = () => {
      if (collapseMenu.style.display === "block") {
        collapseMenu.style.transform = "translateY(-100%)";
        setTimeout(() => {
          collapseMenu.style.display = "none";
        }, 500); // Duration of your transition
        // menu.style.transform = "translateY(-100%)";
        // setTimeout(() => {
        //   menu.style.display = "block";
        // }, 300); // Duration of your transition
        menu.style.backgroundSize = "cover";
        menu.style.animationDuration = "0.3s";
      } else {
        collapseMenu.style.display = "block";
        setTimeout(() => {
          collapseMenu.style.transform = "translateY(-25%)";
        }, 50); // A slight delay to ensure display property is applied before transition starts
        // menu.style.display = "block";
        // setTimeout(() => {
        //  menu.style.transform = "translateY(0)";
        // }, 50);
        menu.style.backgroundSize = "contain";
      }
    };

    toggleBtn.addEventListener("click", handleClick);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      toggleBtn.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <header className="font-domine">
      <div
        id="menu"
        className="flex flex-row flex-wrap items-center justify-between lg:gap-5 gap-20 px-10 py-4 relative min-h-[70px] bg-bg3 bg-center bg-cover bg-repeat-y backdrop-filter bg-opacity-50 z-50 w-full transition-all duration-300 transform -translate-y-[0%] lg:translate-y-0"
      >
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-48" />
        </Link>
        <div className="flex max-lg:ml-auto lg:order-1">
          <button id="toggle" className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          id="collapseMenu"
          className="lg:!flex items-center lg:space-x-4 max-lg:space-y-2 max-lg:hidden relative top-[50px] mx-auto mt-[0px] max-lg:py-4 max-lg:w-full bg-navBg lg:bg-none bg-contain bg-center bg-no-repeat transition-transform duration-500 transform -translate-y-full lg:translate-y-0"
        >
          <li className="max-lg:py-2 px-3 max-lg:rounded">
            <Link
              to="/"
              className="py-2 lg:py-0 text-red-500 mx-auto no-underline font-semibold hover:font-bold hover:text-red-700 transition-all duration-300 transform hover:scale-105 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              // onClick={() => updateExpanded(false)}
            >
              Home
            </Link>
          </li>
          <li className=" max-lg:py-2 px-3 max-lg:rounded">
            <Link
              to="/about"
              className="py-2 lg:py-0 text-red-500 mx-auto no-underline font-semibold hover:font-bold hover:text-red-700 transition-all duration-300 transform hover:scale-105 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              // onClick={() => updateExpanded(false)}
            >
              About
            </Link>
          </li>
          <li className=" max-lg:py-2 px-3 max-lg:rounded">
            <Link
              to="/services"
              className="py-2 lg:py-0 text-red-500 mx-auto no-underline font-semibold hover:font-bold hover:text-red-700 transition-all duration-300 transform hover:scale-105 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              // onClick={() => updateExpanded(false)}
            >
              Services
            </Link>
          </li>
          <li className=" max-lg:py-2 px-3 max-lg:rounded">
            <Link
              to="/blog"
              className="py-2 lg:py-0 text-red-500 mx-auto no-underline font-semibold hover:font-bold hover:text-red-700 transition-all duration-300 transform hover:scale-105 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              // onClick={() => updateExpanded(false)}
            >
              Blogs
            </Link>
          </li>
          <li className=" max-lg:py-2 px-3 max-lg:rounded">
            <Link
              to="/contact"
              className="py-2 lg:py-0 text-red-500 mx-auto no-underline font-semibold hover:font-bold hover:text-red-700 transition-all duration-300 transform hover:scale-105 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              // onClick={() => updateExpanded(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
