import { getConnection, sql } from "../../database/connection";
import { ramQueries } from "../../database/computerQueries";

export const getRams = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool.request().query(ramQueries.getRams);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const postRam = async (req, res) => {
  try {
    const { description, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("description", sql.VarChar, description)
      .input("userId", sql.VarChar, userId)
      .query(ramQueries.postRam);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const getRam = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("ramId", sql.Int, id)
      .query(ramQueries.getRam);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const putRam = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("ramId", sql.Int, id)
      .input("description", sql.VarChar, description)
      .input("userId", sql.VarChar, userId)
      .query(ramQueries.putRam);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const deleteRam = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("ramId", sql.Int, id)
      .query(ramQueries.deleteRam);

    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};
