
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import React, { useState } from 'react';





function Add({AddMovie}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [newMovie,setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: ""
    })
    const handleAdd=(e)=>{
       setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }
   
  return (
    <>
    
  
 
    
      <Button variant="primary" onClick={handleShow}>
        Launch your favorite movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>As per your request ... </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <form>
        <label>
    title :
    <input className="form-control" type="text" placeholder="Enter title" 
    name="title" value={newMovie.title} onChange={handleAdd}  />
    </label>
    <label>
    description :
    <input className="form-control" type="text" placeholder="Enter description"
     name="description" value={newMovie.description} onChange={handleAdd}  />
    </label>
    <label>
    posterUrl:
    <input className="form-control" type="text" placeholder="Enter posterUrl" 
    name="posterUrl"   value={newMovie.posterUrl} onChange={handleAdd}    />
    </label> <br/>
    <label> 
    rating:
    <input className="form-control"  NumericInput min={0} max={5} value={50} 
    type="number" ng-pattern="/^[0-5]+$/"  placeholder="Enter rating" 
     name="rating"  value={newMovie.rating}
     onChange={handleAdd}     />
    </label>
    </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        <Button  variant="primary" onClick={()=>

        { AddMovie(newMovie);
          setNewMovie({
            title: "",
            description: "",
            posterUrl: " ",
            rating: "",});
            handleClose()}}>
          Add
        </Button>
        </Modal.Footer>
        
      </Modal>
    </>
  );
}


  
export default Add ;