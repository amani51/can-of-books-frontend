import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import Welcome from './welcome';
import About from './About';
import Profile from './Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              // element={<BestBooks />}
              element={isAuthenticated ? <BestBooks />:<Welcome />}
            >
            </Route>
            <Route 
              exact path="/about"
              element={<About />}
              
            >
            </Route>
            <Route 
              exact path="/profile"
              element={<Profile />}
            >
            </Route>
            
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
