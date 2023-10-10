import { useState } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, Menu, MenuItem } from "@mui/material";

import * as XLSX from "xlsx";

const ExportData = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExport = () => {
    const workbook = XLSX.utils.book_new(); // Crea un nuevo libro de trabajo
    const worksheet = XLSX.utils.json_to_sheet(data); // Convierte json a hoja

    // Agrega la hoja al libro de trabajo
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // Guarda el libro de trabajo en un archivo
    XLSX.writeFile(workbook, "table.xlsx");
  };

  return (
    <>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FileDownloadIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem
          onClick={() => {
            handleExport();
            handleClose();
          }}
        >
          Exportar tabla
        </MenuItem>
      </Menu>
    </>
  );
};

export default ExportData;
