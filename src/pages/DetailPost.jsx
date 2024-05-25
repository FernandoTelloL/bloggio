import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  MainTitleDetailPostPage,
  MenuBottomDetailPost,
  RelatedPostsDetailPostPage
} from './../sections'
import mainImage from '../assets/images/img1.webp'
import secondaryImage from '../assets/images/img4.jpeg'

export const DetailPost = () => {
  const { id } = useParams() // Extrae el ID de los parámetros de la URL
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://bloggio-api.onrender.com/post/${id}`)
        const data = await response.json()
        setPost(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching post:', error)
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!post) {
    return <div>Error loading post</div>
  }

  return (
    <>
      <div className='mt-16'>
        <MainTitleDetailPostPage title={post.title} />

        <img
          className='mt-16 mb-6 rounded-xl md:h-[300px] lg:h-[400px] md:w-full md:object-cover md:object-top lg:object-center'
          src={post.mainImage || mainImage}
          alt={post.title}
        />

        <section className='mb-5 flex flex-col md:flex-row gap-2 lg:gap-4'>
          {/* <article className='md:w-[70%]'>
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className='mb-3 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left'>
                {paragraph}
              </p>
            ))}

            <img
              className='rounded-xl mt-6 mb-6 w-[80%] mr-auto ml-auto md:mt-10 md:mb-10 md:w-[70%]'
              src={post.secondaryImage || secondaryImage}
              alt={post.title}
            />

            <MenuBottomDetailPost />
          </article> */}
        </section>
        <hr className='bg-slate-500' />
        <section className='mt-5 mb-6'>
          <RelatedPostsDetailPostPage />
        </section>
      </div>
      <hr className='mb-6 bg-slate-500' />
    </>
  )
}
