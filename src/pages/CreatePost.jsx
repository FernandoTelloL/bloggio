import 'animate.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaTrashCan, FaUpload } from 'react-icons/fa6'
import { IoSave } from 'react-icons/io5'
import { MutatingDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { fetchCreatePost } from '../api/api'
import { ComboCategories, TextEditor } from '../components'
import { useUserStore } from '../store/userStore.js'
import { ShowErrorAlert } from '../utils/ShowErrorAlert'
import { usePostStore } from './../store/postStore'
import './CreatePost.css'

export const CreatePost = () => {
  const [mainContent, setMainContent] = useState(null)
  const [imageFile, setImageFile] = useState(null) // Estado para la imagen
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const { id } = useUserStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { getCategory } = usePostStore()

  const onSubmit = async (data) => {
    setLoading(true)

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
      userId: id,
      mainImageUrl: data.mainImageUrl || '',
      published: 1
    }
    const formData = new FormData()
    dataFormatted = JSON.stringify(dataFormatted)
    formData.append('post', new Blob([dataFormatted], { type: 'application/json' }))
    formData.append('file', new Blob([imageFile], { type: 'application/octet-stream' }))

    await fetchCreatePost(formData)
    setLoading(false)
    navigate('/')
  }

  return (
    loading
      ? (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30'>
          <MutatingDots
            visible
            height='100'
            width='100'
            color='#172A99'
            secondaryColor='#69141B'
            radius='12.5'
            ariaLabel='mutating-dots-loading'
          />
        </div>
        )
      : (
        <div className='mb-32 '>
          <h1 className='text-2xl text-center font-extrabold mb-10 pt-12 xl:pt-16 xl:mb-14'>
            CREAR POST
          </h1>
          <div className='flex flex-col md:flex-row justify-between'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-[70%] mx-auto'>
              {/* sección de botones de acción */}
              <div className='flex justify-end gap-8 text-xl bg-white rounded-md sticky top-0 py-4 right-0 z-10 md:text-base md:py-2'>
                <button className='p-4 rounded-full border-red-500 border-2 hover:text-slate-200 hover:scale-110 transition-all'>
                  <FaTrashCan className='text-red-500' />
                </button>
                <button
                  className='p-4 rounded-full border-sky-500 border-2 hover:text-slate-200 hover:scale-110 transition-all'
                  type='submit'
                >
                  <IoSave className='text-sky-500' />
                </button>
                <button className='p-4 rounded-full border-green-600 border-2 hover:text-slate-200 hover:scale-110 transition-all'>
                  <FaUpload className='text-green-600' />
                </button>
              </div>
              {/* cuerpo del formulario */}
              <div className='px-4'>
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
                    {...register('description', { required: true, maxLength: 255, minLength: 3 })}
                    className='w-full border border-slate-300 rounded-lg px-3 py-2 text-sm tracking-wider focus:shadow-md focus:outline-none'
                  />
                  {errors.description?.type === 'required' && (
                    <span className='text-red-500'>
                      La descripción corta es requerida
                    </span>
                  )}
                  {errors.description?.type === 'maxLength' && (
                    <span className='text-red-500'>
                      La descripción corta debe tener menos de 255 caracteres
                    </span>
                  )}
                  {errors.description?.type === 'minLength' && (
                    <span className='text-red-500'>
                      La descripción corta debe tener como mínimo 3 caracteres
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
              </div>
            </form>
          </div>
        </div>
        )
  )
}
