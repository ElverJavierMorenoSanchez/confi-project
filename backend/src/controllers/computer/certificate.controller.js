import { getConnection, sql } from "../../database/connection";
import { certificateQueries } from "../../database/computerQueries";

export const getCertificates = async (req, res) => {
  try {
    const { computerId } = req.query;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("computerId", sql.Int, computerId)
      .query(certificateQueries.getCertificates);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postCertificate = async (req, res) => {
  try {
    const { name, computerId, userId } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("computerId", sql.Int, computerId)
      .input("userId", sql.VarChar, userId)
      .query(certificateQueries.postCertificate);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const getCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("certificateId", sql.Int, id)
      .query(certificateQueries.getCertificate);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("certificateId", sql.Int, id)
      .query(certificateQueries.deleteCertificate);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
