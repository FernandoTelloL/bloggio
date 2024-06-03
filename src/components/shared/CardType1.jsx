/* eslint-disable react/prop-types */
import {
  RiTwitterFill,
  RiFacebookCircleFill,
  RiInstagramFill
} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

export const CardType1 = ({ img, imgHeight, title, userNickName, postCreated, description, postId }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  const navigate = useNavigate()

  const redirectToPost = (postId) => {
    navigate(`/detail-post/${postId}`)
  }

  const formattedDate = formatDate(postCreated)

  return (
    <div className='mb-12 mt-4 cursor-pointer' onClick={() => redirectToPost(postId)}>
      <div>
        <img
          className={`w-full object-cover ${imgHeight} mb-3 lg:aspect-video lg:h-[235px] rounded-md`}
          src={img}
          alt='imagen'
        />
        <div>
          <p className='text-xs mb-4'>{userNickName} - {formattedDate}</p>
          <h3 className='font-Oswald text-md font-bold text-slate-900 text-xl'>
            {title}
          </h3>
          <p className='text-sm mb-3'>
            {description}
          </p>
        </div>
        <div className='lg:flex lg:justify-between lg:items-center '>
          {/* pills */}
          <div className='mb-3 lg:flex lg:mb-0 text-gray-500'>
            <ul className='flex items-center'>
              <li className='mr-1 text-[10px] border rounded-full px-3 py-[2px] border-gray-500'>
                <a href='#' />Diseño
              </li>
              {/* <li className='mr-1 text-[10px] border rounded-full px-3 py-[2px] border-gray-500'>
                <a href='#' />Investigación
              </li>
              <li className='mr-1 text-[10px] border rounded-full px-3 py-[2px] border-gray-500'>
                <a href='#' />Entrevista
              </li> */}
            </ul>
          </div>

          {/* iconos redes sociales */}
          <div className='hidden'>
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
      </div>
    </div>
  )
}
