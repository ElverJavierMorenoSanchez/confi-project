import axios from "axios";
const URI = `${process.env.NEXT_PUBLIC_API_URI}/api/general/model`;

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

export const postModel = async (model) => {
  try {
    const response = await axios.post(`${URI}`, model);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
