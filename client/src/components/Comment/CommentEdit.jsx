import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOnePostComment, updateComment } from '../../services/comments';
import Layout from '../UI/Layout/Layout';
import './CommentEdit.css';

export default function CommentEdit(props) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id, post_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundComment = async () => {
      const comment = await getOnePostComment(post_id, id)
      setTitle(comment?.title)
      setContent(comment?.content)
    }
    foundComment();
  }, [id, post_id]);

  const handleCommentEdit = async (post_id, id, formData) => {
    await updateComment(post_id, id, formData)
    navigate(`/posts/${post_id}`)
  }

  return (
    <Layout>
      <div className='edit-comment-page'>
        <h1 className='edit-comment-title'>Edit Your Comment</h1>
        <div className='edit-com-form-container'>
          <form className='edit-comment-form'
            onSubmit={(e) => {
            e.preventDefault();
            const comment = {
              title,
              content
            }
            handleCommentEdit(post_id, id, comment)
          }}>
            <label className='edit-com-title'>Title</label>
            <input
              autoFocus
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className='edit-com-content'>Content</label>
            <textarea
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button className='edit-com-form-btn'>Edit Comment</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
