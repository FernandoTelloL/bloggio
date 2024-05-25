import { useState, useEffect } from 'react'
import { CardType1, Pagination } from '../../components'

export const AllPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bloggio-api.onrender.com/Post/GetAllPostByDateAndPage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            limit: 10,
            offset: 1
          })
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const responseData = await response.json()
        console.log(responseData)

        // Verificar si responseData.data es un arreglo
        if (responseData.data && Array.isArray(responseData.data)) {
          setPosts(responseData.data)
        } else {
          console.error('Data fetched is not an array:', responseData.data)
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
