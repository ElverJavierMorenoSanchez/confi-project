"use client";
import { postProccesor } from "@/libs/axios/computer/proccesor";
import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  Modal,
} from "@mui/material";
import { useState } from "react";

const ProccesorForm = ({ width, getProccesors }) => {
  const [name, setName] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    const response = await postProccesor({
      name,
      userId: "1726789025",
    });

    getProccesors();
    handleClose();
  };

  return (
    <>
      <MenuItem onClick={handleOpen}>Nuevo...</MenuItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { width },
            maxHeight: "90vh",
            overflowY: "auto",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nuevo procesador
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "64px",
              my: "30px",
            }}
          >
            <TextField
              label="Nombre del procesador"
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <Button
            variant="outlined"
            color="success"
            sx={{
              bgcolor: "green",
            }}
            type="submit"
            onClick={handleSubmit}
          >
            Guardar cambios
          </Button>

          <Button
            variant="outlined"
            color="error"
            sx={{
              position: "absolute",
              bgcolor: "green",
              ml: "16px",
            }}
            onClick={handleClose}
          >
            Cancelar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ProccesorForm;
