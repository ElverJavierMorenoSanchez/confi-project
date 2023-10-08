import { getConnection, sql } from "../../database/connection";
import { modelQueries } from "../../database/generalQueries";

export const getModels = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool.request().query(modelQueries.getModels);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getModelsByBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("brandId", sql.Int, id)
      .query(modelQueries.getModelsByBrand);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const postModel = async (req, res) => {
  try {
    const { name, brandId, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("brandId", sql.Int, brandId)
      .input("userId", sql.VarChar, userId)
      .query(modelQueries.postModel);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
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
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const putModel = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, brandId, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("modelId", sql.Int, id)
      .input("name", sql.VarChar, name)
      .input("brandId", sql.VarChar, brandId)
      .input("userId", sql.VarChar, userId)
      .query(modelQueries.putModel);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    return res.status(404).json({ message: error.message });
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
  }
};
