import axios from "axios";
const URI = `${process.env.NEXT_PUBLIC_API_URI}/api/computer/office`;
export const getOffices = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getOffice = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postOffice = async (office) => {
  try {
    const response = await axios.post(`${URI}`, office);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
