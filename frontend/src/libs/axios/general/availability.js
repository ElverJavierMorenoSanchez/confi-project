import axios from "axios";
const URI = `${process.env.NEXT_PUBLIC_API_URI}/api/general/availability`;

export const getAvailabilities = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAvailability = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postAvailability = async (availability) => {
  try {
    const response = await axios.post(`${URI}`, availability);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
