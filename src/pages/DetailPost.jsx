import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mainImage from '../assets/images/img1.webp'
import { CommentsSection } from '../components'
import {
  MainTitleDetailPostPage,
  MenuBottomDetailPost,
  RelatedPostsDetailPostPage
} from './../sections'
import './DetailPost.css'

export const DetailPost = () => {
  const { id } = useParams() // Extrae el ID de los parámetros de la URL
  const [post, setPost] = useState(null)
  console.log(post)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://bloggio-api.onrender.com/Post/${id}`)
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
      <div className='mt-16 transition-all duration-500 ease-in-out'>
        <MainTitleDetailPostPage title={post.postTitle} description={post.postDescription} />

        <img
          className='mt-16 mb-6 rounded-xl md:h-[300px] lg:w-[500px] md:w-full md:object-cover md:object-top lg:object-center lg:mx-auto'
          src={post.postImage || mainImage}
          alt={post.postTitle}
        />

        <section className='mb-5 flex flex-col md:flex-row gap-2 lg:gap-4'>
          <article className='md:w-[70%]'>
            {parse(post.postContent)} {/* Aquí usamos html-react-parser */}
            <MenuBottomDetailPost />
          </article>
          <section className='md:w-[30%]'>
            <CommentsSection
              author={post.user.userNickname}
              category={post.category}
              date={post.postDate}
              postId={id}
            />
          </section>
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
