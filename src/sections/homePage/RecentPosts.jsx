import { Link } from 'react-router-dom'
// import img1 from '../../assets/images/img1.webp'
// import img2 from '../../assets/images/img3.jpeg'
import {
  RiTwitterFill,
  RiFacebookCircleFill,
  RiInstagramFill
} from 'react-icons/ri'
import { useState, useEffect } from 'react'
export const RecentPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bloggio-api.onrender.com/Post/GetTop4Post')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data)
        setPosts(data)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className=''>
      <h2 className='text-2xl font-bold mb-4 text-slate-900'>
        POST MÁS POPULARES
      </h2>

      <section className='lg:flex lg:gap-6'>
        {posts.map((post, index) => (
          <div key={post.id} className={`md:mb-6 lg:w-[50%] mb-5 ${index === 0 ? 'lg:mr-6' : ''}`}>
            <div className=''>
              <img
                className='w-full object-cover h-50 mb-3 lg:aspect-video lg:h-[235px] rounded-md'
                src={post.postImage}
                alt='imagen'
              />
              <div className=''>
                <p className='text-xs mb-4'>{`${post.user.userNickname} - ${post.date}`}</p>
                <h3 className='font-Oswald text-md font-bold text-slate-900'>
                  <Link to={`/detail-post/${post.postId}`}>
                    {post.postTitle}
                  </Link>
                </h3>
                <p className='text-sm mb-3'>
                  {post.postDescription}
                </p>
              </div>
              <div className='lg:flex lg:justify-between lg:items-center '>
                {/* pills */}
                {/* <div className='mb-3 md:hidden lg:flex lg:mb-0 '>
                  <ul className='flex justify-between'>
                    {post.tags.map((tag, tagIndex) => (
                      <li key={tagIndex} className='mr-2 text-xs border rounded-full px-4 py-1 border-gray-700'>
                        <a href='#'>{tag}</a>
                      </li>
                    ))}
                  </ul>
                </div> */}

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
        ))}
      </section>
    </section>
  )
}
