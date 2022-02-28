import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../UI/Layout/Layout';
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <Layout>
      <div>
        <div className="not-found">
        <div className="not-found-header">
          <h1 className="four-oh-four-header">
            We cannot seem to find the party you are looking for.
          </h1>
          <Link to='/'><button>Return to Homepage</button></Link>
        </div>
      </div>
      </div>
    </Layout>
    
  )
}
