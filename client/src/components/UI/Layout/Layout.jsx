import React from 'react';
import NavBar from '../NavBar/NavBar';
import LoggedInNavBar from '../NavBar/LoggedInNavBar';
import Footer from '../Footer/Footer';

// moved navbar to app.js for logout and current user stuff

export default function Layout(props) {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  )
}
