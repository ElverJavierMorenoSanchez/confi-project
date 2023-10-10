import axios from "axios";
const URI = "http://localhost:3001/api/computer";

export const getComputers = async (filter) => {
  try {
    const response = await axios.get(`${URI}`, { params: filter });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getComputer = async (id) => {
  try {
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postComputer = async (computer) => {
  try {
    const response = await axios.post(`${URI}`, computer);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const putComputer = async (id, computer) => {
  try {
    const response = await axios.put(`${URI}/${id}`, computer);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteComputer = async (id) => {
  try {
    const response = await axios.delete(`${URI}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const importComputers = async (formData) => {
  try {
    const response = await axios.post(`${URI}/import`, formData, {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
