/* eslint-disable react/prop-types */
import { useState } from 'react'
import Swal from 'sweetalert2'
import { ShowErrorAlert, ShowSuccessAlert } from '../../utils'

// export const MyProfileEditModal = ({ isOpen, onClose, userData, onChange, onSave, handleSetImage, imageSelected, isAvatarVisible, isImageSelectedVisible }) => {
export const MyProfileEditModal = ({ userData, id }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [imageSelected, setImageSelected] = useState(null)
  const [isAvatarVisible, setAvatarVisible] = useState(false)
  const [isSelectedImageVisible, setSelectedImageVisible] = useState(false)
  const [imageFile, setImageFile] = useState(null) // Estado para la imagen

  // endpoint para obtener los datos del usuario
  const urlUpdateProfile = 'https://bloggio-api-5hut.onrender.com/auth/update-profile'

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
    } catch (error) {
      console.error('Error al enviar la petición:', error)
      ShowErrorAlert('Error al enviar la petición: ' + error.message)
    }
    setModalOpen(false)
  }

  const handleSetImage = (image) => {
    setImageFile(image)
    console.log(image)
    setImageSelected(URL.createObjectURL(image))
    setAvatarVisible(true)
    setSelectedImageVisible(false)
  }

  // if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-4 rounded-lg shadow-lg w-96'>
        <h2 className='text-xl font-semibold mb-4'>Edit Profile</h2>
        <input
          type='text'
          placeholder='Nickname'
          value={userData.nickname}
          onChange={(e) => handleChangeUserData('nickname', e.target.value)}
          className='w-full p-2 border border-gray-300 rounded mb-2'
        />
        <input
          type='text'
          placeholder='Short Bio'
          value={userData.shortbio}
          onChange={(e) => handleChangeUserData('shortbio', e.target.value)}
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
          onChange={(e) => handleChangeUserData(handleSetImage(e.target.files[0]))}
          className='w-full p-2 border border-gray-300 rounded mb-2'
        />
        <div className='flex justify-end'>
          <button onClick={handleCloseModal} className='mr-2 p-2 border rounded'>Cancel</button>
          <button onClick={handleSaveUserData} className='p-2 border rounded bg-blue-500 text-white'>Save</button>
        </div>
      </div>
    </div>
  )
}
