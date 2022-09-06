import React from 'react';
import {Modal,Button,Form } from 'react-bootstrap';


class UpdateBook extends React.Component {



  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
      <Modal.Header closeButton  style={{ textAlign:"center",width: "90%" ,height:"50%",display:"flex",margin:"1rem","border-radius":"15px","background-color":"whitesmoke"}}>
        <Modal.Title style={{ textAlign:"center",width: "90%" ,height:"50%",display:"flex",margin:"1rem","border-radius":"15px","background-color":"whitesmoke"}}>Update Book </Modal.Title>
      </Modal.Header>
      <Form style={{width:"90%", marginLeft:"20px"}} onSubmit={this.props.updateBook}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Title </Form.Label>
        <Form.Control type="text" name="title" placeholder="book title here.." defaultValue={this.props.selectedBook.title}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Book Description</Form.Label>
        <Form.Control type="text" name="description"  placeholder="book description here.." defaultValue={this.props.selectedBook.description} />
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
        Update Book!
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

export default UpdateBook ;
