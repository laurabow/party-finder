import React from 'react';
import NavBar from '../NavBar/NavBar';
import LoggedInNavBar from '../NavBar/LoggedInNavBar';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  )
}
