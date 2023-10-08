import axios from "axios";
const URI = "http://localhost:3001/api/computer/ram";

export const getRams = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRam = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postRam = async (ram) => {
  try {
    const response = await axios.post(`${URI}`, ram);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
