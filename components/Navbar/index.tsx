import React from "react";

const Navbar = () => {
  return (
    // <div className=" flex items-center justify-between top-0 right-0 left-0 ">
    //   <div className="p-5 ml-7">
    //     <span>Shriya Gautam</span>
    //   </div>

    //   <div className="flex items-center justify-between mx-auto gap-3">
    //     <span>Services</span>
    //     <span>Projects</span>
    //     <span>About Me</span>
    //     <span>Contact </span>
    //   </div>
    // </div>
    <nav className=" navbar w-full z-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a className="heading-4 font-semibold text-white" href="#main">
            Shriya Gautam
          </a>
          <button className="text-white focus:outline-none lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* <div className="dropdown">
            <ul>
              <li>
                <a className="text-white  body-1" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-white  body-1" href="#services">
                  Project
                </a>
              </li>
              <li>
                <a className="text-white body-1" href="#services">
                  About Me
                </a>
              </li>
              <li>
                <a className="text-white body-1" href="#services">
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <ul className="lg:flex justify-center items-center space-x-8">
              <li>
                <a className="text-white  body-1" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-white  body-1" href="#services">
                  Project
                </a>
              </li>
              <li>
                <a className="text-white body-1" href="#services">
                  About Me
                </a>
              </li>
              <li>
                <a className="text-white body-1" href="#services">
                  Contact
                </a>
              </li>
              <li className=" hover:scale-110 ">
                <a
                  className="text-white   body-1 ml-40"
                  href="mailto:gautamshriya5@gmail.com"
                >
                  Work Request &gt;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
