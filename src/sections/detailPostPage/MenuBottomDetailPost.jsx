import { useState } from 'react'
import {
  RiHeart3Fill,
  RiShareForwardFill
} from 'react-icons/ri'

export const MenuBottomDetailPost = () => {
  const [like, setLike] = useState(false)

  const handleClickLike = () => {
    setLike(!like)
  }

  return (
    <div className=' text-slate-300 px-2 py-4 mt-7 rounded-lg lg:py-3 lg:w-1/2'>
      <ul className='flex text-xl lg:text-base justify-around'>
        <li className=''>
          <RiHeart3Fill
            onClick={handleClickLike}
            className={`border border-gray-50 transition-all ${
              like && 'text-red-500'
            } cursor-pointer`}
          />
        </li>

        <li>
          <RiShareForwardFill className='cursor-pointer' />
        </li>
      </ul>
    </div>
  )
}
