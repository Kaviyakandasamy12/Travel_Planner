import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import DestinationCard from '../components/DestinationCard';

const featuredDestinations = [
  {
    title: "Paris",
    description: "The city of light, known for its art, fashion, and culture.",
    imageUrl: "https://th.bing.com/th/id/OIP.gU9yYYlycNOdSQ34Hb7EeQHaE7?rs=1&pid=ImgDetMain",
  },
  {
    title: "Tokyo",
    description: "A bustling metropolis blending modern technology with traditional culture.",
    imageUrl: "https://th.bing.com/th/id/OIP.waKvAevn8M6AE6-oy0KbTgHaEK?rs=1&pid=ImgDetMain",
  },
  {
    title: "New York",
    description: "The city that never sleeps, offering iconic landmarks and diverse neighborhoods.",
    imageUrl: "https://wallup.net/wp-content/uploads/2017/11/23/503789-building-lights-USA-night-evening-New_York_City.jpg",
  },
];

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    setDestinations(featuredDestinations);
  }, []);

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Travel Planner
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Plan your perfect trip with ease.
      </Typography>
      <Grid container spacing={4}>
        {destinations.map((destination, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <DestinationCard destination={destination} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
