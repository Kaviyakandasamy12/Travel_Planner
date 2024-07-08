import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      console.log(response.data);
      alert('User registered successfully');
      navigate('/login'); // Navigate to the login page
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };

  return (
    <Container>
      <br/><br/>
      <Typography variant="h3" align="center" gutterBottom>
        Signup
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
          Signup
        </Button>
      </form>
    </Container>
  );
};

export default SignupPage;
