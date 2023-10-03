import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CachedIcon from "@mui/icons-material/Cached";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import React from "react";

const PageLayout = async ({ table }) => {
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            p: "5px 0",
            mb: "10px",
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <Button variant="outlined" color="success" startIcon={<AddIcon />}>
            Nuevo
          </Button>
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

export default PageLayout;
