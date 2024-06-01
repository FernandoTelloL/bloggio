import { useEffect, useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'
import { fetchGetAllPostByViajesCategory } from '../../api/api'
import { Pagination } from '../../components'

export const TecnologiaPage = () => {
  const [categoryTecnologia, setCategoryTecnologia] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async (filters) => {
    setLoading(true)
    try {
      const data = await fetchGetAllPostByViajesCategory(filters)
      setCategoryTecnologia(data)
    } catch (error) {
      console.error('Error al hacer el fetch:', error)
      setCategoryTecnologia([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData({
      categoryName: 'Tecnologia',
      date_end: '',
      date_start: '',
      limit: 9,
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
            color='#172A99'
            secondaryColor='#69141B'
            radius='12.5'
            ariaLabel='mutating-dots-loading'
          />
        </div>
      )}

      <section>
        <h2 className='text-3xl font-bold lg:mt-16 mb-12'>Listado de Posts de categoria TECNOLOGIA</h2>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 lg:mb-16'>
          {categoryTecnologia.length > 0
            ? (
                categoryTecnologia.map((viaje) => (
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
        <Pagination />
      </section>
    </>
  )
}
