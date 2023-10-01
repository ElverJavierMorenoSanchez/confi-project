import { getConnection, sql } from "../../database/connection";
import { officeQueries } from "../../database/computerQueries";

export const getOffices = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool.request().query(officeQueries.getOffices);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postOffice = async (req, res) => {
  try {
    const { description, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("description", sql.VarChar, description)
      .input("userId", sql.VarChar, userId)
      .query(officeQueries.postOffice);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const getOffice = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("officeId", sql.Int, id)
      .query(officeQueries.getOffice);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const putOffice = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("officeId", sql.Int, id)
      .input("description", sql.VarChar, description)
      .input("userId", sql.VarChar, userId)
      .query(officeQueries.putOffice);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deleteOffice = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("officeId", sql.Int, id)
      .query(officeQueries.deleteOffice);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
