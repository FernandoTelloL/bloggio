import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { TextEditor, Headers, ComboCategories } from '../components'
import Swal from 'sweetalert2'
// import parse from 'html-react-parser'
import './CreatePost.css'
import 'animate.css'
import { useNavigate } from 'react-router-dom'
import { usePostStore } from './../store/postStore'

export const CreatePost = () => {
  const navigate = useNavigate() // Obtenemos la función de navegación del contexto

  const [mainContent, setMainContent] = useState(null)
  const [imageFile, setImageFile] = useState(null) // Estado para la imagen
  const basepath = 'https://bloggio-api.onrender.com'

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { getCategory } = usePostStore()

  // mensaje de error
  const onShowErrorAlert = (text) => {
    Swal.fire({
      title: 'Error!',
      text,
      icon: 'error',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'my-custom-alert',
        content: 'my-custom-alert-content',
        confirmButton: 'my-custom-confirm-button'
      },
      confirmButtonText: 'OK'
    })
  }

  // mensaje de exito
  const onShowSuccessAlert = () => {
    Swal.fire({
      title: '¡Éxito!',
      text: 'Tu post se ha creado correctamente. Seras redirigido a la página principal.',
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'my-custom-alert',
        content: 'my-custom-alert-content',
        confirmButton: 'my-custom-confirm-button'
      },
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/') // Navegamos a la página principal
      }
    })
  }

  // const onSubmit = async (data) => {
  //   if (mainContent === null) {
  //     onShowErrorAlert('Es obligatorio contenido en el cuerpo del post.')
  //     return
  //   }
  //   data.mainContent = mainContent

  //   const dataFormatted = {
  //     postId: '',
  //     categoryId: getCategory().category,
  //     postContent: data.mainContent,
  //     postDescription: data.description,
  //     postPriority: 1,
  //     postState: 1,
  //     postTitle: data.title,
  //     userId: '8f9a3dd3-cb2e-46a1-8f87-68545b2353ba',
  //     mainImageUrl: data.mainImageUrl || '',
  //     published: 1
  //   }

  //   const formData = new FormData()
  //   const blob = new Blob([imageFile], { type: 'application/octet-stream' })
  //   formData.append('post', JSON.stringify(dataFormatted))
  //   formData.append('file', blob)

  //   const url = `${basepath}/Post/Create`

  //   const opciones = {
  //     method: 'POST',
  //     body: formData
  //   }

  //   fetch(url, opciones)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Hubo un problema con la petición: ' + response.status)
  //       }
  //       onShowSuccessAlert()
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log('Respuesta del servidor:', data)
  //     })
  //     .catch(error => {
  //       console.error('Error al enviar la petición:', error)
  //       onShowErrorAlert(`${error}`)
  //     })
  // }

  const onSubmit = async (data) => {
    if (mainContent === null) {
      onShowErrorAlert('Es obligatorio contenido en el cuerpo del post.')
      return
    }
    data.mainContent = mainContent

    const dataFormatted = {
      postId: '',
      categoryId: getCategory().category,
      postContent: data.mainContent,
      postDescription: data.description,
      postPriority: 1,
      postState: 1,
      postTitle: data.title,
      userId: '8f9a3dd3-cb2e-46a1-8f87-68545b2353ba',
      mainImageUrl: data.mainImageUrl || '',
      published: 1
    }

    const formData = new FormData()
    const blob = new Blob([imageFile], { type: 'application/octet-stream' })
    formData.append('post', JSON.stringify(dataFormatted))
    formData.append('file', blob)

    const url = `${basepath}/Post/Create`

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Hubo un problema con la petición: ' + response.status)
      }

      const result = await response.json()
      onShowSuccessAlert()
      console.log('Respuesta del servidor:', result)
    } catch (error) {
      console.error('Error al enviar la petición:', error)
      onShowErrorAlert('Error al enviar la petición: ' + error.message)
    }
  }

  return (
    <>
      <Headers />
      <h1 className='text-2xl text-center font-extrabold mb-10 pt-12 xl:pt-16 xl:mb-14'>
        CREAR POST
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl mx-auto'>
        <div className='mb-6'>
          <label htmlFor='title' className='block mb-1'>
            Título Principal:
          </label>
          <input
            type='text'
            id='title'
            {...register('title', { required: true })}
            className='w-full border border-slate-300 rounded-lg px-3 py-2 text-sm tracking-wider focus:shadow-md focus:outline-none'
          />
          {errors.title && (
            <span className='text-red-500'>
              El título principal es requerido
            </span>
          )}
        </div>

        <div className='mb-6'>
          <label htmlFor='description' className='block mb-1'>
            Descripción Corta:
          </label>
          <textarea
            id='description'
            {...register('description', { required: true })}
            className='w-full border border-slate-300 rounded-lg px-3 py-2 text-sm tracking-wider focus:shadow-md focus:outline-none'
          />
          {errors.description && (
            <span className='text-red-500'>
              La descripción corta es requerida
            </span>
          )}
        </div>

        <div className='mb-6'>
          <label htmlFor='mainImage' className='block mb-1'>
            Imagen Principal:
          </label>
          <input
            type='file'
            id='mainImage'
            onChange={(e) => setImageFile(e.target.files[0])}
            className='w-full border border-gray-300 rounded px-3 py-2 text-sm'
          />
        </div>

        <div className='mb-6'>
          <label htmlFor='body' className='block mb-1'>
            Cuerpo del Post:
          </label>
          <TextEditor
            mainContent={mainContent}
            setMainContent={setMainContent}
          />
        </div>

        <div className='mb-10'>
          <p>Seleccione categoría del post</p>
          <ComboCategories />
        </div>

        <div className='mb-6 flex flex-col'>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 leading-8'
          >
            Publicar
          </button>
          <button
            type='button'
            className='bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mb-4 leading-8'
          >
            Guardar en Borrador
          </button>
          <button
            type='button'
            className='bg-red-500 text-white px-4 py-2 rounded-lg leading-8'
          >
            Descartar
          </button>
        </div>
      </form>
    </>
  )
}
