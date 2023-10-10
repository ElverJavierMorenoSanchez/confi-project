import { Box, Button, ButtonGroup } from "@mui/material";

import React from "react";
import MenuOption from "./MenuOption";

const TablePageLayout = async ({ table }) => {
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
