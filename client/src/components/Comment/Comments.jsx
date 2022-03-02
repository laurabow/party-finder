import React from 'react'
import { Link } from 'react-router-dom';
import './Comments.css';



export default function Comments(props) {
  console.log(props.comments)
  
  return (
      <div>
        {props.comments &&
          props.comments.map(comment => (
            <div key={comment.id} className='comment-card'>
              <div className='comment-card-title'>
                <h4>{comment.title}</h4>
                <h5>Player: {comment.user?.username}</h5>
              </div>
              <p>{comment.content}</p>
              {
                props.currentUser?.id === comment.user_id ?
                  <div className='post-detail-btns'>
                    <Link to={`/posts/${props.post?.id}/comments/${comment.id}/edit`}>
                      <button id="edit-comment-btn">Edit</button>
                    </Link>
                    <button id="delete-comment-btn"
                      onClick={() => props.handleCommentDelete(comment.id)}
                    >
                      Delete
                    </button>
                  </div>
                  :
                  null
              }
            </div>
          ))
        }
      </div>

  )
}
