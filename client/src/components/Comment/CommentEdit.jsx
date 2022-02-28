import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOnePostComment, updateComment } from '../../services/comments';

export default function CommentEdit(props) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id, post_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // const foundComment = props.comments.find(comment => {
    //   return comment.id === parseInt(id);
    // })
    const foundComment = async () => {
      const comment = await getOnePostComment(post_id, id)
      setTitle(comment?.title)
      setContent(comment?.content)
    }
    foundComment();
    // if (foundComment) {
    //   setTitle(foundComment?.title)
    //   setContent(foundComment?.content)
    // }
  }, [id, post_id]);

  const handleCommentEdit = async (post_id, id, formData) => {
    await updateComment(post_id, id, formData)
    // setToggle(prevToggle => !prevToggle)
    navigate(`/posts/${post_id}`)
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const comment = {
          title,
          content
        }
        handleCommentEdit(post_id, id, comment)
      }}>
        <label>Title</label>
        <input
          autoFocus
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>Edit Comment</button>
      </form>
    </div>
  )
}
