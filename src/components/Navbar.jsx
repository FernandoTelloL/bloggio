import { useState } from "react";

import burgerMenu from "../assets/icons/icon-hamburger.svg";
import closeMenu from "../assets/icons/icon-menu-close.svg";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked(() => !menuClicked);
    console.log(menuClicked)
  };

  return (
    <>

      <ul className={` bg-slate-300 h-[100vh] w-[100vw] right-full absolute top-0 mt-0 pl-0 transition-all z-30 ${ menuClicked ? '!right-0':''}`}>

        <div className="bg-red-300 text-right" onClick={handleClick}>
          <img className="w-8 h-8" src={closeMenu} alt="" />
        </div>

        <div className="flex flex-col justify-center items-center h-full">

          <li className="list-none mb-8 sm:mb-0 cursor-pointer"> <a className="no-underline hover:text-SoftRed sm:text-4" href="#"> Home
            </a>
          </li>

          <li className="list-none mb-8 sm:mb-0 cursor-pointer">
            <a className="no-underline hover:text-SoftRed" href="#">
              New
            </a>
          </li>

          <li className="list-none mb-8 sm:mb-0 cursor-pointer">
            <a className="no-underline hover:text-SoftRed" href="#">
              Categories
            </a>
          </li>
        </div>

        
      </ul>

      
      <div>
        <img
          className={`${ menuClicked ? "" : "" } w-10 h-4 cursor-pointer sm:hidden`} 
          src={burgerMenu}
          onClick={handleClick}
          alt="icon-hamburger"
        />
      </div>
    </>
  );
};


