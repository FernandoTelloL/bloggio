import React, { useEffect, useState } from 'react'
import imgUserAvatar from '../../src/assets/images/user-male-avatar.png'
import { useUserStore } from '../store/userStore'
import { ShowErrorAlert, ShowSuccessAlert } from '../utils/index.js'
import Swal from 'sweetalert2'
import { EditProfileModal } from './profile/EditProfileModal.jsx'
import { MyPost } from './profile/MyPost.jsx'

export const MyProfile = () => {
  const { userShortBio, userName, id, userAvatar } = useUserStore()
  const [imageFile, setImageFile] = useState(null) // Estado para la imagen
  const [modalOpen, setModalOpen] = useState(false)
  const [userData, setUserData] = useState({
    nickname: '',
    shortbio: '',
    avatar: null
  })

  const handleEditProfileClick = () => {
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

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
      <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <MyPost
          userId={id}
        />
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
        onCloseModal={handleCloseModal}
        handleSetImage={handleSetImage}
      />
    </div>
  )
}
