"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import SelectForm from "../general/SelectForm";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { getModelsByBrand } from "@/libs/axios/general/model";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ComputerForm = ({ selectOptions }) => {
  const {
    categories,
    subcategories,
    states,
    availabilities,
    departments,
    systems,
    proccesors,
    rams,
    storages,
    brands,
  } = selectOptions;

  const [open, setOpen] = useState(false);
  const [models, setModels] = useState([]);
  const [brand, setBrand] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBrand = (e) => {
    setBrand(e.target.value);
    getModels(e.target.value);
  };

  const getModels = async (id) => {
    const response = await getModelsByBrand(id);
    setModels(response);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="success"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Nuevo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nuevo computador
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
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <TextField label="Número de serie" variant="outlined" />
              <TextField label="Código confiteca" variant="outlined" />
              <TextField label="Fecha de adquisición" variant="outlined" />
              <SelectForm
                label="Marca"
                options={brands}
                handleChange={handleBrand}
              />
              <SelectForm label="Modelo" options={models} />
              <SelectForm label="Sistema operativo" options={systems} />
              <TextField label="Tipo de disco" variant="outlined" />
              <SelectForm label="Almacenamiento" options={storages} />
              <SelectForm label="Procesador" options={proccesors} />
              <SelectForm label="Memoria ram" options={rams} />
              <TextField label="Ciudad" variant="outlined" />
              <SelectForm label="Departamento" options={departments} />
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <TextField label="Hostname" variant="outlined" />
              <SelectForm label="Categoria" options={categories} />
              <SelectForm label="Subcategoria" options={subcategories} />
              <TextField label="Office" variant="outlined" />
              <TextField label="Último usuario" variant="outlined" />
              <TextField label="Usuario actual" variant="outlined" />
              <SelectForm label="Disponibilidad" options={availabilities} />
              <SelectForm label="Estado" options={states} />
              <TextField
                label="Descripción"
                multiline
                rows={2}
                rowsMax={8}
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Daños"
                multiline
                rows={2}
                rowsMax={8}
                variant="outlined"
                fullWidth
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
            }}
          >
            <Button
              variant="outlined"
              color="success"
              sx={{
                bgcolor: "green",
              }}
            >
              Guardar cambios
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{
                bgcolor: "green",
              }}
              onClick={handleClose}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ComputerForm;
