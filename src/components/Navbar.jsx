import React, {useState} from 'react';
import picture from "../../public/IS.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
    const [menu, setMenu] = useState(false);  {/* var and its state */}
     {/* same code is used +1 */}
   const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "TechStack" },
    { id: 5, text: "Contact" },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md dark:shadow-blue-800 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 dark:text-white">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={picture} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Ishita<span className="text-blue-700  dark:text-blue-500 text-2xl">Sharma</span>
              <p className="text-sm"><span className="text-blue-700  dark:text-blue-500">Web</span> Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div className=" bg-white dark:bg-gray-900">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer text-slate-900 hover:text-blue-700  dark:hover:text-blue-500 hover:underline  dark:text-white"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden"> {/* for more option in mobille */}
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className=" bg-white dark:bg-gray-900 dark:text-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl hover:text-blue-700 dark:hover:text-blue-500 hover:underline">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;