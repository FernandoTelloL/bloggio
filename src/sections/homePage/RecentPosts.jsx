import { useEffect, useState } from 'react'
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill
} from 'react-icons/ri'
import { MutatingDots } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { formatDate } from './../../utils/dateHelper'

export const RecentPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bloggio-api-5hut.onrender.com/Post/GetTop4Post')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data)
        setPosts(data.data)
        setLoading(false)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }

    fetchData()
  }, [])

  return (
    loading
      ? (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30'>
          <MutatingDots
            visible
            height='100'
            width='100'
            color='#172A99'
            secondaryColor='#69141B'
            radius='12.5'
            ariaLabel='mutating-dots-loading'
          />
        </div>
        )
      : (
        <section className=''>
          <h2 className='text-2xl font-bold mb-4 text-slate-900'>
            POST MÁS POPULARES
          </h2>
          <section className='lg:flex lg:gap-3'>
            {/* card 1 */}
            {posts[0] && (
              <div className='md:mb-6 lg:w-[50%] mb-3'>
                <div className='min-h-full flex flex-col justify-between border border-slate-300 rounded-md p-3'>
                  <div>
                    <img
                      className='w-full object-cover h-[150px]  lg:aspect-video lg:h-[235px] rounded-md'
                      src={posts[0].postImage}
                      alt='imagen'
                    />
                    <div className=''>
                      <p className='text-xs mb-4'>{posts[0].userNickname} - {formatDate(posts[0].postCreated)}
                      </p>
                      <h3 className='font-Oswald text-md font-bold text-slate-900'>
                        <Link to={`/detail-post/${posts[0].postId}`}>
                          {posts[0].postTitle}
                        </Link>
                      </h3>
                      <p className='text-sm mb-3'>
                        {posts[0].postDescription}
                      </p>
                    </div>
                  </div>
                  <div className='lg:flex lg:justify-between lg:items-center '>
                    {/* pills */}
                    <div className='mb-3 md:hidden lg:flex lg:mb-0 '>
                      <ul className='flex justify-between'>
                        <li className='mr-2 text-[10px] border rounded-full px-3 py-[2px] border-gray-700'>
                          <a href='#' />{posts[0].categoryName}
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
            )}

            {/* cards 2,3,4 */}
            <div className='md:flex md:justify-between lg:w-[50%] lg:flex lg:flex-row flex-wrap'>
              {posts.slice(1).map((post) => (
                <div key={post.postId} className='md:w-[32%] lg:w-full mb-6'>
                  <div className='lg:flex lg:justify-start lg:gap-4 border border-slate-300 rounded-md p-3 lg:h-full'>
                    <img
                      className='w-full object-cover h-[150px] aspect-video lg:aspect-video lg:w-[25%] lg:mb-0 rounded-md'
                      src={post.postImage}
                      alt='imagen'
                    />
                    <div className='flex flex-col justify-between lg:w-[75%]'>
                      <div className='flex flex-col'>
                        <p className='text-xs mb-4 lg:mb-0'>
                          {post.userNickname} - {formatDate(post.postCreated)}
                        </p>
                        <h3 className='font-Oswald text-md font-bold text-slate-900'>
                          <Link to={`/detail-post/${post.postId}`}>
                            {post.postTitle}
                          </Link>
                        </h3>
                        <p className='text-sm mb-3 lg:text-xs'>
                          {post.postDescription}
                        </p>
                      </div>
                      {/* pills */}
                      <div className='mt-auto mb-3 md:hidden lg:block lg:mb-0'>
                        <ul className='flex justify-between lg:justify-start'>
                          <li className='mr-2 text-[10px] border rounded-full px-3 py-[2px] border-gray-700'>
                            <a href='#' />{post.categoryName}
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
              ))}
            </div>

          </section>
        </section>
        )
  )
}
