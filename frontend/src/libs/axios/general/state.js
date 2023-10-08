import axios from "axios";
const URI = "http://localhost:3001/api/general/state";

export const getStates = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getState = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postState = async (state) => {
  try {
    const response = await axios.post(`${URI}`, state);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
