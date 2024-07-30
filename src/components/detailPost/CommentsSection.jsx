import { useEffect, useState } from 'react'
import userAvatar from '../../assets/images/user-male-avatar.png'
import { useUserStore } from '../../store/userStore.js';

// eslint-disable-next-line react/prop-types
export const CommentsSection = ({ author, category, date, postId }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const { id } = useUserStore()
  console.log(postId)
  console.log(comments)
  console.log(date)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://bloggio-api.onrender.com/Comment?postId=${postId}`)
        const data = await response.json()
        console.log(data)
        setComments(data)
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }

    fetchComments()
  }, [postId])

  const handleCommentSubmit = async () => {
    const dataFormatted = {
      commentContent: newComment,
      commentId: '',
      commentIdReply: '',
      commentLikes: 0,
      commentState: 1,
      commentTimestampCreate: null,
      commentTimestampUpdate: null,
      postId: postId,
      userId: id
    }

    try {
      const response = await fetch('https://bloggio-api.onrender.com/Comment/Create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataFormatted)
      })
      const data = await response.json()
      setComments(data)
      setNewComment('')
    } catch (error) {
      console.error('Error posting comment:', error)
    }
  }

  return (
    <div className='comments-section border border-gray-400 rounded-lg p-4 text-sm lg:text-xs'>
      <div className='flex gap-3 mb-4'>
        <img src={userAvatar} className='author-photo w-10 h-10 rounded-full' />
        <div>
          <p className='font-bold'>{author}</p>
          <p className='text-gray-500'>Publicado en <span className='font-bold'>{category}</span></p>
          <p>{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
      <div className='responses'>
        <h3 className='font-bold'>COMENTARIOS :</h3>
        {comments.length > 0
          ? (
              comments.map((comment, index) => (
                <div key={index} className='comment '>
                  <div className='flex items-center gap-2 mb-3 p-2 '>
                    <img src={comment.usersDTO.userPhoto} className='author-photo w-10 h-10 rounded-full p-1' />
                    <div className='w-full'>
                      <span className='font-bold'>{comment.usersDTO.userNickname}</span>
                      <p className='bg-slate-300 w-full rounded-lg p-2 text-sm lg:text-xs'>{comment.commentContent}</p>
                    </div>
                  </div>
                </div>
              ))
            )
          : (
            <p>No hay comentarios aún.</p>
            )}
        <div className='new-comment'>

          <textarea
            placeholder='Escribe un comentario...'
            id='new-comment'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className='w-full rounded-lg border border-gray-400 p-2 text-sm lg:text-xs mt-4'
          />
          <button className='bg-secondary text-white rounded-lg p-2 text-sm lg:text-xs mt-4 px-4 font-bold' onClick={handleCommentSubmit}>
            Publicar
          </button>
        </div>
      </div>
    </div>
  )
}
