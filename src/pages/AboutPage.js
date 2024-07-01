import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Travel Planner is your ultimate travel planning companion. We help you plan the perfect trip with ease and confidence. Whether you're looking for the best destinations, travel tips, or booking options, we've got you covered.
      </Typography>
    </Container>
  );
};

export default AboutPage;
