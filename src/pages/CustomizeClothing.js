import React from 'react';
import Customization from '../components/Customization';
import './CustomizeClothing.css'; // Import the CSS file for styling

function CustomizeClothing() {
  return (
    <div className="customize-clothing-page">
      {/* Removed the Header component */}
      <div className="customize-clothing-container">
        <Customization />
      </div>
    </div>
  );
}

export default CustomizeClothing;
