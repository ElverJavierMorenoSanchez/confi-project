import axios from "axios";
const URI = "http://localhost:3001/api/general/model";

export const getModels = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getModel = async (id) => {
  try {
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getModelsByBrand = async (id) => {
  try {
    const response = await axios.get(`${URI}/brand/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
