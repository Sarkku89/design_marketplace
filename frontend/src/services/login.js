import axios from 'axios';
const baseUrl = `http://localhost:3001/api/login`;

// Login as an existing user
const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const exportObject = { login };

export default exportObject;
