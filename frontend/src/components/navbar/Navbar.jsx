"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import NavbarOption from "./NavbarOption";

const pages = ["COMPUTADORES"];
const generalOptions = [
  { title: "Disponibilidad", href: "/general/availability" },
  { title: "Modelo", href: "/general/model" },
  { title: "Categoría", href: "/general/category" },
  { title: "Subcategoría", href: "/general/subcategory" },
  { title: "Estado", href: "/general/state" },
];
const computerOptions = [
  { title: "Departamento", href: "/computers/department" },
  { title: "Office", href: "/computers/office" },
  { title: "Sistema Operativo", href: "/computers/os" },
  { title: "Procesador", href: "/computers/proccesor" },
  { title: "MemoriaRam", href: "/computers/ram" },
  { title: "Almacenamiento", href: "/computers/storage" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElGeneral, setAnchorElGeneral] = useState(null);
  const [anchorElComputers, setAnchorElComputers] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenGeneralMenu = (event) => {
    setAnchorElGeneral(event.currentTarget);
  };
  const handleOpenComputersMenu = (event) => {
    setAnchorElComputers(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseGeneralMenu = () => {
    setAnchorElGeneral(null);
  };
  const handleCloseComputersMenu = () => {
    setAnchorElComputers(null);
  };

  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CONFITECA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <NavbarOption
                title="COMPUTADORES"
                options={computerOptions}
                handleClick={handleOpenComputersMenu}
                anchorEl={anchorElComputers}
                handleClose={handleCloseComputersMenu}
              />
              <NavbarOption
                title="GENERAL"
                options={generalOptions}
                handleClick={handleOpenGeneralMenu}
                anchorEl={anchorElGeneral}
                handleClose={handleCloseGeneralMenu}
              />
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CONFITECA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavbarOption
              title="COMPUTADORES"
              options={computerOptions}
              handleClick={handleOpenComputersMenu}
              anchorEl={anchorElComputers}
              handleClose={handleCloseComputersMenu}
            />
            <NavbarOption
              title="GENERAL"
              options={generalOptions}
              handleClick={handleOpenGeneralMenu}
              anchorEl={anchorElGeneral}
              handleClose={handleCloseGeneralMenu}
            />
            <NavbarOption title="PRUEBA" handleClick={() => {}} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
