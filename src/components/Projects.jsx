import React from "react";
import proj1 from "../../public/proj1.png";
import proj2 from "../../public/proj2.png";
import proj5 from "../../public/proj5.png";
import wtp from "../../public/wtp.png";
import proj3 from "../../public/proj3.png";
import proj4 from "../../public/proj4.png";
function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: proj1,
      name: "Synergy Services",
      descr: "Helped enhance customer engagement, resulting in a 15% increase. This involved implementing filtering products, facilitating customer contact, and integrating APIs",
      ts: "Tech Stack: HTML | CSS | JS",
     vid: "https://drive.google.com/file/d/1z-gLpU_PT764GmUUwSrP3lbdQBIM1RPN/view?usp=sharing" ,
      link:"https://synergyservice.netlify.app/" ,
      cde: "https://github.com/ishita5189/SynergyService",
    },
    {
      id: 2,
      logo: proj2,
      name: "Portfolio",
      descr: "A showcase of my skills, built using React and styled with Tailwind CSS. It has features like dark mode option and contact form.",
      ts: "Tech Stack: React | Tailwind CSS",
      vid: "https://drive.google.com/file/d/1z-gLpU_PT764GmUUwSrP3lbdQBIM1RPN/view?usp=sharing" ,
      link:"https://portfoliowebsiteishita.netlify.app/" ,
      cde: "https://github.com/ishita5189/PortfolioWebsite",
    },
    {
      id: 3,
      logo: wtp,
    name: "WordToPDF",
    descr: "Converts a docx file to pdf with functionalities like File History and Toggle Dark Mode.",
    ts: "Tech Stack: React | Tailwind CSS | NodeJS",
    vid: "https://drive.google.com/file/d/1z-gLpU_PT764GmUUwSrP3lbdQBIM1RPN/view?usp=sharing" ,
    link:"https://synergyservice.netlify.app/" ,
    cde: "https://github.com/ishita5189/SynergyService",
     
    },
    {id: 4,
    logo: proj4,
    name: "TO-Do List",
    descr: "Local storage-based To-Do app offers secure management. It stores data within the browser for persistent access even offline. Fast-loading and user-friendly.",
    ts: "Tech Stack: NextJS",
    vid: "https://drive.google.com/file/d/1z-gLpU_PT764GmUUwSrP3lbdQBIM1RPN/view?usp=sharing" ,
    link:"https://todolist-student.netlify.app/" ,
    cde: "https://github.com/ishita5189/ToDo-List",
  },
  {
    id: 5,
    logo: proj3,
    name: "Weather App",
    descr: "It features a sleek UI/UX design. It retrieves real-time weather data via API. Ideal for quick access and appealing visual presentation on any device.",
    ts: "Tech Stack: HTML | CSS | JS",
    vid: "https://drive.google.com/file/d/1z-gLpU_PT764GmUUwSrP3lbdQBIM1RPN/view?usp=sharing" ,
    link:"https://weatherfetchingapp.netlify.app/" ,
    cde: "https://github.com/ishita5189/Weatherfetchingapp",
  },
  {
    id: 6,
    logo: proj5,
    name: "Sorting Visulaization Tool",
    descr: "This website helps people by providing an interactive and visual way to understand and compare various algorithms effectively.",
    ts: "Tech Stack: HTML | CSS | JS | C++",
    vid: "https://drive.google.com/file/d/1z-gLpU_PT764GmUUwSrP3lbdQBIM1RPN/view?usp=sharing" ,
      link:"https://differentsortingvisualizer.netlify.app/" ,
      cde: "https://github.com/ishita5189/SynergyService",
  }, 
             ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2 text-blue-700 hover:underline dark:text-blue-500">PROJECTS</h1>
        <span className=" underline mb-4">Here are some of my projects :</span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 my-2 mb-10 ">
          {cardItem.map(({ id, logo, name, descr, ts, vid, link, cde}) => (
            <div
              className="md:w-[400px] md:h-[340px] border-[2px] border-black-500/50 dark:border-blue-500/50 rounded-lg shadow-inner dark:shadow-inner-blue-800 p-2 hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[280px] h-[120px] p-1 border-[2px] relative left-14"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 text-blue-700 text-center dark:text-blue-400">{name}</div>
                <p className="px-2 text-gray-800 text-sm text-justify dark:text-white">{descr}</p>
                <p className="px-2 text-gray-800 text-center dark:text-white">{ts}</p>
              </div>
              <div className=" px-4 py-2 space-x-3 justify-around ml-10">
              <button className=" hover:bg-green-600 dark:text-white  text-black px-4 py-2 rounded ring-offset-2 ring-2 ring-inset"><a href={link} target="_blank">Link</a></button>
                <button className=" hover:bg-blue-600 dark:text-white  text-black px-4 py-2 rounded ring-offset-2 ring-2 ring-inset"><a href={vid} target="_blank">Video</a></button>
                <button className=" hover:bg-green-600 dark:text-white text-black px-4 py-2 rounded ring-offset-2 ring-2 ring-inset"><a href={cde} target="_blank">Source code</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;