import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <Link to='/'>
      <h1>Party Finder</h1>
      </Link>
      <div>
        {props.currentUser ?
        <>
        <h4>Welcome, {props.currentUser.username}!</h4>
        <button onClick={props.logout}>Logout</button>
          </>
          :
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
          }
      </div>
    </div>
  )
}


