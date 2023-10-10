import XLSX from "xlsx";
import { getConnection, sql } from "../../database/connection";
import { computerQueries } from "../../database/computerQueries";
import path from "path";

export const getComputers = async (req, res) => {
  try {
    const computer = req.query;

    const pool = await getConnection();
    const { recordsets } = await pool
      .request()
      .input("serialNumber", sql.VarChar, computer.serialNumber || "%")
      .input("cnftLabel", sql.VarChar, computer.cnftLabel || "%")
      .input("city", sql.VarChar, computer.city || "%")
      .input("lastUser", sql.VarChar, computer.lastUser || "%")
      .input("actualUser", sql.VarChar, computer.actualUser || "%")
      .input("hostname", sql.VarChar, computer.hostname || "%")
      .input("observations", sql.VarChar, computer.observations || "%")
      .input("diskType", sql.VarChar, computer.diskType || "%")
      .input("officeLicence", sql.VarChar, computer.officeLicence || "%")
      .input("damages", sql.VarChar, computer.damages || "%")
      .input("userId", sql.VarChar, computer.userId || "%")
      .input("accquisitionDate", sql.Date, computer.accquisitionDate || null)
      .input("brandId", sql.Int, computer.brandId || null)
      .input("categoryId", sql.Int, computer.categoryId || null)
      .input("subcategoryId", sql.Int, computer.subcategoryId || null)
      .input("departmentId", sql.Int, computer.departmentId || null)
      .input("modelId", sql.Int, computer.modelId || null)
      .input("systemId", sql.Int, computer.systemId || null)
      .input("proccesorId", sql.Int, computer.proccesorId || null)
      .input("ramId", sql.Int, computer.ramId || null)
      .input("storageId", sql.Int, computer.storageId || null)
      .input("officeId", sql.Int, computer.officeId || null)
      .input("availabilityId", sql.Int, computer.availabilityId || null)
      .input("stateId", sql.Int, computer.stateId || null)
      .query(computerQueries.getComputers);

    return res.status(200).json(recordsets[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

export const postComputer = async (req, res) => {
  try {
    const computer = req.body;
    const errors = [];
    const pool = await getConnection();

    const response = await generalQuery(
      pool,
      computer,
      computer.userId,
      computerQueries.postComputer,
      errors
    );

    console.log({ response, errors });
    return res.status(200).json({ response, errors });
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
    const computer = req.body;
    const errors = [];
    const pool = await getConnection();

    const response = await generalQuery(
      pool,
      computer,
      computer.userId,
      computerQueries.putComputer,
      errors,
      id
    );

    console.log({ response, errors });
    return res.status(200).json({ response, errors });
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

export const postImport = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No se ha subido ningún archivo" });
  }

  const { userId, importType } = req.body;

  try {
    const errors = [];
    const pool = await getConnection();

    // Convierte el archivo Excel a JSON
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
    const sheetname = workbook.SheetNames[0];
    const jsonObjects = XLSX.utils.sheet_to_json(workbook.Sheets[sheetname]);

    for (const computer of jsonObjects) {
      await generalQuery(
        pool,
        computer,
        userId,
        importType === "insert"
          ? computerQueries.postComputer
          : computerQueries.putComputer,
        errors
      );
    }

    const errorWorkbook = XLSX.utils.book_new(); // Crea un nuevo libro de trabajo
    const worksheet = XLSX.utils.json_to_sheet(errors); // Convierte json a hoja

    // Agrega la hoja al libro de trabajo
    XLSX.utils.book_append_sheet(errorWorkbook, worksheet, "Sheet1");
    // Guarda el libro de trabajo en un archivo
    XLSX.writeFile(errorWorkbook, "./upload/Report.xlsx");
    const file = path.resolve(`./upload/Report.xlsx`);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    return res.status(200).download(file);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};

const generalQuery = async (pool, computer, userId, query, err, computerId) => {
  try {
    const response = await pool
      .request()
      .input("computerId", sql.Int, computerId || null)
      .input("serialNumber", sql.VarChar, computer.serialNumber)
      .input("cnftLabel", sql.VarChar, computer.cnftLabel)
      .input("city", sql.VarChar, computer.city)
      .input("lastUser", sql.VarChar, computer.lastUser)
      .input("actualUser", sql.VarChar, computer.actualUser)
      .input("hostname", sql.VarChar, computer.hostname)
      .input("brandId", sql.Int, computer.brandId)
      .input("observations", sql.VarChar, computer.observations)
      .input("diskType", sql.VarChar, computer.diskType)
      .input("accquisitionDate", sql.Date, computer.accquisitionDate)
      .input("damages", sql.VarChar, computer.damages)
      .input("categoryId", sql.Int, computer.categoryId)
      .input("subcategoryId", sql.Int, computer.subcategoryId)
      .input("departmentId", sql.Int, computer.departmentId)
      .input("modelId", sql.Int, computer.modelId)
      .input("systemId", sql.Int, computer.systemId)
      .input("proccesorId", sql.Int, computer.proccesorId)
      .input("ramId", sql.Int, computer.ramId)
      .input("storageId", sql.Int, computer.storageId)
      .input("officeId", sql.Int, computer.officeId)
      .input("officeLicence", sql.VarChar, computer.officeLicence)
      .input("availabilityId", sql.Int, computer.availabilityId)
      .input("stateId", sql.Int, computer.stateId)
      .input("userId", sql.VarChar, userId)
      .query(query);
    return response;
  } catch (error) {
    err.push({
      serialNumber: computer.serialNumber,
      message: error.message,
    });
  }
};
