/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom'

export const CardCategory = ({ img, imgHeight, title, description }) => {
  const navigate = useNavigate()

  return (
    <>
      <div
        className='relative mt-14 rounded-2xl lg:hover:shadow-lg overflow-hidden transition-transform transform-gpu lg:hover:scale-110 hover:duration-500 cursor-pointer' onClick={() => {
          navigate(`/category-${title}`)
        }}
      >
        <img
          className={`w-full object-cover ${imgHeight} rounded-xl min-h-full`}
          src={img}
          alt='imagen'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 lg:hover:bg-opacity-65 flex flex-col justify-center items-center text-white rounded-xl lg:hover:transition-all group'>
          <h3 className='font-Oswald text-md uppercase text-4xl font-bold text-white text-center lg:transition-opacity opacity-100 lg:group-hover:opacity-0'>{title}</h3>
          <p className='text-white text-xl text-center lg:transition-opacity opacity-0 lg:group-hover:opacity-100 lg:font-bold lg:max-w-[80%]'>{description}</p>
        </div>
      </div>

    </>
  )
}
