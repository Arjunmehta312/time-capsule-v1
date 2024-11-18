// src/api.js
import axios from 'axios';

// Create an instance of axios with the backend API base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // URL of your backend API
});

// Function to save a time capsule
export const saveCapsule = async (capsuleData) => {
  try {
    const response = await api.post('/save-capsule', capsuleData); // Sending POST request to backend
    return response.data; // Returning the response from the backend
  } catch (error) {
    console.error('Error saving capsule:', error); // Logging error if request fails
    throw error; // Re-throwing error for further handling
  }
};

// Optional: You can add more functions to handle other API endpoints if needed
// Example: Fetching saved capsules (GET request)
export const fetchCapsules = async () => {
  try {
    const response = await api.get('/get-capsules'); // Adjust endpoint as per your backend
    return response.data; // Returning fetched data from backend
  } catch (error) {
    console.error('Error fetching capsules:', error);
    throw error;
  }
};
