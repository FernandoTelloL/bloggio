import { useEffect, useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'
import { fetchGetAllPostBySaludCategory } from '../../api/api'
import { Pagination } from '../../components'
import { useNavigate } from 'react-router-dom'

export const SaludPage = () => {
  const [categorySalud, setCategorySalud] = useState([])
  console.log(categorySalud)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(9)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const fetchData = async (filters) => {
    setLoading(true)
    try {
      const data = await fetchGetAllPostBySaludCategory(filters)
      console.log(data)
      setCategorySalud(data)
    } catch (error) {
      console.error('Error al hacer el fetch:', error)
      setCategorySalud([])
    } finally {
      setLoading(false)
    }
  }

  const redirectToPost = (postId) => {
    navigate(`/detail-post/${postId}`)
  }

  useEffect(() => {
    fetchData({
      categoryName: 'Salud',
      date_end: '',
      date_start: '',
      limit: 9,
      offset: 1,
      postTitle: ''
    })
  }, [limit, page])

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
        <h2 className='text-3xl font-bold lg:mt-16 mb-12'>Listado de Posts de categoria SALUD</h2>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 lg:mb-16'>
          {categorySalud.length > 0
            ? (
                categorySalud.map((viaje) => (
                  <div key={viaje.postId} className='card cursor-pointer' onClick={() => redirectToPost(viaje.postId)}>
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
