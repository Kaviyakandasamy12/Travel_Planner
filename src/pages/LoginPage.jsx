import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the useAuth hook

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      localStorage.setItem('token', response.data.token);
      login(); // Set authentication state
      alert('Login successful');
      navigate('/'); // Navigate to a protected route
    } catch (error) {
      console.error('Error response:', error.response); // Log error response
      alert('Error logging in');
    }
  };

  return (
    <Container>
      <br /><br />
      <Typography variant="h3" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
