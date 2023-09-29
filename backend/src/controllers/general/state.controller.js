import { getConnection, sql } from "../../database/connection";
import { stateQueries } from "../../database/query";

export const getStates = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool.request().query(stateQueries.getStates);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
  }
};

export const postState = async (req, res) => {
  try {
    const { description, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("description", sql.VarChar, description)
      .input("userId", sql.VarChar, userId)
      .query(stateQueries.postState);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
  }
};

export const getState = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("stateId", sql.Int, id)
      .query(stateQueries.getState);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
  }
};

export const putState = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("stateId", sql.Int, id)
      .input("description", sql.VarChar, description)
      .input("userId", sql.VarChar, userId)
      .query(stateQueries.putState);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
  }
};

export const deleteState = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("stateId", sql.Int, id)
      .query(stateQueries.deleteState);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
  }
};
