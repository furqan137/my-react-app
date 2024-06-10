// src/services/api.js

// Sample data for tailors (replace with actual data from your backend)
const tailorsData = [
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
  
  // Simulate fetching tailors data from an API (async operation)
  export const fetchTailors = () => {
    return new Promise((resolve, reject) => {
      // Simulate network delay with setTimeout
      setTimeout(() => {
        // Resolve the promise with the sample tailors data
        resolve(tailorsData);
      }, 1000); // Simulate 1 second delay
    });
  };
  
  // You can add more API functions here for different endpoints or resources
  