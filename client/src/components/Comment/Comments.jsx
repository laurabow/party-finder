import React from 'react'
import Layout from '../UI/Layout/Layout';

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
                    <button>Edit</button>
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
