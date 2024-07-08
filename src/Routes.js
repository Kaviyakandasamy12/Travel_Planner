import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage'; // Assuming you have a LoginPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
