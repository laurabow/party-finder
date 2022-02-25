import React from 'react'
import { Link } from "react-router-dom";

export default function (props) {
  return (
    <div>
      <Link to='/'>
      <h1>Party Finder</h1>
      </Link>
      {props.CurrentUser ?
      <div>
      <h4>Welcome, {props.currentUser.username}!</h4>
      <button onClick={props.logout}>Logout</button>
        </div>
        :
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
    }
    </div>
  )
}


