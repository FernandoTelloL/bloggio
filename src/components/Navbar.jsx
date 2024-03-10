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
        className={` bg-purple-200 h-[100vh] w-[100vw] right-full absolute top-0 mt-0 pl-0 transition-all z-30 md:right-0 md:bg-white md:static md:h-auto ${
          menuClicked ? "!right-0" : ""
        }`}
      >
        <div className="p-6 md:hidden" onClick={handleClick}>
          <img className="w-12 h-12 ml-auto" src={closeMenu} alt="" />
        </div>

        <div className="flex flex-col mt-20 items-center h-full md:flex-row md:mt-0 md:h-auto md:justify-end">
        {/* TODO: Cambiar clases de color hover */}
          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose md:leading-none md:text-start md:w-fit md:mr-2 md:border-none">
            <a className="text-2xl font-bold uppercase hover:text-SoftRed text-4 p-3 md:hover:text-red-800 md:hover:border-b md:hover:border-red-800 transition-all md:text-base" href="#">
              Home
            </a>
          </li>

          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose md:leading-none md:text-start md:w-fit md:mr-2 md:border-none">
            <a className="text-2xl font-bold uppercase hover:text-SoftRed text-4 p-3 md:hover:text-red-800 md:hover:border-b md:hover:border-red-800 transition-all md:text-base" href="#">
              Categories
            </a>
          </li>

          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose md:leading-none md:text-start md:w-fit md:mr-2 md:border-none">
            <a className="text-2xl font-bold uppercase hover:text-SoftRed text-4 p-3 md:hover:text-red-800 md:hover:border-b md:hover:border-red-800 transition-all md:text-base" href="#">
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
