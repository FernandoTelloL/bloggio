import { useState } from "react";

import burgerMenu from "../assets/icons/icon-hamburger.svg";
import closeMenu from "../assets/icons/icon-menu-close.svg";

import userPhoto from "../assets/images/user-photo.jpg";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [photoClicked, setPhotoClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked(() => !menuClicked);
  };

  const handlePhotoClick = () => [setPhotoClicked(() => !photoClicked)];

  return (
    <>
      <ul
        className={` bg-amber-400 h-[100vh] w-[100vw] right-full absolute top-0 mt-0 pl-0 transition-all z-30 md:right-0 md:bg-white md:static md:h-auto ${
          menuClicked ? "!right-0" : ""
        }`}
      >
        <div className="flex justify-end">
          <div className="p-6 md:hidden" onClick={handleClick}>
            <img className="w-12 h-12" src={closeMenu} alt="" />
          </div>
        </div>

        <div className="flex flex-col mt-10 items-center h-full md:flex-row md:mt-0 md:h-auto md:justify-end">
          {/* TODO: Cambiar clases de color hover */}
          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose md:leading-none md:text-start md:w-fit md:mr-2 md:border-none">
            <a
              className="text-2xl font-extrabold uppercase hover:text-[#0ea5e9] text-4 p-3 md:hover:text-[#0ea5e9] md:hover:border-b md:hover:border-[#0ea5e9] transition-all md:text-base"
              href="#"
            >
              Inicio
            </a>
          </li>

          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose md:leading-none md:text-start md:w-fit md:mr-2 md:border-none">
            <a
              className="text-2xl font-extrabold uppercase hover:text-[#0ea5e9] text-4 p-3 md:hover:text-[#0ea5e9] md:hover:border-b md:hover:border-[#0ea5e9] transition-all md:text-base"
              href="#"
            >
              Categorias
            </a>
          </li>

          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose md:leading-none md:text-start md:w-fit md:mr-2 md:border-none">
            <a
              className="text-2xl font-extrabold uppercase hover:text-[#0ea5e9] text-4 p-3 md:hover:text-[#0ea5e9] md:hover:border-b md:hover:border-[#0ea5e9] transition-all md:text-base"
              href="#"
            >
              Nosotros
            </a>
          </li>

          <div className=" object-cover relative flex justify-center cursor-pointer">
            <img
              className="w-14 h-14 object-cover rounded-full object-top border-2 border-slate-950"
              onClick={handlePhotoClick}
              src={userPhoto}
              alt=""
            />

            {/* inicio submenu foto perfil */}
            <div
              className={`transition-all bg-slate-950 text-slate-200 text-sm absolute top-16 py-2 px-4 rounded-lg ${
                photoClicked ? "block" : "hidden"
              }`}
            >
              {/* TODO: hacer bien el after para que se vea una flecha hacia arriba */}
              <ul className="leading-8">
                <li className="hover:text-[#f9ceda]">
                  <a className="" href="#">
                    Mi perfil
                  </a>
                </li>
                <li className="hover:text-pink-300">
                  <a href="#">Configuración</a>
                </li>
              </ul>
            </div>
            {/* fin submenu foto perfil */}
          </div>
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
