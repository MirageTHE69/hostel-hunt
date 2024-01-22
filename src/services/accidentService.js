import API from '../api/axios.js'; // Ensure this path is correct

// Function to fetch all accident data
const getAccidents = async () => {
  try {
    const response = await API.get('/accidents'); // Replace '/accidents' with your actual endpoint
    return response.data.data.accidents; // Adjust depending on the response structure
  } catch (error) {
    console.error('Fetching accidents failed:', error);
    return []; // Return empty array in case of error
  }
};




// Function to change the accident status to 'resolved'
const resolveAccident = async (accidentId) => {
    try {
      // Assuming 'status' is the field that needs to be updated
      const requestBody = {
        status: 'resolved' // or any other status required by your API
      };
      const response = await API.patch(`/accidents/${accidentId}`, requestBody);
      return response.data; // or return a specific message or value as needed
    } catch (error) {
      console.error('Resolving accident failed:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  };
  
  export { getAccidents, resolveAccident };
  