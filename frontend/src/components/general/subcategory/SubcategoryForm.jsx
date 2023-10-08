"use client";
import SelectForm from "@/components/general/SelectForm";
import {
  Box,
  TextField,
  Typography,
  Button,
  Modal,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import CategoryForm from "../category/CategoryForm";
import { postSubcategory } from "@/libs/axios/general/subcategory";

const SubcategoryForm = ({
  categories,
  width,
  getSubcategories,
  getCategories,
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleName = (e) => setName(e.target.value);
  const handleCategoryId = (e) => setCategoryId(e.target.value);

  const handleSubmit = async () => {
    const response = await postSubcategory({
      name,
      categoryId,
      userId: "1726789025",
    });

    getSubcategories();
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
            Nueva subcategoria
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
              label="Categoría"
              options={categories}
              handleChange={handleCategoryId}
              newData={
                <CategoryForm width={"40%"} getCategories={getCategories} />
              }
            />
            <TextField
              label="Subcategoría"
              variant="outlined"
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

export default SubcategoryForm;
