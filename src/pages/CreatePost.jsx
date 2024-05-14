import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { TextEditor, Headers, ComboCategories } from '../components'
import Swal from 'sweetalert2'
import parse from 'html-react-parser'
import './CreatePost.css'
import 'animate.css'
import { useNavigate } from 'react-router-dom'
import { usePostStore } from './../store/postStore'

export const CreatePost = () => {
  const navigate = useNavigate() // Obtenemos la función de navegación del contexto

  const [mainContent, setMainContent] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { getCategory } = usePostStore()

  const onShowErrorAlert = () => {
    Swal.fire({
      title: 'Error!',
      text: 'Es obligatorio contenido en el cuerpo del post.',
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

  const onSubmit = (data) => {
    if (mainContent === null) {
      onShowErrorAlert()
      return
    }
    data.mainContent = mainContent
    console.log(data)

    // URL a la que enviarás la información
    const url = 'https://bloggio-bl.onrender.com/Post/Create'

    // Datos que enviarás en el cuerpo de la petición POST
    const dataFormatted = {
      postId: '',
      categoryId: getCategory().category,
      postContent: data.mainContent,
      postDescription: data.description,
      postPriority: 1,
      postState: 1,
      postTitle: data.title,
      userId: '8f9a3dd3-cb2e-46a1-8f87-68545b2353ba'
    }

    // Configuración de la petición
    const opciones = {
      method: 'POST', // Método POST
      headers: {
        'Content-Type': 'application/json' // Tipo de contenido JSON
      },
      body: JSON.stringify(dataFormatted) // Convertir los datos a JSON
    }

    // Realizar la petición
    fetch(url, opciones)
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un problema con la petición: ' + response.status)
        }
        return response.json() // Convertir la respuesta a JSON
      })
      .then(data => {
        console.log('Respuesta del servidor:', dataFormatted)
      })
      .catch(error => {
        console.error('Error al enviar la petición:', error)
      })

    console.log('usando getCategory', getCategory())
    console.log('data formatted: ', dataFormatted)
    onShowSuccessAlert()
  }

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
          <label htmlFor='subtitle' className='block mb-1'>
            Subtítulo:
          </label>
          <input
            type='text'
            id='subtitle'
            {...register('subtitle', { required: true })}
            className='w-full border border-slate-300 rounded-lg px-3 py-2 text-sm tracking-wider focus:shadow-md focus:outline-none'
          />
          {errors.subtitle && (
            <span className='text-red-500'>El subtitulo es requerido</span>
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
            {...register('mainImage', { required: true })}
            className='w-full border border-gray-300 rounded px-3 py-2 text-sm'
          />
          {errors.mainImage && (
            <span className='text-red-500'>
              La imagen principal es requerida
            </span>
          )}
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
      <ul>
        {/* {parse(`
    <li class="bar">Item 1</li>
    <li>Item 2</li>
  `)} */}
      </ul>
    </>
  )
}
