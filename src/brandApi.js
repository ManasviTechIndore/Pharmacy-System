import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/brand"; 

const config = () => {
  const auth = JSON.parse(localStorage.getItem('auth'));

  return {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      'Content-Type': 'application/json'
    },
  };
};

export const addbrand = async (brandData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, brandData, config());
    return response.data;
  } catch (error) {
    console.error('Error adding unit:', error.response || error.message);
    throw error;
  }
};

export const getAllBrand = async () => {
  return axios.get(`${API_URL}/getAll`, config());
};

export const editBrand = async (id, unitData) => {
    return axios.put(`${API_URL}/edit/${id}`, unitData, config());
  };
  
  export const deleteBrand = async (id) => {
    return axios.delete(`${API_URL}/delete/${id}`, config());
  };
