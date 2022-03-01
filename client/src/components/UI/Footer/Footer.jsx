import React from 'react'
import { Github, linkedin } from '../../../assets/index';
import './Footer.css';


export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <a
          href='https://github.com/laurabow'
          target="_blank"
          rel='noopener noreferrer'
        >
          <img src={Github} alt='github' />
        </a>
        <a
          href='https://www.linkedin.com/in/laura-kappa-bowman/'
          target="_blank"
          rel='noopener noreferrer'
        >
          <img src={linkedin} alt='linkedin' />
        </a>
      </div>
    </div>
  )
}
