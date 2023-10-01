import { getConnection, sql } from "../../database/connection";
import { placeQueries } from "../../database/printerQueries";

export const getPlaces = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool.request().query(placeQueries.getPlaces);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postPlace = async (req, res) => {
  try {
    const { name, supervisorId, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("supervisorId", sql.Int, supervisorId)
      .input("userId", sql.VarChar, userId)
      .query(placeQueries.postPlace);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const getPlace = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("placeId", sql.Int, id)
      .query(placeQueries.getPlace);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const putPlace = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, supervisorId, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("placeId", sql.Int, id)
      .input("name", sql.VarChar, name)
      .input("supervisorId", sql.Int, supervisorId)
      .input("userId", sql.VarChar, userId)
      .query(placeQueries.putPlace);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deletePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("placeId", sql.Int, id)
      .query(placeQueries.deletePlace);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
