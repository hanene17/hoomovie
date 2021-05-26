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
        description: "action movie",
        posterUrl: "https://images-na.ssl-images-amazon.com/images/I/91EtQD0P0dL._SL1500_.jpg" ,
        rating:4.5 ,
    },
    {
      title:"THE X-FILES " ,
      description: "action movie",
      posterUrl: "https://images-na.ssl-images-amazon.com/images/I/51QB68KSHEL.jpg" ,
      rating:3 ,
  },
  {
    title:"PARKER" ,
    description:"action movie",
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
   <MovieList movies={newList.filter((movie)=>(movie.title.toLowerCase().includes(searchItem.toLocaleLowerCase())&&movie.rating>=searchItemRating)
   
  )}
 

  />
   
    
    </div>
    
  </div>
  
  );
}

export default App;
