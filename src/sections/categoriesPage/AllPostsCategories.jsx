import { useEffect, useState } from 'react'
import { CardCategory, Pagination } from '../../components'
import { MutatingDots } from 'react-loader-spinner'

export const AllPostsCategories = () => {
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(category)

  const basepath = 'https://bloggio-api.onrender.com'
  // useEffect para obtener las categorias
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        // aqui la direccion del back con el ARRAY DE OBJETOS CON LAS CATEGORIAS
        const response = await fetch(`${basepath}/api/v1/Category/GetAll`)
        if (!response.ok) {
          throw new Error(
            `Error al cargar los datos: ${response.status} ${response.statusText}`
          )
        }

        const data = await response.json()
        setCategory(data)
      } catch (error) {
        console.error('Error al hacer el fetch:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {loading && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30'>
          <MutatingDots
            visible
            height='100'
            width='100'
            color='#4fa94d'
            secondaryColor='#4fa94d'
            radius='12.5'
            ariaLabel='mutating-dots-loading'
          />
        </div>
      )}

      <section>
        <h2 className='text-3xl font-bold lg:mt-16'>Todas Nuestras Categorias</h2>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 lg:mb-16'>
          {category.map(({ categoryId, categoryImage, categoryName, categoryDesc }) => (
            <CardCategory
              key={categoryId}
              img={`https://res.cloudinary.com/dbxivsisb/image/upload/v1715565237/${categoryImage}`}
              imgHeight='max-h-64'
              title={categoryName}
              description={categoryDesc}
            />
          ))}
        </div>
        <section className='mb-12 lg:mb-24'>
          <Pagination />
        </section>
      </section>
    </>
  )
}
