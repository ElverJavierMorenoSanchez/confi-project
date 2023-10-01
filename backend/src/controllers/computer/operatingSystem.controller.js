import { getConnection, sql } from "../../database/connection";
import { systemQueries } from "../../database/computerQueries";

export const getSystems = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool.request().query(systemQueries.getSystems);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const postSystem = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("userId", sql.VarChar, userId)
      .query(systemQueries.postSystem);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const getSystem = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("systemId", sql.Int, id)
      .query(systemQueries.getSystem);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const putSystem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("systemId", sql.Int, id)
      .input("name", sql.VarChar, name)
      .input("userId", sql.VarChar, userId)
      .query(systemQueries.putSystem);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deleteSystem = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("systemId", sql.Int, id)
      .query(systemQueries.deleteSystem);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
