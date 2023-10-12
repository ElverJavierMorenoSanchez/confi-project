import axios from "axios";
const URI = `${process.env.NEXT_PUBLIC_API_URI}/api/computer/storage`;

export const getStorages = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getStorage = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postStorage = async (storage) => {
  try {
    const response = await axios.post(`${URI}`, storage);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
