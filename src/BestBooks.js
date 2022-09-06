import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import AddBook from "./Addbook";
import UpdateBook from "./UpdateBook";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
      showUpdateForm: false,
      selectedBook:{}
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_URL}books`)
      .then((result) => {
        console.log(result.data);
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showForm = () => {
    this.setState({
      show: true,
    });
  };
  showUpdateForm = (item) => {
    this.setState({
      showUpdateForm: true,
      selectedBook: item
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
      showUpdateForm: false,
    });
  };
  createObj = (title, description, status) => {
    // console.log("from parent",title,description,status)
    const obj = {
          title : title,
          description : description,
          status:status
        }
        console.log("obj",obj)
        axios
        .post(`${process.env.REACT_APP_URL}books`, obj)
        .then(result =>{
          this.setState({
            books: result.data,
          });
          console.log("result",result.data)
        })
        .catch(err=>{
          console.log(err);
        })

  };
  deleteBook= (id) => {
    console.log(id)
    axios
    .delete(`${process.env.REACT_APP_URL}books/${id}`)
    .then(result =>{
      this.setState({
        books: result.data,
      });
      console.log("after Deleted",result.data)
    })
    .catch(err=>{
      console.log(err);
    })
  }
  updateBook=(event)=>{
    event.preventDefault();
    let obj={
      title: event.target.title.value,
      description:event.target.description.value,
      status:event.target.options.value
    }
    // console.log("obj",obj)
    const id = this.state.selectedBook._id;
    // console.log("id",id)
    axios
    .put(`${process.env.REACT_APP_URL}books/${id}`, obj)
    .then(result=>{
      this.setState({
        books: result.data,
      })
      this.handleClose();
    })
    .catch(err=>{
      console.log(err);
    })

  }
  

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <button
          style={{
            height: "50px",
            width: "100px",
            margin: "20px 300px 20px 600px",
            borderRadius: "10px",
          }}
          onClick={this.showForm}
        >
          Add Book
        </button>
        <AddBook
          show={this.state.show}
          handleClose={this.handleClose}
          createObj={this.createObj}
        />
        <UpdateBook
        show={this.state.showUpdateForm}
        handleClose={this.handleClose}
        updateBook={this.updateBook}
        selectedBook={this.state.selectedBook}
        />
        {this.state.books.length ? (
          <div style={{ width: "600px", margin: "20px 300px 20px 350px" }}>
            <Carousel>
              {this.state.books.map((item) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4cViMl1iLLY2iHqwUS3eWit37iZWKIhaPg&usqp=CAU"
                      alt={item.title}
                    />
                    <Carousel.Caption>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <p>{item.status}</p> 
                      <button onClick={() => this.deleteBook(item._id)}
                      style={{ marginRight: "15px" }}> Delete</button>
                      <button onClick={() => this.showUpdateForm(item)}> Update</button>
                    </Carousel.Caption>
                    
                  </Carousel.Item>
                );
              })}
            </Carousel>
            {/* <p>{this.state.title}</p> */}
          </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
