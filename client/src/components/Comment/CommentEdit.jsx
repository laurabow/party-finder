import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CommentEdit(props) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const foundComment = props.comments.find(comment => {
      return comment.id === parseInt(id);
    })
    if (foundComment) {
      setTitle(foundComment?.title)
      setContent(foundComment?.content)
    }
  }, [id, props.comments]);

  return (
    <div><form onSubmit={(e) => {
      e.preventDefault();
      const comment = {
        title,
        content
      }
      props.handleCommentEdit(id, comment)
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
    </form></div>
  )
}
