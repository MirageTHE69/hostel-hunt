// authService.js
import API from '../api/axios.js'; // Ensure this path is correct

// Function to handle login
const login = async (email, password) => {
    try {
      const response = await API.post('/auth/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token); // Store the token in localStorage
      return true; // Login successful
    } catch (error) {
      console.error('Login failed:', error);
      return false; // Login failed
    }
};

export default login;
