import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{gap:"40px"}}>
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link" style={{color:"pink"}}>Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link" style={{color:"pink"}}>About</Link></NavItem>
        {isAuthenticated && <NavItem><Link to="/profile" className="nav-link" style={{color:"pink"}}>Profile</Link></NavItem>}
        <NavItem> <LoginButton/></NavItem>
        <NavItem> <LogoutButton/></NavItem>

        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
