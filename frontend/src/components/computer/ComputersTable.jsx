"use client";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { useEffect, useState } from "react";
import ComputerForm from "./ComputerForm";
import { Box, Button, ButtonGroup, useMediaQuery } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import { getComputers } from "@/libs/axios/computer/computer";
import ExportData from "../general/ExportData";

export default function ComputersTable() {
  const [computers, setComputers] = useState();
  const matchesW = useMediaQuery("(max-width:900px)");

  const _getComputers = async () => setComputers(await getComputers({}));
  const handleFilter = async (_filter) => {
    setComputers(await getComputers(_filter));
  };

  useEffect(() => {
    _getComputers();
  }, []);

  const columns = [
    {
      field: "serialNumber",
      headerName: "SERIE",
      width: 130,
      renderCell: (params) => (
        <Link
          href={`/computers/${params.id}`}
          className="font-bold hover:text-blue-500"
        >
          {params.value}
        </Link>
      ),
    },
    { field: "cnftLabel", headerName: "ETIQUETA CONFITECA", width: 180 },
    { field: "actualUser", headerName: "USUARIO ACTUAL", width: 200 },
    { field: "hostname", headerName: "HOSTNAME", width: 213 },
    {
      field: "availabilityDescription",
      headerName: "DISPONIBILIDAD",
      width: 180,
    },
    { field: "modelName", headerName: "MODELO", width: 150 },
    { field: "officeDescription", headerName: "OFFICE", width: 150 },
    {
      field: "stateDescription",
      headerName: "ESTADO ACTUAL",
      width: 150,
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          mb: "10px",
          display: "flex",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <ComputerForm
          width={"80%"}
          getComputers={_getComputers}
          computer={{}}
        />
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          color="inherit"
        >
          <ComputerForm
            width={"80%"}
            getComputers={_getComputers}
            handleFilter={handleFilter}
            computer={{}}
            filter={true}
          />

          <Button>
            <CachedIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          color="inherit"
        >
          <ExportData data={computers} />
        </ButtonGroup>
      </Box>
      <div
        style={{
          height: 400,
          width: "100%",
        }}
      >
        <DataGrid
          rows={computers || []}
          columns={columns}
          columnVisibilityModel={{
            stateDescription: matchesW,
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[8, 16]}
          density="compact"
          showCellVerticalBorder={true}
        />
      </div>
    </>
  );
}
