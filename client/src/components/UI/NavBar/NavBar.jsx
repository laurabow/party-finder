import React from 'react'
import './NavBar.css';
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className='navbar'>
      <Link to='/'>
      <h1>Party Finder</h1>
      </Link>
      <div className='welcome-buttons'>
        {props.currentUser ?
        <div className='welcome-buttons'>
            <h4>Welcome, {props.currentUser.username}!</h4>
            <Link to='/posts'><button>Find a Party!</button></Link>
            <Link to='/posts/create'><button>Create a Party!</button></Link>
        <button onClick={props.logout}>Logout</button>
          </div>
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


