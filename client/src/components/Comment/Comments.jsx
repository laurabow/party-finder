import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../UI/Layout/Layout';
import CommentEdit from './CommentEdit';

export default function Comments(props) {
  console.log(props.comments)
  return (
    <Layout>
      <div>
        {props.comments &&
          props.comments.map(comment => (
            <div key={comment.id}>
              <h3>{comment.title}</h3>
              {/* <h4>Author: {comment.user.username}</h4> */}
              <p>{comment.content}</p>
              {
                props.currentUser?.id === comment.user_id ?
                  <div>
                    <Link to={`/comments/${comment.id}/edit`}>
                      <button>Edit</button>
                    </Link>
                    <button
                      onClick={() => props.handleCommentDelete(comment.id)}>
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
    </Layout>
  )
}
