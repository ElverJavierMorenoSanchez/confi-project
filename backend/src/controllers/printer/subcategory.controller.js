import { getConnection, sql } from "../../database/connection";
import { subcategoryQueries } from "../../database/printerQueries";

export const getSubcategories = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .query(subcategoryQueries.getSubcategories);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postSubcategory = async (req, res) => {
  try {
    const { name, categoryId, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("categoryId", sql.Int, categoryId)
      .input("userId", sql.VarChar, userId)
      .query(subcategoryQueries.postSubcategory);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const getSubcategory = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("subcategoryId", sql.Int, id)
      .query(subcategoryQueries.getSubcategory);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const putSubcategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, categoryId, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("subcategoryId", sql.Int, id)
      .input("name", sql.VarChar, name)
      .input("categoryId", sql.Int, categoryId)
      .input("userId", sql.VarChar, userId)
      .query(subcategoryQueries.putSubcategory);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deleteSubcategory = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("subcategoryId", sql.Int, id)
      .query(subcategoryQueries.deleteSubcategory);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
