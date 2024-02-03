import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import styled from 'styled-components';

// Styled Components
const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5em;
`;

const Navigation = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: white;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const UserInfo = styled.div`
  margin-top: 10px;
  font-size: 0.9em;
`;

const Header = () => {
  // Assuming user information is available from authentication
  const user = {
    username: 'exampleUser',
    // Add more user information as needed
  };

  return (
    <HeaderContainer>
      <Logo>My App</Logo>

      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/docs">Docs</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        {/* Add more navigation links as needed */}
      </Navigation>

      <UserInfo>
        {user ? (
          <>
            Welcome, {user.username}!{' '}
            <NavLink to="/profile">Profile</NavLink>
            {/* Add more user-related links as needed */}
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
