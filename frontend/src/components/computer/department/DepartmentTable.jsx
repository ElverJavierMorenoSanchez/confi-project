"use client";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { useEffect, useState } from "react";
import DepartmentForm from "./DepartmentForm";
import { Box, Button, ButtonGroup } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import { getDepartments } from "@/libs/axios/computer/department";
import ExportData from "@/components/general/ExportData";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function DepartmentTable() {
  const [departments, setDepartments] = useState();

  const _getDepartments = async () => setDepartments(await getDepartments({}));
  const handleFilter = async (_filter) => {
    setDepartments(await getDepartments(_filter));
  };

  useEffect(() => {
    _getDepartments();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 130,
      renderCell: (params) => (
        <Link
          href={`/departments/${params.id}`}
          className="font-bold hover:text-blue-500"
        >
          {params.value}
        </Link>
      ),
    },
    { field: "name", headerName: "DEPARTAMENTO", width: 180 },
    { field: "createdBy", headerName: "CREADO POR", width: 200 },
    { field: "modifiedBy", headerName: "MODIFICADO POR", width: 213 },
    {
      field: "",
      headerName: "OPCIONES",
      width: 240,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <DepartmentForm
            width={"50%"}
            getDepartments={_getDepartments}
            handleFilter={handleFilter}
            department={params.row}
            editable={true}
          />

          <Button startIcon={<DeleteForeverIcon />} color="error">
            Remover
          </Button>
        </Box>
      ),
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
        <DepartmentForm
          width={"50%"}
          getDepartments={_getDepartments}
          department={{}}
        />
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          color="inherit"
        >
          <DepartmentForm
            width={"50%"}
            getDepartments={_getDepartments}
            handleFilter={handleFilter}
            department={{}}
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
          <ExportData data={departments} />
        </ButtonGroup>
      </Box>
      <div
        style={{
          height: 400,
          width: "100%",
        }}
      >
        <DataGrid
          rows={departments || []}
          columns={columns}
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
