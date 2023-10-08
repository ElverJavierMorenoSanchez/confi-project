import axios from "axios";
const URI = "http://localhost:3001/api/general/subcategory";

export const getSubcategories = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSubcategory = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postSubcategory = async (subcategory) => {
  try {
    const response = await axios.post(`${URI}`, subcategory);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
