import axios from "axios";
const URI = `${process.env.NEXT_PUBLIC_API_URI}/api/computer/operatingSystem`;

export const getSystems = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSystem = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postSystem = async (data) => {
  try {
    const response = await axios.post(`${URI}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
