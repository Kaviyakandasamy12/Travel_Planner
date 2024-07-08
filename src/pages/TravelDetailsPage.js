import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TravelDetailsPage = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    numPersons: '',
    travelDate: '',
    duration: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/travel-details', formData);
      alert('Travel details saved successfully');
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error saving travel details:', error);
      alert('Failed to save travel details');
    }
  };

  return (
    <Container>
      <br /><br />
      <Typography variant="h3" align="center" gutterBottom>
        Travel Details Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Destination"
          variant="outlined"
          fullWidth
          margin="normal"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
        <TextField
          label="Number of Persons"
          variant="outlined"
          fullWidth
          margin="normal"
          name="numPersons"
          type="number"
          value={formData.numPersons}
          onChange={handleChange}
          required
        />
        <TextField
          label="Travel Date"
          variant="outlined"
          fullWidth
          margin="normal"
          name="travelDate"
          type="date"
          value={formData.travelDate}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Duration (days)"
          variant="outlined"
          fullWidth
          margin="normal"
          name="duration"
          type="number"
          value={formData.duration}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default TravelDetailsPage;
