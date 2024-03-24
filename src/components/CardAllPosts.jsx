/* eslint-disable react/prop-types */

import {
  RiTwitterFill,
  RiFacebookCircleFill,
  RiInstagramFill,
} from "react-icons/ri";

export const CardAllPosts = ({ img }) => {
  return (
    <>
      <div className="mb-12 mt-4">
        <div className="">
          <img
            className="w-full object-cover h-50 mb-3 lg:aspect-video lg:h-[235px] rounded-md"
            src={img}
            alt="imagen"
          />
          <div className="">
            <p className="text-xs mb-4">Olivia Rhye - 20 Enero 2024</p>
            <h3 className="font-Oswald text-md font-bold text-slate-900 text-xl">
              A Continually Unfolding History - Hillview by Made by Hand
            </h3>
            <p className="text-sm mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              placeat autem molestias ea voluptates excepturi saepe odio
              blanditiis sunt neque.
            </p>
          </div>
          <div className="lg:flex lg:justify-between lg:items-center ">
            {/* pills */}
            <div className="mb-3 lg:flex lg:mb-0 text-gray-500">
              <ul className="flex items-center">
                <li className="mr-1 text-[10px] border rounded-full px-3 py-[2px] border-gray-500">
                  <a href="#"></a>Diseño
                </li>
                <li className="mr-1 text-[10px] border rounded-full px-3 py-[2px] border-gray-500">
                  <a href="#"></a>Investigación
                </li>
                <li className="mr-1 text-[10px] border rounded-full px-3 py-[2px] border-gray-500">
                  <a href="#"></a>Entrevista
                </li>
              </ul>
            </div>

            {/* iconos redes sociales */}
            <div className="hidden">
              <ul className="flex gap-2">
                <li className="border border-gray-500 rounded-full p-2">
                  <a className="block text-2xl text-[#1DA1F2]" href="#">
                    <RiTwitterFill />
                  </a>
                </li>
                <li className="border border-gray-500 rounded-full p-2">
                  <a className="block text-2xl text-[#4267B2]" href="#">
                    <RiFacebookCircleFill />
                  </a>
                </li>
                <li className="border border-gray-500 rounded-full p-2">
                  <a className="block text-2xl text-[#833AB4]" href="#">
                    <RiInstagramFill />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
