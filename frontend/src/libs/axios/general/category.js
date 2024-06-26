import axios from "axios";
const URI = `${process.env.NEXT_PUBLIC_API_URI}/api/general/category`;

export const getCategories = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategory = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postCategory = async (category) => {
  try {
    const response = await axios.post(`${URI}`, category);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
