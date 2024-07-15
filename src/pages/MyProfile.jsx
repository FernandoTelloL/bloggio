import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import userAvatar from '../assets/images/user-male-avatar.png'
import { useUserStore } from '../store/userStore'

const Card = ({ image, title, description, date, postId, onDelete }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    })

    if (result.isConfirmed) {
      try {
        await fetch(`https://bloggio-api.onrender.com/Post/${postId}`, {
          method: 'DELETE'
        })

        setDropdownVisible(false) // Ocultar el menú después de la confirmación
        Swal.fire(
          'Eliminado!',
          'El post ha sido eliminado.',
          'success'
        )
        onDelete() // Notificar al componente padre que se eliminó el post
      } catch (error) {
        console.error('Error eliminando el post:', error)
        Swal.fire(
          'Error!',
          'Hubo un problema eliminando el post.',
          'error'
        )
      }
    }
  }

  return (
    <div className='bg-white rounded-lg shadow-md p-4 flex flex-col'>
      <img src={image} alt={title} className='w-full h-32 object-cover rounded-t-lg' />
      <div className='mt-2 flex-1'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
      </div>
      <div className='mt-2 flex justify-between items-center'>
        <span className='text-gray-500 text-sm'>{date}</span>
        <div className='relative'>
          <button
            className='text-gray-500 hover:text-gray-700'
            onClick={toggleDropdown}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m6 0H6' />
            </svg>
          </button>
          {dropdownVisible && (
            <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Edit Post</a>
              <button onClick={handleDelete} className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100'>Delete Post</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const MyProfile = () => {
  const [posts, setPosts] = useState([])
  const { id, userName } = useUserStore()
  const [reloadPosts, setReloadPosts] = useState(false)

  const API_URL = `https://bloggio-api.onrender.com/Post/get-by-user/${id}?limit=10&offset=1`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data)
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

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
      <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {posts.map((post, index) => (
          <Card
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

      <div className='bg-white rounded-lg shadow-md p-4 flex flex-col items-center'>
        <img
          src={userAvatar}
          alt='Profile'
          className='w-24 h-24 rounded-full'
        />
        <h2 className='text-xl font-semibold mt-4'>{userName}</h2>
        <a
          href='#'
          className='mt-2 text-blue-500 hover:underline'
        >
          Edit Profile
        </a>
      </div>
    </div>
  )
}
