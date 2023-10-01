import { getConnection, sql } from "../../database/connection";
import { availabilityQueries } from "../../database/generalQueries";

export const getAvailabilities = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .query(availabilityQueries.getAvailabilities);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postAvailability = async (req, res) => {
  try {
    const { description, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("description", sql.VarChar, description)
      .input("userId", sql.VarChar, userId)
      .query(availabilityQueries.postAvailability);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const getAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("availabilityId", sql.Int, id)
      .query(availabilityQueries.getAvailability);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const putAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("availabilityId", sql.Int, id)
      .input("description", sql.VarChar, description)
      .input("userId", sql.VarChar, userId)
      .query(availabilityQueries.putAvailability);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deleteAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("availabilityId", sql.Int, id)
      .query(availabilityQueries.deleteAvailability);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
