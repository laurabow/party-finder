import React from 'react'
import './NavBar.css';
import { Link } from "react-router-dom";
import { D20 } from '../../../assets/index.js';

export default function NavBar(props) {
  return (
    <div className='navbar'>
      <div className='party-finder'>
        <Link to='/'>
          <div className='logo'>
            <img className='dice' src={D20} alt="red d 20" height='30px'/>
            <h1>Party Finder</h1>
          </div>
        </Link>
      </div>
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
            <Link to='/posts'><button>Find a Party!</button></Link>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/register'><button>Register</button></Link>
          </>
          }
      </div>
    </div>
  )
}


