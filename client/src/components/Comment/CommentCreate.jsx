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
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          required
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>Comment</button>
      </form>
    </div>
  )
}
