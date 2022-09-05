import React from 'react';
import {Modal,Button,Form } from 'react-bootstrap';


class AddBook extends React.Component {


AddNewBook=(event)=>{
    event.preventDefault();
    let title=event.target.title.value
    let description=event.target.description.value
    let status=event.target.options.value
    console.log("title",title)
    console.log("description",description)
    console.log("status",status)
    // this.props.AddBook(title,description,status)
    this.props.handleClose()
    this.props.createObj(title,description,status)
}

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
      <Modal.Header closeButton  style={{ textAlign:"center",width: "90%" ,height:"50%",display:"flex",margin:"1rem","border-radius":"15px","background-color":"whitesmoke"}}>
        <Modal.Title style={{ textAlign:"center",width: "90%" ,height:"50%",display:"flex",margin:"1rem","border-radius":"15px","background-color":"whitesmoke"}}>Add A New Book To Favorites</Modal.Title>
      </Modal.Header>
      <Form style={{width:"90%", marginLeft:"20px"}} onSubmit={this.AddNewBook}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Title </Form.Label>
        <Form.Control type="text" name="title" placeholder="book title here.." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Book Description</Form.Label>
        <Form.Control type="text" name="description"  placeholder="book description here.." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>status</Form.Label>
        <Form.Select id="options" >
          <option value="Life Changing">Life changing</option>
          <option value="Favorite Five">Favorite Five</option>
          <option value="Recommended To Me">Recommended To Me</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add New Book!
      </Button>
    </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleClose}>
          Close Form
        </Button>
      </Modal.Footer>
    </Modal>
      </div>
    )
  }
}

export default AddBook ;
