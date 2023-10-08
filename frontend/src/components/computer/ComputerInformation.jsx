"use client";
import { useEffect, useState } from "react";
import RowTable from "../general/RowTable";
import ComputerForm from "./ComputerForm";
import { Box, Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteComputer, getComputer } from "@/libs/axios/computer/computer";

const ComputerInformation = ({ _computer }) => {
  const [computer, setComputer] = useState(_computer);

  const _getComputer = async () => setComputer(await getComputer(_computer.id));

  const _deleteComputer = async () => {
    const response = await deleteComputer(_computer.id);
    window.location.href = "/computers";
  };

  useEffect(() => {
    _getComputer();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        padding: "2%",
        border: "2px solid #aeaeae",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "20px",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-evenly",
        }}
      >
        <table className="w-1/2">
          <tbody>
            <RowTable
              title={"Numero de serie"}
              description={computer.serialNumber}
            />
            <RowTable
              title={"Etiqueta confiteca"}
              description={computer.cnftLabel}
            />
            <RowTable title={"Categoria"} description={computer.categoryName} />
            <RowTable
              title={"Subcategoria"}
              description={computer.subcategoryName}
            />

            <RowTable
              title={"Ultimo usuario"}
              description={computer.lastUser}
            />
            <RowTable
              title={"Usuario Actual"}
              description={computer.actualUser}
            />

            <RowTable title={"Hostname"} description={computer.hostname} />
            <RowTable title={"Marca"} description={computer.brandName} />
            <RowTable title={"Modelo"} description={computer.modelName} />
            <RowTable
              title={"Tipo de sistema"}
              description={computer.systemName}
            />
            <RowTable
              title={"Tipo de procesador"}
              description={computer.proccesorName}
            />
            <RowTable title={"Tipo de disco"} description={computer.diskType} />
            <RowTable
              title={"Almacenamiento"}
              description={computer.storageDescription}
            />
            <RowTable
              title={"Tipo de memoria RAM"}
              description={computer.ramDescription}
            />
            <RowTable
              title={"Tipo de office"}
              description={computer.officeDescription}
            />
            <RowTable
              title={"Licencia de Office"}
              description={computer.officeLicence}
            />
            <RowTable
              title={"Fecha de adquisicion"}
              description={computer.accquisitionDate}
            />
          </tbody>
        </table>
        <table className="w-1/2">
          <tbody>
            <RowTable title={"Ciudad"} description={computer.city} />
            <RowTable
              title={"Departamento"}
              description={computer.departmentName}
            />
            <RowTable
              title={"Estado actual"}
              description={computer.stateDescription}
            />
            <RowTable
              title={"Disponibilidad"}
              description={computer.availabilityDescription}
            />
            <RowTable
              title={"Observaciones"}
              description={computer.observations}
            />
            <RowTable title={"Daños"} description={computer.damages} />
          </tbody>
        </table>
      </Box>
      <Box>
        <ComputerForm
          computer={computer}
          editable={true}
          getComputer={_getComputer}
        />
        <Button
          variant="outlined"
          color="error"
          sx={{
            position: "absolute",
            bgcolor: "green",
            ml: "16px",
          }}
          endIcon={<DeleteForeverIcon />}
          onClick={_deleteComputer}
        >
          Eliminar
        </Button>
      </Box>
    </Box>
  );
};

export default ComputerInformation;
