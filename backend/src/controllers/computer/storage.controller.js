import { getConnection, sql } from "../../database/connection";
import { storageQueries } from "../../database/computerQueries";

export const getStorages = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .query(storageQueries.getStorages);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postStorage = async (req, res) => {
  try {
    const { description, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("description", sql.VarChar, description)
      .input("userId", sql.VarChar, userId)
      .query(storageQueries.postStorage);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const getStorage = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("storageId", sql.Int, id)
      .query(storageQueries.getStorage);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const putStorage = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("storageId", sql.Int, id)
      .input("description", sql.VarChar, description)
      .input("userId", sql.VarChar, userId)
      .query(storageQueries.putStorage);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deleteStorage = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("storageId", sql.Int, id)
      .query(storageQueries.deleteStorage);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
