import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const SignupPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Signup
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
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
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
