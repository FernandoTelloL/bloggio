import React, { useEffect, useState } from 'react'
import imgUserAvatar from '../../../src/assets/images/user-male-avatar.png'
import { useUserStore } from '../../store/userStore.js'
import { MyProfileCard } from './MyProfileCard.jsx'
import { MyProfileEditModal } from './MyProfileEditModal.jsx'

export const MyProfile = () => {
  const [posts, setPosts] = useState([])
  const [userData, setUserData] = useState({
    nickname: '',
    shortbio: '',
    avatar: null
  })
  const { userShortBio, userName, id, userAvatar } = useUserStore()
  const [reloadPosts, setReloadPosts] = useState(false)
  const [modalOpen, setModalOpen] = useState(false) // Nuevo estado para controlar el modal

  const API_URL = `https://bloggio-api-xv4g.onrender.com/Post/get-by-user/${id}?limit=30&offset=1`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        setPosts(data.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [API_URL, reloadPosts])

  const handleDeletePost = () => {
    setReloadPosts(!reloadPosts)
  }

  const handleEditProfileClick = () => {
    setUserData({
      nickname: userName,
      shortbio: userShortBio,
      avatar: userAvatar
    })
    setModalOpen(true) // Abrir el modal
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
      {/* Renderizado de los cards */}
      <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {posts.map((post, index) => (
          <MyProfileCard
            key={index}
            image={post.postImage}
            title={post.postTitle}
            description={post.postDescription}
            date={post.postDate}
            postId={post.postId}
            onDelete={handleDeletePost}
          />
        ))}
      </div>

      {/* Datos del usuario y botón de editar */}
      <div className='bg-white rounded-lg shadow-md p-4 flex flex-col items-center'>
        {
          userAvatar
            ? <img
                src={userAvatar}
                alt='Profile'
                className='w-24 h-24 rounded-full'
              />
            : <img
                src={imgUserAvatar}
                alt='Profile'
                className='w-24 h-24 rounded-full'
              />
        }
        <h2 className='text-xl font-semibold mt-4'>{userName}</h2>
        <button
          onClick={handleEditProfileClick}
          className='mt-2 text-blue-500 hover:underline'
        >
          Edit Profile
        </button>
      </div>

      {/* Componente del modal de editar perfil */}
      {modalOpen && (
        <MyProfileEditModal
          userData={userData}
          id={id}
        />
      )}
    </div>
  )
}
