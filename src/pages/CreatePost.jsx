import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { TextEditor, ComboCategories } from '../components'
import './CreatePost.css'
import 'animate.css'
import { usePostStore } from './../store/postStore'
import { fetchCreatePost } from '../api/api'
import { ShowErrorAlert } from '../utils/ShowErrorAlert'
import { FaTrashCan, FaUpload } from 'react-icons/fa6'
import { IoSave } from 'react-icons/io5'
import { ENDPOINTS } from '../api/apiEndpoints.js'
import { ShowSuccessAlert } from '../utils/index.js'

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

    let dataFormatted = {
      postId: '',
      categoryId: getCategory().category,
      postContent: data.mainContent,
      postDescription: data.description,
      postPriority: 1,
      postState: 1,
      postTitle: data.title,
      userId: '898a93d0-7070-4044-8e11-897e61667737',
      mainImageUrl: data.mainImageUrl || '',
      published: 1
    }
    const formData = new FormData()
    dataFormatted = JSON.stringify(dataFormatted)
    formData.append('post', new Blob([dataFormatted], { type: 'application/json' }))
    formData.append('file', new Blob([imageFile], { type: 'application/octet-stream' }))
    await fetchCreatePost(formData)
  }

  return (
    <div className='mb-32'>
      <h1 className='text-2xl text-center font-extrabold mb-10 pt-12 xl:pt-16 xl:mb-14'>
        CREAR POST
      </h1>

      <div className=''>

        <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl mx-auto md:flex md:min-w-full md:mx-0 justify-between'>

          {/* sección de botones de acción */}
          <section className='flex md:h-fit justify-end gap-8 text-xl bg-white rounded-md sticky top-0 mb-8 py-4 right-0 z-10 md:order-1 md:text-base'>
            <button className='p-4 rounded-full border-red-500 border-2 md:hover:text-slate-200 md:hover:scale-110 transition-all'>
              <FaTrashCan className='text-red-500' />
            </button>

            <button
              className='p-4 rounded-full border-sky-500 border-2 md:hover:text-slate-200 md:hover:scale-110 transition-all'
              type='submit'
            >
              <IoSave className='text-sky-500' />
            </button>

            <button className='p-4 rounded-full border-green-600 border-2 md:hover:text-slate-200 md:hover:scale-110 transition-all'>
              <FaUpload className='text-green-600' />
            </button>
          </section>

          {/* cuerpo del formulario */}
          <div className='md:text-center md:w-[70%]'>
            <div className='mb-6 md:mb-14'>
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
            <div className='mb-6 md:mb-14'>
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
            <div className='mb-6 md:mb-14'>

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
            <div className='mb-6 md:mb-14'>
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
          </div>

        </form>
      </div>
    </div>
  )
}
