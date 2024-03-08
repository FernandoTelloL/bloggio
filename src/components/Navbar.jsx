import { useState } from "react";

import closeBtn from "../assets/icons/icon-menu-close.svg";
import burgerMenu from "../assets/icons/icon-menu.svg";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(true);

  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
  };

  return (
    <>
      <ul
        className={`${
          menuClicked ? "hidden" : ""
        } absolute bg-orange-300 h-screen top-0 right-0 w-[256px] p-[24px] text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}
      >
        <li
          className={`${
            menuClicked ? "hidden" : ""
          } cursor-pointer sm:hidden flex justify-end`}
        >
          <img
            className="w-8 h-8 mb-[87px]"
            src={closeBtn}
            onClick={handleClick}
            alt=""
          />
        </li>
        <li className="list-none mb-8 sm:mb-0">
          <a className="no-underline hover:text-SoftRed sm:text-4" href="#">
            Home
          </a>
        </li>

        <li className="list-none mb-8 sm:mb-0">
          <a className="no-underline hover:text-SoftRed" href="#">
            New
          </a>
        </li>

        <li className="list-none mb-8 sm:mb-0">
          <a className="no-underline hover:text-SoftRed" href="#">
            Categories
          </a>
        </li>

      </ul>
      <img
        className={`${
          menuClicked ? "" : "hidden"
        } w-10 h-4 cursor-pointer sm:hidden`}
        src={burgerMenu}
        onClick={handleClick}
        alt=""
      />
    </>
  );
};
