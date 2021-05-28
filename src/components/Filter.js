import React from 'react'

import './filter.css';
import StarRatings from 'react-star-ratings';



function Filter({handleChange,handleSearchRating})
{
     return (
    
    <div className="btn">
      <form>
      <input
        type="search"
        placeholder="Search by title..."
       onChange={(e)=>handleChange(e.target.value)}
      />
     
        
     <StarRatings
        numberOfStars={5}
        starDimension="40px"
        starSpacing="15px"
        starRatedColor="yellow"
        changeRating={handleSearchRating}
        rating={3.5}
     
       
      />  
        
    
      </form>
      
   
   
                
            
   
   

</div>
)
}

export default Filter;
