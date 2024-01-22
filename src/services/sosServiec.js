import API from '../api/axios.js';

const getSOSList = async () => {
    try {
      const response = await API.get('/sos'); // Replace '/accidents' with your actual endpoint
      return response.data.data.sosrequests; // Adjust depending on the response structure
    } catch (error) {
      console.error('Fetching accidents failed:', error);
      return []; // Return empty array in case of error
    }
  };
  
  const resolveSOS = async (SOSId) => {
    try {
      // Assuming 'status' is the field that needs to be updated
      const requestBody = {
        status: 'resolved' // or any other status required by your API
      };
      const response = await API.patch(`/sos/${SOSId}`, requestBody);
      return response.data; // or return a specific message or value as needed
    } catch (error) {
      console.error('Resolving sos failed:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  };
  export { getSOSList, resolveSOS };