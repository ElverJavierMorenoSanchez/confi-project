import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CachedIcon from "@mui/icons-material/Cached";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import React from "react";
import MenuOption from "./MenuOption";

const TablePageLayout = async ({ table, newDataComponent }) => {
  return (
    <Box
      sx={{
        height: "90vh",
        padding: "0 2%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: "none",
          display: "inline-block",
        }}
      >
        <MenuOption title={"Lista"} active={true} href={"/"} />
      </Box>

      <Box
        sx={{
          width: "100%",
          padding: "2%",
          border: "2px solid #ddd",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            mb: "10px",
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          {newDataComponent}
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            color="inherit"
          >
            <Button>
              <FilterAltIcon />
            </Button>
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
        {table}
      </Box>
    </Box>
  );
};

export default TablePageLayout;
