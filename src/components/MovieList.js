import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard/MovieCard';
import './MovieCard/MovieCardStyle.css'





const MovieList = (props) => (
    
        <div className="card-card">
            {
                props.movies.map((movie,id) =>  <MovieCard movie={movie} id={id} /> 
              
             
                
                
                )
               
              
               
                
                
            }
             
        </div>
      

);

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array
};

export default MovieList;
