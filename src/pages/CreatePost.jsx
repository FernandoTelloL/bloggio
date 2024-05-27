import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { TextEditor, ComboCategories } from '../components'
import './CreatePost.css'
import 'animate.css'
import { usePostStore } from './../store/postStore'
import { fetchCreatePost } from '../api/api'
import { ShowErrorAlert } from '../utils/ShowErrorAlert'

export const CreatePost = () => {
  const [mainContent, setMainContent] = useState(null)
  const [imageFile, setImageFile] = useState(null) // Estado para la imagen

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { getCategory } = usePostStore()
  console.log(mainContent)
  const onSubmit = async (data) => {
    if (mainContent === null) {
      ShowErrorAlert('Es obligatorio contenido en el cuerpo del post.')
      return
    }
    data.mainContent = mainContent
    console.log(data)

    const dataFormatted = {
      postId: '',
      categoryId: getCategory().category,
      postContent: data.mainContent,
      postDescription: data.description,
      postPriority: 1,
      postState: 1,
      postTitle: data.title,
      userId: '2eb23861-cdc1-4291-b5cc-95a690c29454',
      mainImageUrl: data.mainImageUrl || '',
      published: 1
    }
    console.log(dataFormatted)
    console.log(imageFile)
    const formData = new FormData()
    const blob = new Blob([imageFile], { type: 'application/octet-stream' })
    formData.append('post', JSON.stringify(dataFormatted))
    formData.append('file', blob)
    console.log(formData)
    await fetchCreatePost(formData)
  }

  return (
    <>
      <h1 className='text-2xl text-center font-extrabold mb-10 pt-12 xl:pt-16 xl:mb-14'>
        CREAR POST
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl mx-auto'>
        <div className='mb-6'>

          {/* titulo principal */}
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

        {/* descripcion corta */}
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

        {/* seleccionar imagen */}
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

        {/* text editor */}
        <div className='mb-6'>
          <label htmlFor='body' className='block mb-1'>
            Cuerpo del Post:
          </label>
          <TextEditor
            mainContent={mainContent}
            setMainContent={setMainContent}
          />
        </div>

        {/* combo de categorias */}
        <div className='mb-10'>
          <p>Seleccione categoría del post</p>
          <ComboCategories />
        </div>

        {/* botones de accion */}
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
