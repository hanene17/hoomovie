
import React from 'react';
import Rating from  '../Rating'
import './MovieCardStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';


const MovieCard = (props) => {
	return (

		
		<div className= "movie-card">
        <div className="movie-card card">
					   <Link to= {`/${props.movie.title}`}> 
                       <img  src={props.movie.posterUrl} alt='movie'></img>
                       </Link>
                        <br/>
                        <h4>{props.movie.title}</h4> <br/>
                 
                    <div  className="text-justify" style={{fontSize: '12px'}}>{props.movie.description} </div> <br/>
                    <Link className="btn btn-primary" to={`/${props.movie.title}`}>
                     Movie Details 
            <i className="fas fa-chevron-right" />
          </Link>
                    <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left mt-1">
                        <Rating rate={props.movie.rating} />
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.movie.rating}</div> 
                </div>
            </div>
            </div>
            </div>
            
            
           
            
            
               
            
        
			
	
	);
};


export default MovieCard;
