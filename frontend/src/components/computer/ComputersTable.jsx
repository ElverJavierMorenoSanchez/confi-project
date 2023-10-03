"use client";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";

export default function ComputersTable({ computers }) {
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
    { field: "hostname", headerName: "HOSTNAME", width: 200 },
    {
      field: "availabilityDescription",
      headerName: "DISPONIBILIDAD",
      width: 130,
    },
    { field: "modelName", headerName: "MODELO", width: 200 },
  ];

  return (
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
  );
}
