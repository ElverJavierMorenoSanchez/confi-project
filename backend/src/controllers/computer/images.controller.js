import { getConnection, sql } from "../../database/connection";
import { imageQueries } from "../../database/computerQueries";

export const getImages = async (req, res) => {
  try {
    const { computerId } = req.query;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("computerId", sql.Int, computerId)
      .query(imageQueries.getImages);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postImage = async (req, res) => {
  try {
    const { name, computerId, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("computerId", sql.Int, computerId)
      .input("userId", sql.VarChar, userId)
      .query(imageQueries.postImage);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const getImage = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("imageId", sql.Int, id)
      .query(imageQueries.getImage);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("imageId", sql.Int, id)
      .query(imageQueries.deleteImage);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
