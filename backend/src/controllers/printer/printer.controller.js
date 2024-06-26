import { getConnection, sql } from "../../database/connection";
import { printerQueries } from "../../database/printerQueries";

export const getPrinters = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .query(printerQueries.getPrinters);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postPrinter = async (req, res) => {
  try {
    const {
      serialNumber,
      cnftLabel,
      sbdName,
      sbdCode,
      sbdRoute,
      observations,
      damages,
      vacantRoute,
      movements,
      categoryId,
      supervisorId,
      placeId,
      subcategoryId,
      availabilityId,
      stateId,
      userId,
    } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("serialNumber", sql.VarChar, serialNumber)
      .input("cnftLabel", sql.VarChar, cnftLabel)
      .input("sbdName", sql.VarChar, sbdName)
      .input("sbdCode", sql.VarChar, sbdCode)
      .input("sbdRoute", sql.VarChar, sbdRoute)
      .input("observations", sql.VarChar, observations)
      .input("damages", sql.VarChar, damages)
      .input("vacantRoute", sql.VarChar, vacantRoute)
      .input("movements", sql.VarChar, movements)
      .input("categoryId", sql.Int, categoryId)
      .input("supervisorId", sql.Int, supervisorId)
      .input("placeId", sql.Int, placeId)
      .input("subcategoryId", sql.Int, subcategoryId)
      .input("availabilityId", sql.Int, availabilityId)
      .input("stateId", sql.Int, stateId)
      .input("userId", sql.VarChar, userId)
      .query(printerQueries.postPrinter);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const getPrinter = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("printerId", sql.Int, id)
      .query(printerQueries.getPrinter);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const putPrinter = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      sbdName,
      sbdCode,
      sbdRoute,
      observations,
      damages,
      vacantRoute,
      movements,
      categoryId,
      supervisorId,
      placeId,
      subcategoryId,
      availabilityId,
      stateId,
      userId,
    } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("sbdName", sql.VarChar, sbdName)
      .input("sbdCode", sql.VarChar, sbdCode)
      .input("sbdRoute", sql.VarChar, sbdRoute)
      .input("observations", sql.VarChar, observations)
      .input("damages", sql.VarChar, damages)
      .input("vacantRoute", sql.VarChar, vacantRoute)
      .input("movements", sql.VarChar, movements)
      .input("categoryId", sql.Int, categoryId)
      .input("supervisorId", sql.Int, supervisorId)
      .input("placeId", sql.Int, placeId)
      .input("subcategoryId", sql.Int, subcategoryId)
      .input("availabilityId", sql.Int, availabilityId)
      .input("stateId", sql.Int, stateId)
      .input("userId", sql.VarChar, userId)
      .input("printerId", sql.VarChar, id)
      .query(printerQueries.putPrinter);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deletePrinter = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("printerId", sql.Int, id)
      .query(printerQueries.deletePrinter);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
