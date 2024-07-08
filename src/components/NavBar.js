import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext'; // Import the useAuth hook

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Travel Planner
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About Us</Button>
        <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        {!isAuthenticated ? (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Signup</Button>
          </>
        ) : (
          <Button color="inherit" onClick={logout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
