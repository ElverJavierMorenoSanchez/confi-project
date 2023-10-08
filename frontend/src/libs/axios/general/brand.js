import axios from "axios";
const URI = "http://localhost:3001/api/general/brand";

export const getBrands = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getBrand = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postBrand = async (brand) => {
  try {
    const response = await axios.post(`${URI}`, brand);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
