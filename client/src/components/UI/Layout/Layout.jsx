import React from 'react';
import Footer from '../Footer/Footer';


export default function Layout(props) {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  )
}
