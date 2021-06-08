import React from 'react';
import {Link} from 'react-router-dom';




const Nav = () => {
    return (
        
      <div style ={{width:'100vw',
        margin: 'auto',
        border: '3px solid #73AD21'}}>
      <nav className="navbar navbar-light bg-light">
              
              <Link className="navbar-text" to="/">

              <h1 style={{ textAlign: "center" , width: "100%", display: "inline-block"}}> 🎬 Movie App 🎥 </h1>  

              </Link>
              </nav>
            </div>
           

             
           
           
    );
  }
    


export default Nav
