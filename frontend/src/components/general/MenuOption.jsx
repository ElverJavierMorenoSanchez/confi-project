import { Box, Typography } from "@mui/material";
import Link from "next/link";

const style = {
  active: {
    marginTop: 0,
    position: "relative",
    borderTop: "3px solid #d12610",
    marginBottom: "-2px",
    display: "inline-block",
  },
  desactive: {
    marginTop: 0,
    position: "relative",
    borderTop: "none",
    display: "inline-block",
  },
};

const MenuOption = ({ title, active, href }) => {
  return (
    <Box sx={active ? style.active : style.desactive}>
      <Link href={href}>
        <Typography
          sx={{
            backgroundColor: "#fff",
            padding: "6px 10px",
            border: active ? "2px solid #ddd" : "0px solid #ddd",
            borderBottomColor: "transparent",
          }}
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default MenuOption;
