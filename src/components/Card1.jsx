import img1 from '../assets/images/img1.webp'
import {
  RiTwitterFill,
  RiFacebookCircleFill,
  RiInstagramFill
} from 'react-icons/ri'

export const Card1 = () => {
  return (
    <div className='lg:flex'>
      <img
        className='w-full object-cover h-50 mb-3 lg:aspect-video'
        src={img1}
        alt='imagen'
      />
      <div className=''>
        <p className='text-xs mb-4'>Olivia Rhye - 20 Enero 2024</p>
        <h3 className='font-Oswald text-md font-bold text-slate-900'>
          Conversaciones con London Makr Co.
        </h3>
        <p className='text-sm mb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          placeat autem molestias ea voluptates excepturi saepe odio blanditiis
          sunt neque.
        </p>
        {/* pills */}
        <div className='mb-3 md:hidden'>
          <ul className='flex justify-between'>
            <li className='mr-2 text-xs border rounded-full px-4 py-1 border-gray-700'>
              <a href='#' />Diseño
            </li>
            <li className='mr-2 text-xs border rounded-full px-4 py-1 border-gray-700'>
              <a href='#' />Investigación
            </li>
            <li className='mr-2 text-xs border rounded-full px-4 py-1 border-gray-700'>
              <a href='#' />Entrevista
            </li>
          </ul>
        </div>
      </div>
      {/* iconos redes sociales */}
      <div>
        <ul className='flex gap-2'>
          <li className='border border-gray-500 rounded-full p-2'>
            <a className='block text-2xl text-[#1DA1F2]' href='#'>
              <RiTwitterFill />
            </a>
          </li>
          <li className='border border-gray-500 rounded-full p-2'>
            <a className='block text-2xl text-[#4267B2]' href='#'>
              <RiFacebookCircleFill />
            </a>
          </li>
          <li className='border border-gray-500 rounded-full p-2'>
            <a className='block text-2xl text-[#833AB4]' href='#'>
              <RiInstagramFill />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
