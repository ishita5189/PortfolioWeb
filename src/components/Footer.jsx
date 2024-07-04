import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-10">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaLinkedin size={24} />
              <SiLeetcode size={24} />
              <FaInstagram size={24} />
              < CgMail size={24} />
            </div>
            <div className="mt-4 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 | Ishita Sharma | All rights reserved
              </p>
              <p className="text-sm">Made with Love ❤️ </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;