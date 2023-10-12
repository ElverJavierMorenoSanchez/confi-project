import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import MenuOption from "./MenuOption";

const TablePageLayout = async ({ table }) => {
  return (
    <Box
      sx={{
        overflow: "auto",
        padding: "0 30px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="mt-24"
    >
      <Box
        sx={{
          border: "none",
          display: "inline-block",
        }}
      >
        <MenuOption title={"Lista"} active={true} href={"#"} />
      </Box>

      <Box
        sx={{
          width: "100%",
          padding: "1% 2%",
          border: "2px solid #ddd",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {table}
      </Box>
    </Box>
  );
};

export default TablePageLayout;
