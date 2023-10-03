import RowTable from "@/components/general/RowTable";
import { getComputer } from "@/libs/axios/computer";
import { Box, Typography } from "@mui/material";

import React from "react";

const InformationPage = async () => {
  const computer = await getComputer(3);

  return (
    <Box
      sx={{
        m: "50px 0",
        minHeight: "90vh",
        padding: "0 2%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "96%",
              top: 30,
              left: 1,
              padding: "10px",
              bgcolor: "white",
            }}
          />
          <Typography
            sx={{
              padding: "6px 10px",
              border: "2px solid #aeaeae",
              borderWidth: "2px 2px 0px 2px",
              borderTop: "3px solid #fe4a4a",
            }}
          >
            Lista
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "2%",
          border: "2px solid #aeaeae",
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
            <RowTable title={"Ciudad"} description={computer.city} />
            <RowTable
              title={"Departamento"}
              description={computer.departmentName}
            />
            <RowTable
              title={"Ultimo usuario"}
              description={computer.lastUser}
            />
            <RowTable
              title={"Usuario Actual"}
              description={computer.actualUser}
            />
            <RowTable
              title={"Estado actual"}
              description={computer.stateDescription}
            />
            <RowTable
              title={"Disponibilidad"}
              description={computer.availabilityDescription}
            />
            <RowTable title={"Hostname"} description={computer.hostname} />
            <RowTable title={"Marca"} description={computer.brand} />
            <RowTable title={"Modelo"} description={computer.modelName} />
            <RowTable title={"Tipo de disco"} description={computer.diskType} />
            <RowTable
              title={"Capacidad de almacenamiento"}
              description={computer.storageDescription}
            />
            <RowTable
              title={"Tipo de sistema"}
              description={computer.systemName}
            />
            <RowTable
              title={"Tipo de procesador"}
              description={computer.proccesorName}
            />
            <RowTable
              title={"Tipo de memoria RAM"}
              description={computer.ramDescription}
            />
            <RowTable
              title={"Capacidad de memoria RAM"}
              description={computer.serialNumber}
            />
            <RowTable
              title={"Tipo de office"}
              description={computer.officeDescription}
            />
            <RowTable
              title={"Licencia de Office"}
              description={computer.serialNumber}
            />
            <RowTable
              title={"Fecha de adquisicion"}
              description={computer.accquisitionDate}
            />
          </tbody>
        </table>
        <table className="w-1/2">
          <tbody>
            <RowTable
              title={"Observaciones"}
              description={computer.observations}
            />
            <RowTable title={"Daños"} description={computer.damages} />
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default InformationPage;
