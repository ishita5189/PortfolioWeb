import React from 'react'
import photo from "../../public/photo.jpg";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";

import { TbBrandCpp } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12 bg-white dark:bg-gray-900 dark:text-white"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
            <span className="text-xl font-semibold">Welcome To My Portfolio</span>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2 text-2xl md:text-4xl">
              <h1 className="whitespace-nowrap">Hello, I am a</h1>
              <ReactTyped
                className="text-blue-700 font-bold italic dark:text-blue-500"
                strings={["Student", "Programmer", "Learner"]}
                typeSpeed={40}
                backSpeed={55}
                loop={true}
              />
            </div>
            <p className="text-sm md:text-md text-justify">
              Currently a fourth-year Information Technology student.
            </p>
            <p className="text-sm md:text-md text-justify">
              I am a learner, practicing programming questions in C++, Java, MySQL and website development using technologies like HTML, CSS, JS, and React, and leveraging relevant tools such as artificial intelligence.
            </p>
            <p className="text-sm md:text-md text-justify">
              Beyond academics, I have a profound passion for photography, love immersing myself in books, and enjoy connecting with nature. I am consistently seeking opportunities to enhance my skill set to discover practical solutions while implementing effective management strategies and staying composed.
            </p>
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center text-blue-800 hover:underline dark:text-blue-500">Find me on</h1>
                <ul className="flex flex-wrap justify-center space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/ishitasharma918/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-105 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/u/ishita918/" target="_blank" rel="noopener noreferrer">
                      <SiLeetcode className="text-2xl cursor-pointer hover:scale-105 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/i.cshotzz/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-2xl cursor-pointer hover:scale-105 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:ishita05sharma43@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
                      <CgMail className="text-2xl cursor-pointer hover:scale-105 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center text-blue-800 hover:underline dark:text-blue-500">Currently working on</h1>
                <div className="flex flex-wrap justify-center space-x-5">
                  <TbBrandCpp className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <TbSql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end order-1">
            <img
              src={photo}
              className="rounded-full w-32 h-32 md:w-[350px] md:h-[350px] ring-4 ring-blue-800 ring-offset-4 shadow-2xl dark:shadow-blue-800 hover:scale-105 duration-200 cursor-pointer"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <a 
          href="/ISHITA_SHARMA_RESUME__.pdf" 
          className="text-blue-800 dark:text-blue-600 text-xl md:text-2xl hover:text-blue-700 dark:hover:text-blue-400" 
          download
        >
          Download Resume ⬇️
        </a>
      </div>
    </>
  )
}

export default Home;
