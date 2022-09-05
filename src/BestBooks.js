import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
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

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <div style={{ width: "600px",margin:"20px 300px 20px 350px"}}>
             <Carousel >
              {this.state.books.map((item) => {
                return(
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAIBwcHCAoQBwcHBwoHBwcHCA8ICQcKIBEWFiARExMYHSggGCYuGx8TITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NFQ8PGysdFR0tKystLS0rKzctKy0rLS0rKysrKy0rLS0rKysrKysrKysrLS0rKysrKysrKysrKysrK//AABEIANQA7gMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAwIBBf/EABsQAQEBAQEBAQEAAAAAAAAAAAAREmEB8AKB/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAEDBAIHBv/EABgRAQEBAQEAAAAAAAAAAAAAAAASEQET/9oADAMBAAIRAxEAPwDwhilfpd4+oV1sTpTeF9UGK5TeF9UcrNcpvCuqDFKbwrrYxSm8K62MUpvCutjFKbwrrZWK5U7hXVKVOlRa6pSp0oV1SlTpThXVBilet4ldbGKU3hXWxilN4V1OlS0VlrnpalRpTUpalRpo0pWlS0aKWlaVLRoopWlS0aKKVpUtGiilaVLRoopWlS0aKKVpUtGiilaVLRoopWlS0aKKVpUtGiilaXqVNFFK0qWilFJ6d0jT39PG9c1raNIUpvSl6aQrtN6Uto0hSm9KX0aQppO96Wto0jprRvS1NGk9Gl3qWpo0nSm9LU0aTpo3pamjSejRvS1NGk9GjelqaNJ6NG9LU0aT0aN6Wpo0no0b0tTRpPRo3paOjSNKxpy+i2jSNKUei2jSNKV09FtGkaUrp6Lac0lSlHorp3SNKUei2jSOjRS+i2jSOjRR6LaNI6NFFraNI6NFlraNI6NFlraNI6NFlraNI6NFlraNI6NFlraNI6NFlpaNI6NMqcdraNI6NFFraNI6NFFraNI6KUWto2lTRpauzaOuu0otXZtKlNLV2bS0aKLV0bSpo0tXZtLRootXZtLRootXZtLRo0tXZtLRo0tXZtLRpdLV2bS0aTS0NO1LZtlrjtWlS2bNLVpUtmzS1a5U9mzS1NGk9mjS1NO6R07o1bV0aR07o0tXRpLR5+jS1dGk9FOdPRTRpOlUtTRpOlC1NGk6ULUppOlC1NGk6ULU0aTpQtClYpWW9clt0rFKb0tulYpTelt0rFKb0tulYpTS26VilN6W3SsUpvS267U6U3pamndJUpvS1dfU2lSrXS1dmvqlSldLV2aSpSulq6+pr6pUpXS1dGkq7Si1NGk6UstG9L1Ou1lrmpu9L1ilNKbvS9YpTSm70vWKU0pu9L1ilNKbvS9YpTSm70vWKU0pu9L1ilNKbvS9YpTSm70vWKU0pu9L1ilNKbvS9YpTSm70vWKU0pvXSsUppTdKxSmlJefp3SZWesKU0aTpQpTRpOlClNGk6UKU0aTp56FKaNMUoU3o0xShTejTFKFN6NMUoU3o0xShTejTFKFN6NMUoU3o0xShTejTFKFN6NMUoUyAjwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6AAAAAAAAAAAAAAAAAAAAAAAAAAAAA775Pf44AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z"
                    alt="Slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.status}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                )
              })}
            </Carousel>
          </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
