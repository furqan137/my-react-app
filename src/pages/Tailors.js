// src/pages/Tailors.js
import React from 'react';
import './Tailors.css'; // Import the CSS file for styling

function Tailors() {
  // Sample data for tailors (replace with actual data)
  const tailors = [
    {
      id: 1,
      name: 'John Doe',
      location: 'New York',
      rating: 4.5,
      specialties: ['Formal wear', 'Custom suits'],
      bio: 'Experienced tailor with a focus on high-quality formal wear.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      location: 'Los Angeles',
      rating: 4.8,
      specialties: ['Wedding dresses', 'Alterations'],
      bio: 'Passionate about creating unique wedding dresses for every bride.',
    },
    // Add more tailor objects as needed
  ];

  return (
    <div className="tailors-container">
      <h2 className="page-title">Tailors</h2>
      <div className="tailors-list">
        {tailors.map((tailor) => (
          <div key={tailor.id} className="tailor-card">
            <h3>{tailor.name}</h3>
            <p className="location">Location: {tailor.location}</p>
            <p className="rating">Rating: <span className="rating-value">{tailor.rating}</span></p>
            <p className="specialties">
              <strong>Specialties:</strong> {tailor.specialties.join(', ')}
            </p>
            <p className="bio">{tailor.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tailors;
