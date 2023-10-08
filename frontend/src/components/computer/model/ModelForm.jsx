"use client";
import SelectForm from "@/components/general/SelectForm";
import BrandForm from "@/components/general/brand/BrandForm";
import { postModel } from "@/libs/axios/general/model";
import {
  Box,
  TextField,
  Typography,
  Button,
  Modal,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const ModelForm = ({ brands, width, getModels, getBrands, _brandId }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [brandId, setBrandId] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleName = (e) => setName(e.target.value);
  const handleBrandId = (e) => setBrandId(e.target.value);

  const handleSubmit = async () => {
    const response = await postModel({ name, brandId, userId: "1726789025" });

    getModels(_brandId);
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
            Nuevo modelo
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
            <SelectForm
              label="Marca"
              options={brands}
              name="brandId"
              handleChange={handleBrandId}
              newData={<BrandForm width={"40%"} getBrands={getBrands} />}
            />
            <TextField
              label="Modelo"
              variant="outlined"
              name="model"
              onChange={handleName}
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

export default ModelForm;
