import { getConnection, sql } from "../../database/connection";
import { modelQueries } from "../../database/computerQueries";

export const getModels = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool.request().query(modelQueries.getModels);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const postModel = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("userId", sql.VarChar, userId)
      .query(modelQueries.postModel);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const getModel = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("modelId", sql.Int, id)
      .query(modelQueries.getModel);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const putModel = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("modelId", sql.Int, id)
      .input("name", sql.VarChar, name)
      .input("userId", sql.VarChar, userId)
      .query(modelQueries.putModel);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const deleteModel = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("modelId", sql.Int, id)
      .query(modelQueries.deleteModel);

    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
    console.log(error);
  }
};
