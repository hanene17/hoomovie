import React from 'react-dom';

//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MovieCard/MovieCardStyle.css'
import NotFound from './NotFound';



function MovieDetails({data,match}) {
    var details= data.find(movie => movie.title=== match.params.title);
 
  
    var productData;
  
    if(details)
      productData = <div>
      <div className= "movie-details">
      <div className="card" style ={{width:'800px', display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'}}>
      <img style ={{width:'600px'}} src={details.posterUrl} alt='movie'></img> 
      <div className="text-justify" style={{fontSize: '12px', color:'MediumSeaGreen', fontWeight: '900'}}> {details.description} </div> <br/> 
      
       <iframe src={details.videoTrailer}  width="700" height="400"  
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture"
       allowfullscreen title="video"/>
      
       

  </div>
    </div>    
   </div> 
    else
    if (!productData) return <NotFound />;
  
    return (
        
        <div>
         
        {productData}
        
        

      
         </div>
             
            

    )
}

export default MovieDetails