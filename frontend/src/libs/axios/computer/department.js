import axios from "axios";
const URI = `${process.env.NEXT_PUBLIC_API_URI}/api/computer/department`;
export const getDepartments = async () => {
  try {
    const response = await axios.get(`${URI}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getDepartmenty = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URI}/${id}`);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const postDepartment = async (department) => {
  try {
    const response = await axios.post(`${URI}`, department);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
