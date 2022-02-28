import React from 'react'
import moment from 'moment';
import './Posts.css';
import { Link } from 'react-router-dom';
import Layout from '../UI/Layout/Layout';

// make post card and replace post details with the card component

export default function Posts(props) {

  const getPostMoment = (post) => {
    return `${post.day}'s at ${moment(post.time.substring(0, 19)).format('LT')}`
  }

  return (
    <Layout>
      <div className='find-party'>
        <h1 className='find-party-title'>Find a Party!</h1>
        {
          props.currentUser &&
          <Link to='/posts/create'><button>Create a Party!</button></Link>
        }
        <div>
          {
            props.posts.map(post => (
              <Link key={post.id} to={`/posts/${post.id}`}>
                <div className='post-card'>
                  <h2>{post.title}</h2>
                  {/* <h3>{post.user.username}</h3> */}
                  <h3>{post.game_system}</h3>
                  <h3>{getPostMoment(post)}</h3>
                  <p>{post.description}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}
