
import React from 'react';
import Rating from  '../Rating'
import './MovieCardStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieCard = (props) => {
	return (
		
		<div className="movie-card">
        <div className="movie-card card">
					    <img  src={props.movie.posterUrl} alt='movie'></img> <br/>
                        <h4>{props.movie.title}</h4> <br/>
                    <p className="text-justify" style={{fontSize: '14px'}}>{props.movie.description}</p> <br/>
                    
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
