import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import imgUserAvatar from '../../src/assets/images/user-male-avatar.png'
import { useUserStore } from '../store/userStore'
import {ENDPOINTS} from "../api/apiEndpoints.js";
import {ShowErrorAlert, ShowSuccessAlert} from "../utils/index.js";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
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
        <h2 className='text-xl font-semibold'>
          <Link to={`/detail-post/${postId}`}>
            {title}
          </Link>
        </h2>
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

// eslint-disable-next-line react/prop-types
const EditProfileModal = ({ isOpen, onClose, userData, onChange, onSave, handleSetImage }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-4 rounded-lg shadow-lg w-96'>
        <h2 className='text-xl font-semibold mb-4'>Edit Profile</h2>
        <input
          type='text'
          placeholder='Nickname'
          value={userData.nickname}
          onChange={(e) => onChange('nickname', e.target.value)}
          className='w-full p-2 border border-gray-300 rounded mb-2'
        />
        <input
          type='text'
          placeholder='Short Bio'
          value={userData.shortbio}
          onChange={(e) => onChange('shortbio', e.target.value)}
          className='w-full p-2 border border-gray-300 rounded mb-2'
        />
        <img
          className='h-auto max-w-full m-auto'
          src={userData.avatar}
          alt=''
        />
        <input
          type='file'
          onChange={(e) => onChange(handleSetImage(e.target.files[0]))}
          className='w-full p-2 border border-gray-300 rounded mb-2'
        />
        <div className='flex justify-end'>
          <button onClick={onClose} className='mr-2 p-2 border rounded'>Cancel</button>
          <button onClick={onSave} className='p-2 border rounded bg-blue-500 text-white'>Save</button>
        </div>
      </div>
    </div>
  )
}

export const MyProfile = () => {
  const [posts, setPosts] = useState([])
  // endpoint para obtener los datos del usuario
  // const urlUpdateProfile = 'https://bloggio-api.onrender.com/auth/update-profile'
  const urlUpdateProfile = 'https://bloggio-api.onrender.com/auth/update-profile'

  const { userShortBio, userName, id, userAvatar } = useUserStore()
  const [imageFile, setImageFile] = useState(null) // Estado para la imagen

  const [reloadPosts, setReloadPosts] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [userData, setUserData] = useState({
    nickname: '',
    shortbio: '',
    avatar: null
  })

  console.log(id)

  const API_URL = `https://bloggio-api.onrender.com/Post/get-by-user/${id}?limit=10&offset=1`

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
    // Aquí puedes añadir la lógica para obtener los datos actuales del usuario y establecerlos en el estado
    // Por ejemplo:
    setUserData({
      nickname: userName,
      shortbio: userShortBio,
      avatar: userAvatar
    })
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleChangeUserData = (key, value) => {
    setUserData({
      ...userData,
      [key]: value
    })
  }

  const handleSaveUserData = async () => {
    if (userData.nickname.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo de Nickname no puede estar vacío!'
      })
      return
    }

    let dataFormatted = {
      userId: id,
      userNickname: userData.nickname,
      userShortBio: userData.shortbio
    }
    const formData = new FormData()
    dataFormatted = JSON.stringify(dataFormatted)
    formData.append('user', new Blob([dataFormatted], { type: 'application/json' }))
    formData.append('file', new Blob([imageFile], { type: 'application/octet-stream' }))

    try {
      const response = await fetch(urlUpdateProfile, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Hubo un problema con la petición: ' + response.status)
      }

      const result = await (response).json()

      ShowSuccessAlert(
        'Datos actualizados correctamente'
      )
      console.log('Respuesta del servidor:', result)
    } catch (error) {
      console.error('Error al enviar la petición:', error)
      ShowErrorAlert('Error al enviar la petición: ' + error.message)
    }

    // Aquí puedes añadir la lógica para guardar los datos actualizados del usuario
    // Por ejemplo, enviar una solicitud a tu API
    console.log('Datos guardados:', userData)
    setModalOpen(false)
  }

  const handleSetImage = (image) => {
    console.log(image)
    setImageFile(image)
    //setear la imagen en la etiquete img?
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

      <EditProfileModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        userData={userData}
        onChange={handleChangeUserData}
        onSave={handleSaveUserData}
        handleSetImage={handleSetImage}
      />
    </div>
  )
}
