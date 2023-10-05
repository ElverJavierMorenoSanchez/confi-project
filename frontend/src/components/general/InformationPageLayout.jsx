import { Box, Button, ButtonGroup, Typography } from "@mui/material";

import React from "react";
import MenuOption from "./MenuOption";

const InformationPageLayout = async ({ infomationComponent, category }) => {
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
      <Box
        sx={{
          border: "none",
          display: "inline-block",
        }}
      >
        <MenuOption title={"Lista"} active={false} href={`/${category}`} />
        <MenuOption title={"Información"} active={true} href={"#"} />
        <MenuOption title={"Editar"} active={false} href={"/"} />
        <MenuOption title={"Imágenes"} active={false} href={"/"} />
        <MenuOption title={"Actas de entrega"} active={false} href={"/"} />
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
            padding: "2%",
            border: "2px solid #aeaeae",
            display: "flex",
            gap: "20px",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          {infomationComponent}
        </Box>
      </Box>
    </Box>
  );
};

export default InformationPageLayout;
