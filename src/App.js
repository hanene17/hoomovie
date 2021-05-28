import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MovieList from './components/MovieList';
import './App.css';
import Add from './components/Add';

import Filter from './components/Filter';



function App () {
  
  
  const movies =  [
    {
        title:"Mission Impossible 3" ,
        description: "2006 American action spy film co-written and directed by J. J. Abrams (in his directorial debut), co-written by Alex Kurtzman and Roberto Orci, and co-produced by and starring Tom Cruise in the role of IMF agent Ethan Hunt. It is the third installment in the Mission: Impossible film series,",
        posterUrl: "https://images-na.ssl-images-amazon.com/images/I/91EtQD0P0dL._SL1500_.jpg" ,
        rating:4.5 ,
    },
    {
      title:"THE X-FILES " ,
      description: "The X-Files is an American science fiction drama television series created by Chris Carter. The original television series aired from September 10, 1993 to May 19, 2002 on Fox. The program spanned nine seasons, with 202 episodes.",
     posterUrl: "https://images-na.ssl-images-amazon.com/images/I/51QB68KSHEL.jpg" ,
      rating:3 ,
  },
  {
    title:"PARKER" ,
    description:"Parker is a 2013 American action thriller film directed by Taylor Hackford and written by John J. McLaughlin. Starring Jason Statham and Jennifer Lopez, the film is adapted from Flashfire, the 19th Parker novel, written by Donald Westlake under the pen name Richard Stark.",
    posterUrl: "https://i.pinimg.com/474x/30/bb/bc/30bbbcc70e48961b8b216c8ceb536892--parker--action-movies.jpg" ,
    rating:"5" ,
},

];

const [newList, setNewList] = useState(movies)

const AddMovie=(x)=>{
setNewList([...newList,x])
}

const [searchItem, setSearchItem] = useState("")
const handleChange=(c)=>{
  setSearchItem(c)
}
const [searchItemRating, setSearchItemRating] = useState(0)
const handleSearchRating=(c)=>{
  setSearchItemRating(c)
}




return (
    
    <div className='container-fluid movie-app'>
     <Add AddMovie={AddMovie} />
    <div className='row justify-content-flex-start'>
    <Filter  handleChange={handleChange} handleSearchRating={handleSearchRating} />
   <MovieList movies={newList.filter((movie)=>(movie.title.toLowerCase().includes(searchItem.toLocaleLowerCase()) && (movie.rating) >= (searchItemRating))
   
  )}
 

  />
   
    
    </div>
    
  </div>
  
  );
}

export default App;
