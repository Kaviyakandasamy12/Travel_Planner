import React from 'react';
import './AboutPage.css'; // Import the CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our journey, mission, and team.</p>
      </header>
      <section className="about-content">
        <div className="card">
          <h2>Our Story</h2>
          <p>
            Welcome to Travel Planner! We are a passionate team dedicated to helping you find your next adventure. Our journey began with a simple idea: to make travel planning easy and enjoyable for everyone. With years of experience in the travel industry, we aim to provide you with the best tools and resources to make your travel dreams a reality.
          </p>
        </div>
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to offer a user-friendly platform that simplifies the travel planning process. We strive to provide accurate, up-to-date information and a seamless booking experience. Whether you're looking for the perfect destination, accommodation, or activity, we are here to assist you every step of the way.
          </p>
        </div>
        <div className="card">
          <h2>Our Team</h2>
          <p>
            Our team is made up of travel enthusiasts, tech experts, and customer service professionals who are committed to delivering an exceptional experience. We work tirelessly to ensure that our platform meets your needs and exceeds your expectations.
          </p>
          <div className="team-profiles">
            <div className="team-member">
              <h3>Jane Doe</h3>
              <p>Co-Founder & CEO</p>
            </div>
            <div className="team-member">
              <h3>John Smith</h3>
              <p>Chief Technology Officer</p>
            </div>
            <div className="team-member">
              <h3>Emily Johnson</h3>
              <p>Customer Experience Manager</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 Travel Planner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
