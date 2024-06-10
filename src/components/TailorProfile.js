// src/components/TailorProfile.js
import React from 'react';
import './TailorProfile.css'; // Import the CSS file for styling

function TailorProfile() {
  // Sample data for the tailor profile
  const tailor = {
    name: 'John Doe',
    location: 'New York',
    specialties: ['Suits', 'Dresses', 'Shirts'],
    description: 'Experienced tailor with a passion for creating custom clothing.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  return (
    <div className="tailor-profile">
      <div className="profile-header">
        <img src={tailor.imageUrl} alt="Tailor" className="profile-image" />
        <div className="profile-details">
          <h2 className="profile-name">{tailor.name}</h2>
          <p className="profile-location">{tailor.location}</p>
          <div className="profile-specialties">
            {tailor.specialties.map((specialty, index) => (
              <span key={index} className="specialty">
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="profile-description">{tailor.description}</p>
    </div>
  );
}

export default TailorProfile;
