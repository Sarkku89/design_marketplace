import axios from 'axios';
const baseUrl = `http://localhost:3001/api/users`;

// Register a new user
const create = async (userObject) => {
  const response = await axios.post(baseUrl, userObject);
  return response.data;
};

// Get all users
const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};


const exportObject = { create, getAll };
export default exportObject;
