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
        const response = await fetch(`https://bloggio-api.onrender.com/Post/${id}`)
        const data = await response.json()
        console.log('data', data)
        setPost(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching post:', error)
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  /*
  {
    "postId": "6be90d25-7ede-4ae8-905d-2e1a4ffd413c",
    "postContent": "Piero",
    "postTitle": "Piero y su miembro de 2 cm",
    "postDescription": "chipiiii",
    "postState": 1,
    "postPriority": 1,
    "postImage": "https://res.cloudinary.com/dbxivsisb/image/upload/v1/bloggio/evyhfolkzi0la5juk3lu",
    "user": {
        "userId": "0ec69a79-4db4-4cc3-a03f-8635aa7c8b27",
        "userEmail": "whiston@gmail.com",
        "userNickname": "whiston",
        "userPassword": "$2a$10$bSjUR.Nz/sUFNsuofcJNWeGkFKXXWoL.UYAwDR7zshY5eI.MOgnom",
        "userPhoto": null,
        "userShortBio": null,
        "userState": 1,
        "userFCreate": "2024-05-18T17:00:34.144+00:00",
        "userFUpdate": null,
        "roles": [
            {
                "roleId": "10ed6e4a-8081-4332-aa89-f69663d627db",
                "name": "T_ROLE_USER"
            }
        ]
    }
}
  */

  if (loading) {
    return <div>Loading...</div>
  }

  if (!post) {
    return <div>Error loading post</div>
  }

  return (
    <>
      <div className='mt-16'>
        <MainTitleDetailPostPage title={post.postTitle} description={post.postDescription} />

        <img
          className='mt-16 mb-6 rounded-xl md:h-[300px] lg:h-[400px] md:w-full md:object-cover md:object-top lg:object-center'
          src={post.postImage || mainImage}
          alt={post.postTitle}
        />

        <section className='mb-5 flex flex-col md:flex-row gap-2 lg:gap-4'>
          <article className='md:w-[70%]'>
            {post.postContent}
            <MenuBottomDetailPost />
          </article>
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
