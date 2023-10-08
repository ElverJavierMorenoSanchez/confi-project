"use client";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { useEffect, useState } from "react";
import ComputerForm from "./ComputerForm";
import { Box, Button, ButtonGroup } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { getComputers } from "@/libs/axios/computer/computer";

export default function ComputersTable({ _computers }) {
  const [computers, setComputers] = useState(_computers);

  const _getComputers = async () => setComputers(await getComputers({}));
  const handleFilter = async (_filter) => {
    setComputers(await getComputers(_filter));
  };

  const columns = [
    {
      field: "serialNumber",
      headerName: "SERIE",
      width: 200,
      renderCell: (params) => (
        <Link
          href={`/computers/${params.id}`}
          className="font-bold hover:text-blue-500"
        >
          {params.value}
        </Link>
      ),
    },
    { field: "cnftLabel", headerName: "ETIQUETA CONFITECA", width: 200 },
    { field: "actualUser", headerName: "USUARIO ACTUAL", width: 200 },
    { field: "hostname", headerName: "HOSTNAME", width: 130 },
    {
      field: "availabilityDescription",
      headerName: "DISPONIBILIDAD",
      width: 180,
    },
    { field: "modelName", headerName: "MODELO", width: 200 },
    { field: "officeDescription", headerName: "OFFICE", width: 200 },
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
          <Button>
            <FileDownloadIcon />
          </Button>
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
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </>
  );
}
