// src/components/CustomerRequests.js
import React, { useState } from 'react';
import './CustomerRequests.css';

function CustomerRequests() {
  const [requests, setRequests] = useState([
    { id: 1, name: 'John Doe', clothingType: 'Shirt', status: 'Pending' },
    { id: 2, name: 'Jane Smith', clothingType: 'Dress', status: 'Accepted' },
    { id: 3, name: 'Alice Johnson', clothingType: 'Pants', status: 'Rejected' },
  ]);

  const handleAccept = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'Accepted' } : request
    ));
  };

  const handleReject = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'Rejected' } : request
    ));
  };

  return (
    <div className="customer-requests">
      <h2 className="title">Customer Requests</h2>
      <div className="requests-list">
        {requests.map((request) => (
          <div key={request.id} className="request-item">
            <div className="request-info">
              <p><strong>Name:</strong> {request.name}</p>
              <p><strong>Clothing Type:</strong> {request.clothingType}</p>
              <p><strong>Status:</strong> {request.status}</p>
            </div>
            <div className="request-actions">
              {request.status === 'Pending' && (
                <>
                  <button className="accept-button" onClick={() => handleAccept(request.id)}>Accept</button>
                  <button className="reject-button" onClick={() => handleReject(request.id)}>Reject</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerRequests;
