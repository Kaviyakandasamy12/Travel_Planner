import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const LoginPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Login
      </Typography>
      <form>
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
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
