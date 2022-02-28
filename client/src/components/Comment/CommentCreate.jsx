import { useState } from 'react';
import './CommentCreate.css';

export default function CommentCreate(props) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className='comment-form-container'>
      <h3 className='leave-comment'>Leave a Comment</h3>
      <form className='comment-form' onSubmit={(e) => {
        e.preventDefault();
        const comment = {
          title,
          content
        }
        props.handleCommentCreate(comment)
      }}>
        <label className='comment-create-title-label'>Title</label>
        <input
          required
          autoFocus
          type="text"
          value={title}
          placeholder="Title your comment"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className='com-create-content-label'>Content:</label>
        <textarea
          required
          type="text"
          value={content}
          placeholder="Comment content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button>Comment</button>
      </form>
    </div>
  )
}
