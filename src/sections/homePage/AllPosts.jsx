import { useEffect, useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'
import { fetchAllPosts } from '../../api'
import { CardType1, Pagination } from '../../components'

export const AllPosts = () => {
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchAllPosts(9, 1)
        // Verificar si responseData es un arreglo
        if (responseData && Array.isArray(responseData)) {
          setPosts(responseData)
          setLoader(false)
        } else {
          console.error('Data fetched is not an array:', responseData)
          setPosts([]) // Si no es un arreglo, setPosts a un arreglo vacío
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }

    fetchData()
  }, [])

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
          <h2 className='text-3xl font-bold'>Todos los posts</h2>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {Array.isArray(posts) && posts.map((post, index) => (
              <CardType1
                key={post.postId}
                img={post.postImage}
                title={post.postTitle}
                description={post.postDescription}
                userNickName={post.userNickname}
                postCreated={post.postCreated}
                postId={post.postId}
              />
            ))}
          </div>
          <section>
            <Pagination />
          </section>
        </section>
        )
  )
}
