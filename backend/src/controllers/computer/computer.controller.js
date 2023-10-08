import { getConnection, sql } from "../../database/connection";
import { computerQueries } from "../../database/computerQueries";

export const getComputers = async (req, res) => {
  try {
    const {
      serialNumber,
      cnftLabel,
      city,
      lastUser,
      actualUser,
      hostname,
      brandId,
      observations,
      diskType,
      accquisitionDate,
      damages,
      categoryId,
      subcategoryId,
      departmentId,
      modelId,
      systemId,
      proccesorId,
      ramId,
      storageId,
      officeId,
      officeLicence,
      availabilityId,
      stateId,
      userId,
    } = req.query;

    console.log(serialNumber || "%");
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("serialNumber", sql.VarChar, serialNumber || "%")
      .input("cnftLabel", sql.VarChar, cnftLabel || "%")
      .input("city", sql.VarChar, city || "%")
      .input("lastUser", sql.VarChar, lastUser || "%")
      .input("actualUser", sql.VarChar, actualUser || "%")
      .input("hostname", sql.VarChar, hostname || "%")
      .input("observations", sql.VarChar, observations || "%")
      .input("diskType", sql.VarChar, diskType || "%")
      .input("officeLicence", sql.VarChar, officeLicence || "%")
      .input("damages", sql.VarChar, damages || "%")
      .input("userId", sql.VarChar, userId || "%")
      .input("accquisitionDate", sql.Date, accquisitionDate || null)
      .input("brandId", sql.Int, brandId || null)
      .input("categoryId", sql.Int, categoryId || null)
      .input("subcategoryId", sql.Int, subcategoryId || null)
      .input("departmentId", sql.Int, departmentId || null)
      .input("modelId", sql.Int, modelId || null)
      .input("systemId", sql.Int, systemId || null)
      .input("proccesorId", sql.Int, proccesorId || null)
      .input("ramId", sql.Int, ramId || null)
      .input("storageId", sql.Int, storageId || null)
      .input("officeId", sql.Int, officeId || null)
      .input("availabilityId", sql.Int, availabilityId || null)
      .input("stateId", sql.Int, stateId || null)
      .query(computerQueries.getComputers);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postComputer = async (req, res) => {
  try {
    const {
      serialNumber,
      cnftLabel,
      city,
      lastUser,
      actualUser,
      hostname,
      brandId,
      observations,
      diskType,
      accquisitionDate,
      damages,
      categoryId,
      subcategoryId,
      departmentId,
      modelId,
      systemId,
      proccesorId,
      ramId,
      storageId,
      officeId,
      officeLicence,
      availabilityId,
      stateId,
      userId,
    } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("serialNumber", sql.VarChar, serialNumber)
      .input("cnftLabel", sql.VarChar, cnftLabel)
      .input("city", sql.VarChar, city)
      .input("lastUser", sql.VarChar, lastUser)
      .input("actualUser", sql.VarChar, actualUser)
      .input("hostname", sql.VarChar, hostname)
      .input("brandId", sql.Int, brandId)
      .input("observations", sql.VarChar, observations)
      .input("diskType", sql.VarChar, diskType)
      .input("accquisitionDate", sql.Date, accquisitionDate)
      .input("damages", sql.VarChar, damages)
      .input("categoryId", sql.Int, categoryId)
      .input("subcategoryId", sql.Int, subcategoryId)
      .input("departmentId", sql.Int, departmentId)
      .input("modelId", sql.Int, modelId)
      .input("systemId", sql.Int, systemId)
      .input("proccesorId", sql.Int, proccesorId)
      .input("ramId", sql.Int, ramId)
      .input("storageId", sql.Int, storageId)
      .input("officeId", sql.Int, officeId)
      .input("officeLicence", sql.VarChar, officeLicence)
      .input("availabilityId", sql.Int, availabilityId)
      .input("stateId", sql.Int, stateId)
      .input("userId", sql.VarChar, userId)
      .query(computerQueries.postComputer);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const getComputer = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("computerId", sql.Int, id)
      .query(computerQueries.getComputer);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const putComputer = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      serialNumber,
      cnftLabel,
      city,
      lastUser,
      actualUser,
      hostname,
      brandId,
      observations,
      diskType,
      accquisitionDate,
      damages,
      categoryId,
      subcategoryId,
      departmentId,
      modelId,
      systemId,
      proccesorId,
      ramId,
      storageId,
      officeId,
      officeLicence,
      availabilityId,
      stateId,
      userId,
    } = req.body;
    const pool = await getConnection();

    const dbResponse = await pool
      .request()
      .input("computerId", sql.Int, id)
      .input("serialNumber", sql.VarChar, serialNumber)
      .input("cnftLabel", sql.VarChar, cnftLabel)
      .input("city", sql.VarChar, city)
      .input("lastUser", sql.VarChar, lastUser)
      .input("actualUser", sql.VarChar, actualUser)
      .input("hostname", sql.VarChar, hostname)
      .input("brandId", sql.Int, brandId)
      .input("observations", sql.VarChar, observations)
      .input("diskType", sql.VarChar, diskType)
      .input("accquisitionDate", sql.Date, accquisitionDate)
      .input("damages", sql.VarChar, damages)
      .input("categoryId", sql.Int, categoryId)
      .input("subcategoryId", sql.Int, subcategoryId)
      .input("departmentId", sql.Int, departmentId)
      .input("modelId", sql.Int, modelId)
      .input("systemId", sql.Int, systemId)
      .input("proccesorId", sql.Int, proccesorId)
      .input("ramId", sql.Int, ramId)
      .input("storageId", sql.Int, storageId)
      .input("officeId", sql.Int, officeId)
      .input("officeLicence", sql.VarChar, officeLicence)
      .input("availabilityId", sql.Int, availabilityId)
      .input("stateId", sql.Int, stateId)
      .input("userId", sql.VarChar, userId)
      .query(computerQueries.putComputer);
    console.log(dbResponse);
    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const deleteComputer = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const dbResponse = await pool
      .request()
      .input("computerId", sql.Int, id)
      .query(computerQueries.deleteComputer);

    return res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
