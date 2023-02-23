import axios from 'axios';
const baseUrl = `http://localhost:3001/api/items`;

let token = null;

// Set a user token upon login, remove upon logout
// the token will be used to link items into users
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

// Get all items
const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

// Create new item (== list new item for sale)
const create = async (itemObject) => {
  //console.log("Haloo",token);
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.post(baseUrl, itemObject, config);
  return res.data;
};

// Remove an item from sale
const remove = async (itemObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.delete(`${baseUrl}/${itemObject.id}`, config);
  return res.data;
};

const exportObject = { setToken, getAll, create, remove };

export default exportObject;
