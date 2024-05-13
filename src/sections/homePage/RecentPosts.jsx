import { Link } from 'react-router-dom'
import img1 from '../../assets/images/img1.webp'
import img2 from '../../assets/images/img3.jpeg'
import {
  RiTwitterFill,
  RiFacebookCircleFill,
  RiInstagramFill
} from 'react-icons/ri'

export const RecentPosts = () => {
  return (
    <section className=''>
      <h2 className='text-2xl font-bold mb-4 text-slate-900'>
        Recent blog posts
      </h2>

      <section className='lg:flex lg:gap-6'>
        {/* card 1 */}
        <div className='md:mb-6 lg:w-[50%] mb-5'>
          <div className=''>
            <img
              className='w-full object-cover h-50 mb-3 lg:aspect-video lg:h-[235px] rounded-md'
              src={img1}
              alt='imagen'
            />
            <div className=''>
              <p className='text-xs mb-4'>Olivia Rhye - 20 Enero 2024</p>
              <h3 className='font-Oswald text-md font-bold text-slate-900'>
                <Link to='/detail-post'>
                  8 Best Practices Java Developers Should Know In Java
                  Collection
                </Link>
              </h3>
              <p className='text-sm mb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo placeat autem molestias ea voluptates excepturi saepe
                odio blanditiis sunt neque.
              </p>
            </div>
            <div className='lg:flex lg:justify-between lg:items-center '>
              {/* pills */}
              <div className='mb-3 md:hidden lg:flex lg:mb-0 '>
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

              {/* iconos redes sociales */}
              <div>
                <ul className='flex gap-2'>
                  <li className='border border-gray-500 rounded-full p-2 hover:scale-110 transition-all'>
                    <a className='block text-2xl text-[#1DA1F2]' href='#'>
                      <RiTwitterFill />
                    </a>
                  </li>
                  <li className='border border-gray-500 rounded-full p-2 hover:scale-110 transition-all'>
                    <a className='block text-2xl text-[#4267B2]' href='#'>
                      <RiFacebookCircleFill />
                    </a>
                  </li>
                  <li className='border border-gray-500 rounded-full p-2 hover:scale-110 transition-all'>
                    <a className='block text-2xl text-[#833AB4]' href='#'>
                      <RiInstagramFill />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='md:flex md:justify-between  lg:w-[50%] lg:flex lg:flex-row flex-wrap'>
          {/* card 2 */}
          <div className='md:w-[32%] lg:w-full mb-5 '>
            <div className='lg:flex lg:justify-between lg:gap-2'>
              <img
                className='w-full object-cover h-50 mb-3 lg:aspect-video lg:w-[35%] lg:mb-0 rounded-md'
                src={img2}
                alt='imagen'
              />

              <div className=''>
                <div className='lg:flex lg:flex-col'>
                  <p className='text-xs mb-4 lg:mb-0'>
                    Olivia Rhye - 20 Enero 2024
                  </p>
                  <h3 className='font-Oswald text-md font-bold text-slate-900'>
                    <Link to='/detail-post'>
                      Conversaciones con London Makr Co.
                    </Link>
                  </h3>
                  <p className='text-sm mb-3 lg:text-xs'>
                    Lorem ipsum dolor sit amet consectetur adipisicing eli sit
                    amet consectetur adipisicing elitt.
                  </p>
                  {/* pills */}
                  <div className='mb-3 md:hidden lg:block lg:mb-0'>
                    <ul className='flex justify-between lg:justify-start'>
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
                  <ul className='flex gap-2 lg:hidden'>
                    <li className='border border-gray-500 rounded-full p-2 lg:h-fit lg:p-1 hover:scale-110 transition-all'>
                      <a
                        className='block text-2xl lg:text-xl text-[#1DA1F2]'
                        href='#'
                      >
                        <RiTwitterFill />
                      </a>
                    </li>
                    <li className='border border-gray-500 rounded-full p-2 lg:h-fit lg:p-1 hover:scale-110 transition-all'>
                      <a
                        className='block text-2xl lg:text-xl text-[#4267B2]'
                        href='#'
                      >
                        <RiFacebookCircleFill />
                      </a>
                    </li>
                    <li className='border border-gray-500 rounded-full p-2 lg:h-fit lg:p-1 hover:scale-110 transition-all'>
                      <a
                        className='block text-2xl lg:text-xl text-[#833AB4]'
                        href='#'
                      >
                        <RiInstagramFill />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className='md:w-[32%] lg:w-full mb-5 '>
            <div className='lg:flex lg:justify-between lg:gap-2'>
              <img
                className='w-full object-cover h-50 mb-3 lg:aspect-video lg:w-[35%] lg:mb-0 rounded-md'
                src={img1}
                alt='imagen'
              />

              <div className=''>
                <div className='lg:flex lg:flex-col'>
                  <p className='text-xs mb-4 lg:mb-0'>
                    Olivia Rhye - 20 Enero 2024
                  </p>
                  <h3 className='font-Oswald text-md font-bold text-slate-900'>
                    <Link to='/detail-post'>
                      Conversaciones con London Makr Co.
                    </Link>
                  </h3>
                  <p className='text-sm mb-3 lg:text-xs'>
                    Lorem ipsum dolor sit amet consectetur adipisicing eli sit
                    amet consectetur adipisicing elitt.
                  </p>
                  {/* pills */}
                  <div className='mb-3 md:hidden lg:block lg:mb-0'>
                    <ul className='flex justify-between lg:justify-start'>
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
                  <ul className='flex gap-2 lg:hidden'>
                    <li className='border border-gray-500 rounded-full p-2 lg:h-fit lg:p-1 hover:scale-110 transition-all'>
                      <a
                        className='block text-2xl lg:text-xl text-[#1DA1F2]'
                        href='#'
                      >
                        <RiTwitterFill />
                      </a>
                    </li>
                    <li className='border border-gray-500 rounded-full p-2 lg:h-fit lg:p-1 hover:scale-110 transition-all'>
                      <a
                        className='block text-2xl lg:text-xl text-[#4267B2]'
                        href='#'
                      >
                        <RiFacebookCircleFill />
                      </a>
                    </li>
                    <li className='border border-gray-500 rounded-full p-2 lg:h-fit lg:p-1 hover:scale-110 transition-all'>
                      <a
                        className='block text-2xl lg:text-xl text-[#833AB4]'
                        href='#'
                      >
                        <RiInstagramFill />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className='md:w-[32%] lg:w-full mb-5 '>
            <div className='lg:flex lg:justify-between lg:gap-2'>
              <img
                className='w-full object-cover h-50 mb-3 lg:aspect-video lg:w-[35%] lg:mb-0 rounded-md'
                src={img2}
                alt='imagen'
              />

              <div className=''>
                <div className='lg:flex lg:flex-col'>
                  <p className='text-xs mb-4 lg:mb-0'>
                    Olivia Rhye - 20 Enero 2024
                  </p>
                  <h3 className='font-Oswald text-md font-bold text-slate-900'>
                    <Link to='/detail-post'>
                      Conversaciones con London Makr Co.
                    </Link>
                  </h3>
                  <p className='text-sm mb-3 lg:text-xs'>
                    Lorem ipsum dolor sit amet consectetur adipisicing eli sit
                    amet consectetur adipisicing elitt.
                  </p>
                  {/* pills */}
                  <div className='mb-3 md:hidden lg:block lg:mb-0'>
                    <ul className='flex justify-between lg:justify-start'>
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
                  <ul className='flex gap-2 lg:hidden'>
                    <li className='border border-gray-500 rounded-full p-2 lg:h-fit lg:p-1 hover:scale-110 transition-all'>
                      <a
                        className='block text-2xl lg:text-xl text-[#1DA1F2]'
                        href='#'
                      >
                        <RiTwitterFill />
                      </a>
                    </li>
                    <li className='border border-gray-500 rounded-full p-2 lg:h-fit lg:p-1 hover:scale-110 transition-all'>
                      <a
                        className='block text-2xl lg:text-xl text-[#4267B2]'
                        href='#'
                      >
                        <RiFacebookCircleFill />
                      </a>
                    </li>
                    <li className='border border-gray-500 rounded-full p-2 lg:h-fit lg:p-1 hover:scale-110 transition-all'>
                      <a
                        className='block text-2xl lg:text-xl text-[#833AB4]'
                        href='#'
                      >
                        <RiInstagramFill />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
