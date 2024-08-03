import { useEffect, useState } from 'react'
import img1 from '../../assets/images/img1.webp'
import { CardType1 } from '../../components'
import {useUserStore} from "../../store/userStore.js";

export const RelatedPostsDetailPostPage = ({ post }) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { userName, userAvatar } = useUserStore()

  console.log(post)

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await fetch(`https://bloggio-api.onrender.com/Post/recommended-post?category-name=${post.categoryDesc}&user-id=${post.user.userId}`)

        console.log(response)

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        if (!data || data.length === 0) {
          setError('No related posts found')
        } else {
          setRelatedPosts(data)
        }
      } catch (error) {
        console.error('Error fetching related posts:', error)
        setError('Error fetching related posts')
      } finally {
        setLoading(false)
      }
    }

    if (post) {
      fetchRelatedPosts()
    }
  }, [post])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <h2 className='font-bold text-3xl'>Posts Relacionados</h2>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {relatedPosts.map((relatedPost, index) => (
          <CardType1
            key={index}
            img={relatedPost.postImage || img1} // Usa una imagen por defecto si no hay imagen en el post relacionado
            imgHeight='h-[140px]'
            title={relatedPost.postTitle}
            userNickName={userName}
            postCreated={new Date(relatedPost.postCreated).toLocaleDateString()}
            description={relatedPost.postDescription}
            postId={relatedPost.postId}
            category={relatedPost.category}
          />
        ))}
      </div>
    </>
  )
}
