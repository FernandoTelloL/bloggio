import { useEffect, useState } from 'react'
import { Pagination } from '../../components'
import { MutatingDots } from 'react-loader-spinner'

export const ViajesPage = () => {
  const [categoryViajes, setCategoryViajes] = useState([])
  const [loading, setLoading] = useState(false)
  const basepath = 'https://bloggio-api.onrender.com'

  const fetchData = async (filters) => {
    setLoading(true)
    try {
      const response = await fetch(`${basepath}/Post/find-all-by-filters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filters)
      })
      if (!response.ok) {
        throw new Error(`Error al cargar los datos: ${response.status} ${response.statusText}`)
      }
      const result = await response.json()
      // Asegúrate de que `result.data` es un array
      if (Array.isArray(result.data)) {
        setCategoryViajes(result.data)
      } else {
        console.error('La respuesta de la API no contiene un array en `data`:', result.data)
        setCategoryViajes([])
      }
    } catch (error) {
      console.error('Error al hacer el fetch:', error)
      setCategoryViajes([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData({
      categoryName: '',
      date_end: '',
      date_start: '',
      limit: 10,
      offset: 1,
      postTitle: ''
    })
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
        <h2 className='text-3xl font-bold lg:mt-16 mb-12'>Listado de Posts de categoria VIAJES</h2>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 lg:mb-16'>
          {categoryViajes.length > 0
            ? (
                categoryViajes.map((viaje) => (
                  <div key={viaje.postId} className='card'>
                    <img src={viaje.postImage} alt={viaje.postTitle} className='card-img-top' />
                    <div className='card-body'>
                      <h5 className='card-title'>{viaje.postTitle}</h5>
                      <p className='card-text'>{viaje.postDescription}</p>
                      <p className='card-text'><small className='text-muted'>By {viaje.userNickname} on {new Date(viaje.postCreated).toLocaleDateString()}</small></p>
                    </div>
                  </div>
                ))
              )
            : (
              <p>No hay resultados.</p>
              )}
        </div>
        <section className='mb-12 lg:mb-24'>
          <Pagination />
        </section>
      </section>
    </>
  )
}
