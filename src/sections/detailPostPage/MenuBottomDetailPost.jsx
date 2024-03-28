import { useState } from "react";
import {
  RiHeart3Fill,
  RiDislikeFill,
  RiShareForwardFill,
} from "react-icons/ri";

export const MenuBottomDetailPost = () => {
  let [like, setLike] = useState(false);
  let [dislike, setDislike] = useState(false);

  const handleClickLike = () => {
    setDislike((dislike = false));
    setLike(!like);
  };

  const handleClickDislike = () => {
    setLike((like = false));
    setDislike(!dislike);
  };

  return (
    <div className="bg-slate-950 text-slate-300 px-2 py-4 mt-7 rounded-lg">
      <ul className="flex text-xl justify-around">
        <li className="">
          <RiHeart3Fill
            onClick={handleClickLike}
            className={`transition-all ${
              like && "text-red-500"
            } cursor-pointer`}
          />
        </li>
        <li>
          <RiDislikeFill
            onClick={handleClickDislike}
            className={`transition-all ${
              dislike && "text-secondary"
            } cursor-pointer`}
          />
        </li>
        <li>
          <RiShareForwardFill className="cursor-pointer" />
        </li>
      </ul>
    </div>
  );
};
