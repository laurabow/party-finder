import React from 'react'
import { Link } from 'react-router-dom';

// make post card and replace post details with the card component

export default function Posts(props) {
  return (
    <div>
      {
        props.currentUser &&
        <Link to='/posts/create'>Create a Party!</Link>
      }
      {
        props.posts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <h3>{post.game_system}</h3>
            <h3>{post.day} at TIME</h3>
            <p>{post.description}</p>
          </Link>
        ))
      }
    </div>
  )
}
