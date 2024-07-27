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
      vid: "https://drive.google.com/file/d/1z-gLpU_PT764GmUUwSrP3lbdQBIM1RPN/view?usp=sharing",
      link: "https://synergyservice.netlify.app/",
      cde: "https://github.com/ishita5189/SynergyService",
    },
    {
      id: 2,
      logo: proj2,
      name: "Portfolio",
      descr: "A showcase of my skills, built using React and styled with Tailwind CSS. It has features like dark mode option and contact form.",
      ts: "Tech Stack: React | Tailwind CSS",
      vid: "https://drive.google.com/file/d/1z-gLpU_PT764GmUUwSrP3lbdQBIM1RPN/view?usp=sharing",
      link: "https://ishita-portfolioweb.vercel.app/",
      cde: "https://github.com/ishita5189/PortfolioWebsite",
    },
    {
      id: 3,
      logo: wtp,
      name: "WordToPDF",
      descr: "Converts a docx file to pdf with functionalities like File History and Toggle Dark Mode.",
      ts: "Tech Stack: React | Tailwind CSS | NodeJS",
      vid: "https://drive.google.com/file/d/1jXwo5PYRBdkDfzy_TgucJiUYCt2xdARU/view",
      link: "https://word-to-pdf-frontend.vercel.app/",
      cde: "https://github.com/ishita5189/WordToPdf",
    },
    {
      id: 4,
      logo: proj4,
      name: "TO-Do List",
      descr: "Local storage-based To-Do app offers secure management. It stores data within the browser for persistent access even offline. Fast-loading and user-friendly.",
      ts: "Tech Stack: NextJS",
      vid: "https://drive.google.com/file/d/1z-gLpU_PT764GmUUwSrP3lbdQBIM1RPN/view?usp=sharing",
      link: "https://todolist-next-blue.vercel.app/",
      cde: "https://github.com/ishita5189/todolist-next",
    },
    {
      id: 5,
      logo: proj3,
      name: "Weather App",
      descr: "It features a sleek UI/UX design. It retrieves real-time weather data via API. Ideal for quick access and appealing visual presentation on any device.",
      ts: "Tech Stack: HTML | CSS | JS",
      vid: "https://drive.google.com/file/d/1z-gLpU_PT764GmUUwSrP3lbdQBIM1RPN/view?usp=sharing",
      link: "https://weatherfetchingapp.netlify.app/",
      cde: "https://github.com/ishita5189/Weatherfetchingapp",
    },
    {
      id: 6,
      logo: proj5,
      name: "Sorting Visualization Tool",
      descr: "This website helps people by providing an interactive and visual way to understand and compare various algorithms effectively.",
      ts: "Tech Stack: HTML | CSS | JS | C++",
      vid: "https://drive.google.com/file/d/1clOGYnBAXA0LNN3YNow8oCljMpeh01tp/view",
      link: "https://differentsortingvisualizer.netlify.app/",
      cde: "https://github.com/ishita5189/sortingvisualizer",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-6 mt-10 mb-16"
    >
      <h1 className="text-3xl font-bold mb-4 text-blue-700 hover:underline dark:text-blue-500">
        PROJECTS
      </h1>
      <span className="underline mb-4">Here are some of my projects:</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardItem.map(({ id, logo, name, descr, ts, vid, link, cde }) => (
          <div
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md dark:shadow-lg p-4 hover:scale-105 duration-300"
            key={id}
          >
            <img
              src={logo}
              className="w-full h-40 object-cover rounded-lg mb-4"
              alt={name}
            />
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">
                {name}
              </h2>
              <p className="text-gray-800 text-sm mb-2 dark:text-white">{descr}</p>
              <p className="text-gray-600 text-xs mb-4 dark:text-gray-300">{ts}</p>
              <div className="flex flex-wrap justify-center space-x-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Link
                </a>
                <a
                  href={vid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                >
                  Video
                </a>
                <a
                  href={cde}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600"
                >
                  Source code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
