import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import { AuthProvider } from './pages/AuthContext'
import TravelDetailsPage from './pages/TravelDetailsPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/travel-details" element={<TravelDetailsPage />} />
          <Route path="/destination/:id" element={<DestinationDetailPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
