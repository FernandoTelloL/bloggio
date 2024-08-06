import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { ShowErrorAlert, ShowSuccessAlert } from '../../utils/index.js'

// eslint-disable-next-line react/prop-types
export const EditProfileModal = ({ isOpen, userData, onClose }) => {
  if (!isOpen) return null

  const urlUpdateProfile = 'https://bloggio-api.onrender.com/auth/update-profile'


  const handleSaveUserData = async () => {
    // eslint-disable-next-line react/prop-types
    if (userData.nickname.trim() === '') {
      await Swal.fire({
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

      await (response).json()

      ShowSuccessAlert(
        'Datos actualizados correctamente'
      )
    } catch (error) {
      console.error('Error al enviar la petición:', error)
      ShowErrorAlert('Error al enviar la petición: ' + error.message)
    }
    isOpen = false
  }

  const onChange = (key, value) => {
    setUserData({
      ...userData,
      [key]: value
    })
  }

  const handleSetImage = (image) => {
    setImageFile(image)
    console.log(image)
    setImageSelected(URL.createObjectURL(image))
  }

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
          className='h-auto w-24 ml-2'
          src={userData.avatar}
          alt=''
        />
        {/* <img
          className='h-auto w-24 mr-2'
          src={imageSelected}
          alt=''
        /> */}
        <input
          type='file'
          onChange={(e) => onChange(handleSetImage(e.target.files[0]))}
          className='w-full p-2 border border-gray-300 rounded mb-2'
        />
        <div className='flex justify-end'>
          <button onClick={onClose} className='mr-2 p-2 border rounded'>Cancel</button>
          <button onClick={handleSaveUserData} className='p-2 border rounded bg-blue-500 text-white'>Save</button>
        </div>
      </div>
    </div>
  )
}
