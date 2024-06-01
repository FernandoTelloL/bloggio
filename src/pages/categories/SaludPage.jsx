import { useEffect, useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'
import { fetchGetAllPostBySaludCategory } from '../../api/api'
import { Pagination } from '../../components'

export const SaludPage = () => {
  const [categorySalud, setCategorySalud] = useState([])
  console.log(categorySalud)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(9)
  const [loading, setLoading] = useState(false)

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

  useEffect(() => {
    fetchData({
      categoryName: 'Salud',
      date_end: '',
      date_start: '',
      limit: 10,
      offset: 1,
      postTitle: ''
    })
  }, [limit, page])

  return (
    <div>
      {/* create grid to cards with tailwind */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {categorySalud.map((post) => (
          <div key={post.postId} className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>
            <div className='card' key={post.postId}>
              <div className='card-body'>
                <h3 className='card-title'>{post.postTitle}</h3>
                <p className='card-text'>{post.postContent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {
        categorySalud.length > 0 && (
          <>
            <Pagination
              page={page}
              setPage={setPage}
              limit={limit}
              setLimit={setLimit}
            />
          </>
        )
      }
    </div>
  )
}
