import React from "react";

import pic from "../../src/assets/hero.jpg";
import cv from "../../src/assets/CV.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-3xl">I'm Bharat Soni </span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>I'm a </h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[" Developer", " Frontend", " Backend"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-lg md:text-md text-justify">
            I'm a full-stack developer with 3 years of experience using React and SpringBoot. Reach out if you'd like to learn more!
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Connect with me</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/bharat-soni-2a0b54177/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/i98bharat" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <a href={cv} download>
              <button type="button" class="text-gray-900 bg-gradient-to-r 
              from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl 
              focus:ring-4 focus:outline-none focus:ring-red-100 
              dark:focus:ring-red-400 font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center me-2 mb-2">
                Resume Here</button></a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 ml-10 order-1">
          <figure class="relative max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img class="rounded-full w-98 h-98" src={pic} alt="image description" />
            </a>
          </figure>
            
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
