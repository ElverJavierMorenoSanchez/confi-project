import { getConnection, sql } from "../../database/connection";
import { departmentQueries } from "../../database/computerQueries";

export const getDepartments = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .query(departmentQueries.getDepartments);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const postDepartment = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("userId", sql.VarChar, userId)
      .query(departmentQueries.postDepartment);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const getDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("departmentId", sql.Int, id)
      .query(departmentQueries.getDepartment);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const putDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("departmentId", sql.Int, id)
      .input("name", sql.VarChar, name)
      .input("userId", sql.VarChar, userId)
      .query(departmentQueries.putDepartment);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("departmentId", sql.Int, id)
      .query(departmentQueries.deleteDepartment);

    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};
