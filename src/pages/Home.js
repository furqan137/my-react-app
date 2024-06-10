// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Customization from '../components/Customization';
import Communication from '../components/Communication';
import CustomerRequests from '../components/CustomerRequests';
import TailorProfile from '../components/TailorProfile.css';
import TailorProfile from '../components/TailorProfile';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <h1>Welcome to Stitchit</h1>
        <p>Your one-stop solution for customized clothing</p>
      </div>
      <div className="features">
        <h2>Our Features</h2>
        <ul>
          <li>Customize your clothing online</li>
          <li>Connect with expert tailors</li>
          <li>Effortless communication with customers</li>
        </ul>
      </div>
      <div className="cta">
        <p>Ready to get started?</p>
        {/* Add a Link to the CustomizeClothing page */}
        <Link to="/customize">
          <button>Explore Now</button>
        </Link>
      </div>
      {/* Integrated components */}
      <div className="integration-section">
        <h2>Integrated Components</h2>
        <div className="component-section">
          <h3>Customization</h3>
          <Customization />
        </div>
        <div className="component-section">
          <h3>Communication</h3>
          <Communication />
        </div>
        <div className="component-section">
          <h3>Customer Requests</h3>
          <CustomerRequests />
        </div>
        <div className="component-section">
          <h3>Tailor Profile</h3>
          <TailorProfile />
        </div>
      </div>
    </div>
  );
}

export default Home;
