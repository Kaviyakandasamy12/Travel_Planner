import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText } from '@mui/material';

const featuredDestinations = [
    {
      id: 1,
      title: "Paris",
      description: "The city of light, known for its art, fashion, and culture.",
      imageUrl: "https://media.istockphoto.com/id/1345426734/photo/eiffel-tower-paris-river-seine-sunset-twilight-france.jpg?s=612x612&w=0&k=20&c=I5rAH5d_-Yyag8F0CKzk9vzMr_1rgkAASGTE11YMh9A=",
      details: {
        bestTimeToVisit: "April to June and October to early November",
        mustSeeAttractions: [
          "Eiffel Tower",
          "Louvre Museum",
          "Notre-Dame Cathedral",
          "Montmartre",
          "Champs-Élysées",
        ],
        localCuisine: [
          "Croissants",
          "Baguettes",
          "Escargot",
          "Ratatouille",
          "Crepes",
        ],
        tips: [
          "Learn basic French phrases.",
          "Use public transportation.",
          "Carry a travel adapter.",
        ],
      },
    },
    {
      id: 2,
      title: "Tokyo",
      description: "A bustling metropolis blending modern technology with traditional culture.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8IrcN88iYUpY3QI6NvS-sHok22K80gX3KA&s",
      details: {
        bestTimeToVisit: "March to May and September to November",
        mustSeeAttractions: [
          "Shibuya Crossing",
          "Senso-ji Temple",
          "Tokyo Tower",
          "Meiji Shrine",
          "Tsukiji Fish Market",
        ],
        localCuisine: [
          "Sushi",
          "Ramen",
          "Tempura",
          "Yakitori",
          "Udon",
        ],
        tips: [
          "Learn basic Japanese phrases.",
          "Use public transportation.",
          "Carry cash as many places don’t accept credit cards.",
        ],
      },
    },
    {
      id: 3,
      title: "New York",
      description: "The city that never sleeps, offering iconic landmarks and diverse neighborhoods.",
      imageUrl: "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?cs=srgb&dl=pexels-mikel-1239162.jpg&fm=jpg",
      details: {
        bestTimeToVisit: "April to June and September to early November",
        mustSeeAttractions: [
          "Statue of Liberty",
          "Central Park",
          "Times Square",
          "Empire State Building",
          "Brooklyn Bridge",
        ],
        localCuisine: [
          "New York-style pizza",
          "Bagels",
          "Cheesecake",
          "Hot dogs",
          "Pastrami sandwiches",
        ],
        tips: [
          "Use public transportation.",
          "Wear comfortable shoes for walking.",
          "Visit popular attractions early to avoid crowds.",
        ],
      },
    },
    {
      id: 4,
      title: "Rome",
      description: "A historic city known for its ancient ruins and vibrant culture.",
      imageUrl: "https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_rome_destination_main_1_l_667_1000.jpg",
      details: {
        bestTimeToVisit: "April to June and late September to October",
        mustSeeAttractions: [
          "Colosseum",
          "Vatican Museums",
          "St. Peter's Basilica",
          "Pantheon",
          "Roman Forum",
        ],
        localCuisine: [
          "Carbonara",
          "Cacio e Pepe",
          "Gelato",
          "Supplì",
          "Roman-style pizza",
        ],
        tips: [
          "Wear comfortable shoes for walking.",
          "Carry cash for smaller establishments.",
          "Be aware of pickpockets in tourist areas.",
        ],
      },
    },
    {
      id: 5,
      title: "Sydney",
      description: "Famous for its Sydney Opera House, harbourfront, and beautiful beaches.",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/61/photo2jpg.jpg?w=500&h=-1&s=1",
      details: {
        bestTimeToVisit: "September to November and March to May",
        mustSeeAttractions: [
          "Sydney Opera House",
          "Sydney Harbour Bridge",
          "Bondi Beach",
          "Taronga Zoo",
          "The Rocks",
        ],
        localCuisine: [
          "Meat pies",
          "Barramundi",
          "Pavlova",
          "Lamingtons",
          "Kangaroo steak",
        ],
        tips: [
          "Use sunscreen to protect against strong UV rays.",
          "Explore Sydney by ferry.",
          "Take a coastal walk from Bondi to Coogee.",
        ],
      },
    },
    {
      id: 6,
      title: "Cape Town",
      description: "A coastal city in South Africa known for its harbour, Table Mountain, and Cape Point.",
      imageUrl: "https://imageio.forbes.com/specials-images/imageserve/62186b3906d6e730ff949c9c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      details: {
        bestTimeToVisit: "March to May and September to November",
        mustSeeAttractions: [
          "Table Mountain",
          "Robben Island",
          "Cape Point",
          "Kirstenbosch Botanical Gardens",
          "V&A Waterfront",
        ],
        localCuisine: [
          "Bobotie",
          "Biltong",
          "Boerewors",
          "Cape Malay curry",
          "Malva pudding",
        ],
        tips: [
          "Be aware of safety precautions.",
          "Use sunscreen.",
          "Explore the local markets.",
        ],
      },
    },
    {
      id: 7,
      title: "Bangkok",
      description: "A city of contrasts with action at every turn, famous for its vibrant street life and cultural landmarks.",
      imageUrl: "https://lp-cms-production.imgix.net/2021-06/GettyRF_620722958.jpg?w=1920&auto=format&q=75",
      details: {
        bestTimeToVisit: "November to February",
        mustSeeAttractions: [
          "Grand Palace",
          "Wat Arun",
          "Chatuchak Weekend Market",
          "Khao San Road",
          "Jim Thompson House",
        ],
        localCuisine: [
          "Pad Thai",
          "Tom Yum Goong",
          "Som Tum",
          "Massaman curry",
          "Mango sticky rice",
        ],
        tips: [
          "Dress modestly when visiting temples.",
          "Use public transportation.",
          "Bargain at markets but be polite.",
        ],
      },
    },
    {
      id: 8,
      title: "Barcelona",
      description: "A city in Spain known for its art and architecture, particularly the Sagrada Família and Park Güell.",
      imageUrl: "https://earth.esa.int/web/earth-watching/content/documents/257246/1608677/Barcelona.jpg",
      details: {
        bestTimeToVisit: "May to June and September to October",
        mustSeeAttractions: [
          "Sagrada Família",
          "Park Güell",
          "La Rambla",
          "Casa Batlló",
          "Gothic Quarter",
        ],
        localCuisine: [
          "Tapas",
          "Paella",
          "Gazpacho",
          "Crema Catalana",
          "Jamon Iberico",
        ],
        tips: [
          "Watch for pickpockets in crowded areas.",
          "Buy tickets for major attractions in advance.",
          "Take a siesta in the afternoon.",
        ],
      },
    },
    {
      id: 9,
      title: "Dubai",
      description: "A luxury destination in the UAE known for its modern architecture, shopping, and vibrant nightlife.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg/640px-Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg",
      details: {
        bestTimeToVisit: "November to March",
        mustSeeAttractions: [
          "Burj Khalifa",
          "Dubai Mall",
          "Palm Jumeirah",
          "Dubai Marina",
          "Dubai Creek",
        ],
        localCuisine: [
          "Shawarma",
          "Hummus",
          "Manakish",
          "Machboos",
          "Luqaimat",
        ],
        tips: [
          "Respect local customs and dress modestly.",
          "Stay hydrated and avoid the midday sun.",
          "Use taxis or ride-hailing apps for transportation.",
        ],
      },
    },
    {
      id: 10,
      title: "Istanbul",
      description: "A city that straddles Europe and Asia across the Bosphorus Strait, known for its historic sites.",
      imageUrl: "https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.webp?b=1&s=170667a&w=0&k=20&c=D5AwrHMbPX8u4MUXYPx3dlCAz0KeKclxq9CJqSTmJ10=",
      details: {
        bestTimeToVisit: "April to June and September to November",
        mustSeeAttractions: [
          "Hagia Sophia",
          "Blue Mosque",
          "Topkapi Palace",
          "Grand Bazaar",
          "Basilica Cistern",
        ],
        localCuisine: [
          "Doner kebab",
          "Baklava",
          "Meze",
          "Pide",
          "Turkish delight",
        ],
        tips: [
          "Wear comfortable shoes for walking on cobblestones.",
          "Use public transportation or walk in the city center.",
          "Bargain politely in markets.",
        ],
      },
    },
    {
      id: 11,
      title: "Rio de Janeiro",
      description: "A Brazilian city known for its Copacabana and Ipanema beaches, Christ the Redeemer statue, and Carnival festival.",
      imageUrl: "https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg",
      details: {
        bestTimeToVisit: "December to March",
        mustSeeAttractions: [
          "Christ the Redeemer",
          "Sugarloaf Mountain",
          "Copacabana Beach",
          "Ipanema Beach",
          "Tijuca National Park",
        ],
        localCuisine: [
          "Feijoada",
          "Churrasco",
          "Brigadeiros",
          "Pão de queijo",
          "Coxinha",
        ],
        tips: [
          "Be aware of safety precautions.",
          "Stay hydrated and use sunscreen.",
          "Join a guided tour for favelas.",
        ],
      },
    },
    {
      id: 12,
      title: "Kyoto",
      description: "A city in Japan known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
      imageUrl: "https://cdn.britannica.com/94/77394-050-08F469E7/Spring-cherry-blossoms-pagoda-Japan-Kyoto.jpg",
      details: {
        bestTimeToVisit: "March to May and October to November",
        mustSeeAttractions: [
          "Fushimi Inari Shrine",
          "Kinkaku-ji",
          "Arashiyama Bamboo Grove",
          "Nijo Castle",
          "Gion District",
        ],
        localCuisine: [
          "Kaiseki",
          "Yudofu",
          "Kyoto-style sushi",
          "Matcha desserts",
          "Nishin soba",
        ],
        tips: [
          "Respect local customs and etiquette.",
          "Use public transportation or rent a bicycle.",
          "Visit temples early to avoid crowds.",
        ],
      },
    },
  ];
  

const DestinationDetailPage = () => {
  const { id } = useParams();
  const destination = featuredDestinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return <Typography variant="h6" align="center">Destination not found</Typography>;
  }

  return (
    <Container>
      <br/><br/><br/>
      <Card>
        <CardMedia
          component="img"
          alt={destination.title}
          height="300"
          image={destination.imageUrl}
          title={destination.title}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {destination.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {destination.description}
          </Typography>
          <Typography variant="h6" component="div">
            Best Time to Visit
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {destination.details.bestTimeToVisit}
          </Typography>
          <Typography variant="h6" component="div">
            Must-See Attractions
          </Typography>
          <List>
            {destination.details.mustSeeAttractions.map((attraction, index) => (
              <ListItem key={index}>
                <ListItemText primary={attraction} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" component="div">
            Local Cuisine
          </Typography>
          <List>
            {destination.details.localCuisine.map((dish, index) => (
              <ListItem key={index}>
                <ListItemText primary={dish} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" component="div">
            Tips for Travelers
          </Typography>
          <List>
            {destination.details.tips.map((tip, index) => (
              <ListItem key={index}>
                <ListItemText primary={tip} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DestinationDetailPage;
