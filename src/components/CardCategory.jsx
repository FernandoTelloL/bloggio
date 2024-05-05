/* eslint-disable react/prop-types */

import {
    RiTwitterFill,
    RiFacebookCircleFill,
    RiInstagramFill,
  } from "react-icons/ri";
  
  export const CardCategory = ({ img, imgHeight, title }) => {
    return (
      <>
        <div className="mb-12 mt-4">
          <div className="">
            <img
              className={`w-full object-cover ${imgHeight} mb-3 lg:aspect-video lg:h-[235px] rounded-md`}
              src={img}
              alt="imagen"
            />
            <div className="">
              <h3 className="font-Oswald text-md font-bold text-slate-900 text-xl">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  };
  