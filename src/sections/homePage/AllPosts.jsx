import { useState, useEffect } from 'react'
import { CardType1, Pagination } from '../../components'
import { fetchAllPosts } from '../../api'

export const AllPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchAllPosts(9, 1)
        console.log(responseData)
        // Verificar si responseData es un arreglo
        if (responseData && Array.isArray(responseData)) {
          setPosts(responseData)
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
    <section>
      <h2 className='text-3xl font-bold'>All blog posts</h2>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {Array.isArray(posts) && posts.map((post, index) => (
          <CardType1
            key={post.postId}
            img={post.postImage}
            imgHeight='h-50'
            title={post.postTitle}
            description={post.postDescription}
          />
        ))}
      </div>
      <section>
        <Pagination />
      </section>
    </section>
  )
}
