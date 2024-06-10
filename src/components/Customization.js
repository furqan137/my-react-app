// src/components/Customization.js
import React, { useState } from 'react';
import './Customization.css';

function Customization() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    measurements: {
      chest: '',
      waist: '',
      hips: '',
      inseam: '',
    },
    specialInstructions: '',
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.measurements) {
      setFormData({
        ...formData,
        measurements: { ...formData.measurements, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      setFormData({ ...formData, submitted: true });
    }, 1000);
  };

  return (
    <div className="customization">
      <h2>Customize Your Clothing</h2>
      <form className="customization-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="measurements">
          <h3>Measurements (in inches)</h3>
          <div className="form-group">
            <label htmlFor="chest">Chest</label>
            <input
              type="number"
              id="chest"
              name="chest"
              value={formData.measurements.chest}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="waist">Waist</label>
            <input
              type="number"
              id="waist"
              name="waist"
              value={formData.measurements.waist}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hips">Hips</label>
            <input
              type="number"
              id="hips"
              name="hips"
              value={formData.measurements.hips}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inseam">Inseam</label>
            <input
              type="number"
              id="inseam"
              name="inseam"
              value={formData.measurements.inseam}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="specialInstructions">Special Instructions</label>
          <textarea
            id="specialInstructions"
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          {formData.submitted ? 'Submitted!' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default Customization;
