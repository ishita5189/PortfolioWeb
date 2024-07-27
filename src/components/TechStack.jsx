import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import cpp from "../../public/cpp.png";
import javascript from "../../public/javascript.png";
import react from "../../public/reactjs.png";
import sql from "../../public/sql.jpg";
import mern from "../../public/mern.jpeg";

function TechStack() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: cpp, name: "CPP" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: react, name: "React" },
    { id: 6, logo: sql, name: "SQL" },
    { id: 7, logo: mern, name: "MERN Stack" },
  ];

  return (
    <div
      name="TechStack"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
    >
      <div>
        <h1 className="text-blue-800 text-3xl font-bold mb-2 hover:underline dark:text-blue-500">
          TECH STACK
        </h1>
        <p className="mb-4">
          I have been working with the following technologies:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 border-gray-300 dark:border-gray-700 rounded-full md:w-32 md:h-32 shadow-md dark:shadow-blue-800 p-2 cursor-pointer ring-offset-2 ring-2 ring-inset hover:scale-110 duration-300 hover:grayscale-0 grayscale"
              key={id}
            >
              <img
                src={logo}
                className="w-24 h-24 rounded-full"
                alt={name}
              />
              <div className="mt-2 text-center text-lg font-medium dark:text-white">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
