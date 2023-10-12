import axios from "axios";
const URI = `${process.env.NEXT_PUBLIC_API_URI}/api/computer/proccesor`;

export const getProccesors = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProccesor = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postProccesor = async (proccesor) => {
  try {
    const response = await axios.post(`${URI}`, proccesor);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
