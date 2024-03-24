/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import burgerMenu from "../assets/icons/icon-hamburger.svg";
import closeMenu from "../assets/icons/icon-menu-close.svg";

import userPhoto from "../assets/images/user-photo.jpg";

export const Navbar = ({ user, login }) => {
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
          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose md:leading-none md:text-start md:w-fit md:mr-2 md:border-none">
            <Link
              to="/"
              className="text-2xl font-extrabold uppercase hover:text-secondary text-4 p-3 md:hover:text-secondary md:hover:border-b md:hover:border-secondary transition-all md:text-base"
            >
              Inicio
            </Link>
          </li>

          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose md:leading-none md:text-start md:w-fit md:mr-2 md:border-none">
            <Link
              to="/categories"
              className="text-2xl font-extrabold uppercase hover:text-secondary text-4 p-3 md:hover:text-secondary md:hover:border-b md:hover:border-secondary transition-all md:text-base"
            >
              Categorias
            </Link>
          </li>

          <li className="list-none mb-8 sm:mb-0 md:cursor-pointer border-b border-b-gray-500 w-[60%] text-center leading-loose md:leading-none md:text-start md:w-fit md:mr-2 md:border-none">
            <Link
              to="/about"
              className="text-2xl font-extrabold uppercase hover:text-secondary text-4 p-3 md:hover:text-secondary md:hover:border-b md:hover:border-secondary transition-all md:text-base"
            >
              Nosotros
            </Link>
          </li>

          {user ? (
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
                <ul className="leading-8">
                  <li className="hover:text-secondary">
                    <a className="" href="#">
                      Mi perfil
                    </a>
                  </li>
                  <li className="hover:text-secondary">
                    <a href="#">Configuración</a>
                  </li>
                </ul>
              </div>
              {/* fin submenu foto perfil */}
            </div>
          ) : (
            <button onClick={login}>Login</button>
          )}
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
