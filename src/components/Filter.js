import React from 'react'

import './filter.css';






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
      <input
        type="search"
        placeholder="Search by rating..."
        onChange={(e)=>handleSearchRating(e.target.value)}

      />
     
      </form>
  
   
   
                
            
   
   

</div>
)
}

export default Filter;
