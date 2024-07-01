import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const DestinationCard = ({ destination }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={destination.title}
        height="140"
        image={destination.imageUrl}
        title={destination.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {destination.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {destination.description}
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
