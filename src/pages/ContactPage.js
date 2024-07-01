import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ContactPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <form>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default ContactPage;
