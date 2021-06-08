import React from 'react'
import { Link } from 'react-router-dom';
import pageNotFound from '../pageNotFound.png';
const NotFound = () => {
    return (
        <div>
            <img style={{width:'100vw',
        margin: 'auto',
        border: '3px solid #73AD21'}} src={pageNotFound}  />
            <p style={{textAlign:"center"}}>
              <Link to="/"><h1>Go to Home</h1> </Link>
            </p>
        </div>
    )
}

export default NotFound
