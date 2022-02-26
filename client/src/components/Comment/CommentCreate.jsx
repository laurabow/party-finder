import { useState } from 'react';

export default function CommentCreate(props) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const comment = {
          title,
          content
        }
        props.handleCommentCreate(comment)
      }}>
        <label>Title</label>
        <input
          required
          autoFocus
          type="text"
          value={title}
          placeholder="Title your comment"
          onChange={(e) => setTitle(e.target.value)}
        />
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
