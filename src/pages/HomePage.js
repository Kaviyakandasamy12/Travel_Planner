import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import DestinationCard from '../components/DestinationCard';

const featuredDestinations = [
  {
    id: 1,
    title: "Paris",
    description: "The city of light, known for its art, fashion, and culture.",
    imageUrl: "https://media.istockphoto.com/id/1345426734/photo/eiffel-tower-paris-river-seine-sunset-twilight-france.jpg?s=612x612&w=0&k=20&c=I5rAH5d_-Yyag8F0CKzk9vzMr_1rgkAASGTE11YMh9A=",
  },
  {
    id: 2,
    title: "Tokyo",
    description: "A bustling metropolis blending modern technology with traditional culture.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8IrcN88iYUpY3QI6NvS-sHok22K80gX3KA&s",
  },
  {
    id: 3,
    title: "New York",
    description: "The city that never sleeps, offering iconic landmarks and diverse neighborhoods.",
    imageUrl: "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?cs=srgb&dl=pexels-mikel-1239162.jpg&fm=jpg",
  },
  {
    id: 4,
    title: "Rome",
    description: "A historic city known for its ancient ruins and vibrant culture.",
    imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_rome_destination_main_1_l_667_1000.jpg",
  },
  {
    id: 5,
    title: "Sydney",
    description: "Famous for its Sydney Opera House, harbourfront, and beautiful beaches.",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/61/photo2jpg.jpg?w=500&h=-1&s=1",
  },
  {
    id: 6,
    title: "Cape Town",
    description: "A coastal city in South Africa known for its harbour, Table Mountain, and Cape Point.",
    imageUrl: "https://imageio.forbes.com/specials-images/imageserve/62186b3906d6e730ff949c9c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
  },
  {
    id: 7,
    title: "Bangkok",
    description: "A city of contrasts with action at every turn, famous for its vibrant street life and cultural landmarks.",
    imageUrl: "https://lp-cms-production.imgix.net/2021-06/GettyRF_620722958.jpg?w=1920&auto=format&q=75",
  },
  {
    id: 8,
    title: "Barcelona",
    description: "A city in Spain known for its art and architecture, particularly the Sagrada Família and Park Güell.",
    imageUrl: "https://earth.esa.int/web/earth-watching/content/documents/257246/1608677/Barcelona.jpg",
  },
  {
    id: 9,
    title: "Dubai",
    description: "A luxury destination in the UAE known for its modern architecture, shopping, and vibrant nightlife.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg/640px-Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg",
  },
  {
    id: 10,
    title: "Istanbul",
    description: "A city that straddles Europe and Asia across the Bosphorus Strait, known for its historic sites.",
    imageUrl: "https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.webp?b=1&s=170667a&w=0&k=20&c=D5AwrHMbPX8u4MUXYPx3dlCAz0KeKclxq9CJqSTmJ10=",
  },
  {
    id: 11,
    title: "Rio de Janeiro",
    description: "A Brazilian city known for its Copacabana and Ipanema beaches, Christ the Redeemer statue, and Carnival festival.",
    imageUrl: "https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg",
  },
  {
    id: 12,
    title: "Kyoto",
    description: "A city in Japan known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
    imageUrl: "https://cdn.britannica.com/94/77394-050-08F469E7/Spring-cherry-blossoms-pagoda-Japan-Kyoto.jpg",
  },
];


const HomePage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    setDestinations(featuredDestinations);
  }, []);

  return (
    <Container>
      <br/><br/>  
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Travel Planner
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Plan your perfect trip with ease.
      </Typography>
      <Grid container spacing={4}>
        {destinations.map((destination) => (
          <Grid item key={destination.id} xs={12} sm={6} md={4}>
            <DestinationCard destination={destination} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
