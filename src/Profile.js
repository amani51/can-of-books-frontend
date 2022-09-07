import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    console.log(user);
    return (
      <div>
        <Card style={{width:"20%" , marginLeft:"35rem"}}>
          <Card.Img variant="top" src={user.picture} />
          <Card.Body>
            <Card.Title> {user.name} </Card.Title>
            <Card.Text>
              <h6> Email: {user.email}</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withAuth0(Profile);
