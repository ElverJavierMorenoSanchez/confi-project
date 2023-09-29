import { getConnection, sql } from "../../database/connection";
import { categoriesQueries } from "../../database/query";

export const getCategories = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .query(categoriesQueries.getCategories);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
  }
};

export const postcategory = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("userId", sql.VarChar, userId)
      .query(categoriesQueries.postCategory);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("categoryId", sql.Int, id)
      .query(categoriesQueries.getCategory);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
  }
};

export const putCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("categoryId", sql.Int, id)
      .input("name", sql.VarChar, name)
      .input("userId", sql.VarChar, userId)
      .query(categoriesQueries.putCategory);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("categoryId", sql.Int, id)
      .query(categoriesQueries.deleteCategory);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
  }
};
