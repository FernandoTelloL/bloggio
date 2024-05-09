import { useState, useEffect, useContext } from 'react'
import { CardCategory, Pagination } from '../../components'
import { CategoryContext } from '../../context/CategoryContext'

export const AllPostsCategories = () => {
  // const { setCategory, category } = useContext(CategoryContext)

  // useEffect para obtener los TIPOS de control del API al cargar la pagina
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // aqui la direccion del back con el ARRAY DE OBJETOS CON LOS TIPOS DE CONTROL
  //       // const response = await fetch(`http://localhost:7878/Category/GetAll`)

  //       // if (!response.ok) {
  //       //   throw new Error(
  //       //     `Error al cargar los datos: ${response.status} ${response.statusText}`
  //       //   )
  //       // }

  //       // const category = await response.json()
  //       // setCategory(category)
  //       // esta linea es temporal por el json
  //       setCategory(categories)
  //     } catch (error) {
  //       console.error('Error al hacer el fetch:', error)
  //     }
  //   }
  //   fetchData()
  // }, [setCategory])

  const categories = [
    {

      id: 1,
      name: 'Tecnología',
      image: 'https://cdn.pixabay.com/photo/2022/02/15/09/36/server-7014547_1280.jpg',
      description: 'Artículos relacionados con la última tecnología.'
    },
    {
      id: 2,
      name: 'Viajes',
      image: 'https://cdn.pixabay.com/photo/2022/10/04/23/33/mountains-7499281_1280.jpg',
      description: 'Descubre nuevos destinos y aventuras emocionantes.'
    },
    {
      id: 3,
      name: 'Cocina',
      image: 'https://cdn.pixabay.com/photo/2016/01/31/14/32/architecture-1171462_640.jpg',
      description: 'Recetas deliciosas y consejos de cocina.'
    },
    {
      id: 4,
      name: 'Deportes',
      image: 'https://cdn.pixabay.com/photo/2016/11/14/03/38/achieve-1822503_1280.jpg',
      description: 'Noticias y análisis sobre deportes populares.'
    },
    {
      id: 5,
      name: 'Salud',
      image: 'https://cdn.pixabay.com/photo/2016/08/10/20/26/blood-pressure-1584223_1280.jpg',
      description: 'Noticias y consejos sobre salud y bienestar.'
    },
    {
      id: 6,
      name: 'Paternidad',
      image: 'https://cdn.pixabay.com/photo/2018/01/31/09/42/people-3120717_640.jpg',
      description: 'Consejos y tips para una paternidad responsable'
    }
  ]

  return (
    <section>
      <h2 className='text-3xl font-bold lg:mt-16'>Todas Nuestras Categorias</h2>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
        {categories.map(({ id, image, name, description }) => (
          <CardCategory
            key={id}
            img={image}
            imgHeight='max-h-64'
            title={name}
            description={description}
          />
        ))}
      </div>
      <section className='mb-12'>
        <Pagination />
      </section>
    </section>
  )
}
