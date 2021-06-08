import React from 'react';
import { Link} from 'react-router-dom';
import back from '../back.jpg';
import '../App.css';

const Footer = () => {
    return (
        <div>
          <div>
          <Link  to="/">
           <img style={{ marginLeft:'20px', marginTop:'25px',border: '1px solid #4CAF50'}} src={back}  className="back-src" alt="return"/>
             </Link>
            </div> 
           
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
            Hanen Ghribi
            </span>
            , Using <i className="fab fa-react" /> React JS 
          </div>

        </div>
    
        
    )
}

export default Footer
