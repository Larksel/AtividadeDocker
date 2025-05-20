import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

const api = {
  getUsers: async () => {
    const { data } = await axios.get(baseUrl);
    return data;
  },
  getById: async (id) => {
    const { data } = await axios.get(baseUrl + `/${id}`);
    return data;
  },
  createUser: async (user) => {
    const { data } = await axios.post(baseUrl, user);
    return data;
  },
  updateUser: async (id) => {
    const { data } = await axios.put(baseUrl + `/${id}`);
    return data;
  },
  deleteUser: async (id) => {
    const { data } = await axios.delete(baseUrl + `/${id}`);
    return data;
  },
};

export default api;
