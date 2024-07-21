import { useEffect, useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'
import { fetchAllPosts } from '../../api'
import { CardType1, Pagination } from '../../components'

export const AllPosts = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 })
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchAllPosts(6, page.currentPage)
        console.log(responseData)
        // Verificar si responseData tiene la estructura esperada
        if (responseData && responseData.data && typeof responseData.page === 'number' && typeof responseData.total === 'number') {
          setPosts(responseData.data)
          setPage({
            currentPage: responseData.page, // Página actual
            totalPages: Math.ceil(responseData.total / 6) // Total de páginas
          })
          setLoader(false)
        } else {
          console.error('Data fetched is not in the expected format:', responseData)
          setPosts([]) // Si no es el formato esperado, setPosts a un arreglo vacío
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }

    fetchData()
  }, [page.currentPage])

  const handlePageChange = (newPage) => {
    setPage(prevPage => ({ ...prevPage, currentPage: newPage }))
  }

  return (
    loader
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
        <section>
          <h2 className='text-3xl font-bold mb-6'>Todos los posts</h2>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {Array.isArray(posts) && posts.map(post => (
              <CardType1
                key={post.postId}
                img={post.postImage}
                title={post.postTitle}
                description={post.postDescription}
                userNickName={post.userNickname}
                postCreated={post.postCreated}
                postId={post.postId}
                category={post.categoryName}
              />
            ))}
          </div>
          <section className='mt-6'>
            <Pagination
              currentPage={page.currentPage}
              totalPages={page.totalPages}
              onPageChange={handlePageChange}
            />
          </section>
        </section>
        )
  )
}
