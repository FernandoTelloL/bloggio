import { useState } from "react";

import burgerMenu from "../assets/icons/icon-hamburger.svg";
import closeMenu from "../assets/icons/icon-menu-close.svg";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked(() => !menuClicked);
  };

  return (
    <>
      <ul
        className={` bg-purple-200 h-[100vh] w-[100vw] right-full absolute top-0 mt-0 pl-0 transition-all z-30 ${
          menuClicked ? "!right-0" : ""
        }`}
      >
        <div className="p-6" onClick={handleClick}>
          <img className="w-12 h-12 ml-auto" src={closeMenu} alt="" />
        </div>

        <div className="flex flex-col mt-20 items-center h-full">
        {/* TODO: Cambiar clases de color hover */}
          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose">
            <a className="text-2xl font-bold uppercase hover:text-SoftRed sm:text-4" href="#">
              Home
            </a>
          </li>

          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose">
            <a className="text-2xl font-bold uppercase hover:text-SoftRed sm:text-4" href="#">
              Categories
            </a>
          </li>

          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose">
            <a className="text-2xl font-bold uppercase hover:text-SoftRed sm:text-4" href="#">
              About us
            </a>
          </li>
        </div>
      </ul>

      <div>
        <img
          className={`${
            menuClicked ? "" : ""
          } w-10 h-10 cursor-pointer sm:hidden`}
          src={burgerMenu}
          onClick={handleClick}
          alt="icon-hamburger"
        />
      </div>
    </>
  );
};
