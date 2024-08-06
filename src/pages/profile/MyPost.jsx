import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const MyPost = ({ userId }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [posts, setPosts] = useState([])
  const [reloadPosts, setReloadPosts] = useState(false)

  const API_URL = `https://bloggio-api.onrender.com/Post/get-by-user/${userId}?limit=10&offset=1`

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

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const handleDelete = async (postId) => {
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
        setDropdownVisible(false)
        await Swal.fire(
          'Eliminado!',
          'El post ha sido eliminado.',
          'success'
        )
        handleDeletePost() // Notificar al componente padre que se eliminó el post
      } catch (error) {
        await Swal.fire(
          'Error!',
          'Hubo un problema eliminando el post.',
          'error'
        )
      }
    }
  }

  const handleDeletePost = () => {
    setReloadPosts(!reloadPosts)
  }

  return (
    <>
      {posts.map((post, index) => (
        // eslint-disable-next-line react/jsx-key
        <div className='bg-white rounded-lg shadow-md p-4 flex flex-col'>
          <img src={post.image} alt={post.title} className='w-full h-32 object-cover rounded-t-lg' />
          <div className='mt-2 flex-1'>
            <h2 className='text-xl font-semibold'>
              <Link to={`/detail-post/${post.postId}`}>
                {post.title}
              </Link>
            </h2>
            <p className='text-gray-600'>{post.description}</p>
          </div>
          <div className='mt-2 flex justify-between items-center'>
            <span className='text-gray-500 text-sm'>{post.date}</span>
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
                  <button onClick={handleDelete(post.postId)} className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100'>Delete Post</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
