import { getConnection, sql } from "../../database/connection";
import { supervisorQueries } from "../../database/printerQueries";

export const getSupervisors = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .query(supervisorQueries.getSupervisors);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postSupervisor = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("userId", sql.VarChar, userId)
      .query(supervisorQueries.postSupervisor);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const getSupervisor = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("supervisorId", sql.Int, id)
      .query(supervisorQueries.getSupervisor);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const putSupervisor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("supervisorId", sql.Int, id)
      .input("name", sql.VarChar, name)
      .input("userId", sql.VarChar, userId)
      .query(supervisorQueries.putSupervisor);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deleteSupervisor = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("supervisorId", sql.Int, id)
      .query(supervisorQueries.deleteSupervisor);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
