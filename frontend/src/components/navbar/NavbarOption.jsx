"use client";

import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import Link from "next/link";

const NavbarOption = ({
  title,
  anchorEl,
  handleClick,
  handleClose,
  options,
}) => {
  return (
    <>
      <Button
        onClick={handleClick}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        {title}
      </Button>
      {options && (
        <Box sx={{ flexGrow: 0 }}>
          <Menu
            sx={{ mt: "45px" }}
            id={`menu-${title}`}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map(({ title, href }) => (
              <MenuItem key={title} onClick={handleClose}>
                <Link href={href}>
                  <Typography textAlign="center">{title}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )}
    </>
  );
};

export default NavbarOption;
