import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Box display="flex" justifyContent="center" marginTop="10px">
          <Button 
            variant="contained" 
            color="primary"
            component={Link} 
            to={`/destination/${destination.id}`}
          >
            Visit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
