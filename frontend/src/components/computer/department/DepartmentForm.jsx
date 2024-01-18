"use client";
import ImportModal from "@/components/general/ImportModal";
import OpenMenu from "@/components/general/OpenMenu";
import {
  postDepartment,
  putDepartment,
} from "@/libs/axios/computer/department";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import EditNoteIcon from "@mui/icons-material/EditNote";

import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  Modal,
  ButtonGroup,
} from "@mui/material";

import { useState } from "react";

const DepartmentForm = ({
  width,
  getDepartments,
  filter,
  editable,
  menuItem,
  department,
}) => {
  const [name, setName] = useState(department?.name || "");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e) => {
    if (!editable) {
      const response = await postDepartment({
        name,
        userId: "1726789025",
      });
    } else {
      const response = await putDepartment({
        id: department.id,
        name,
        userId: "1726789025",
      });
    }

    getDepartments();
    handleClose();
  };

  return (
    <>
      {menuItem ? (
        <MenuItem onClick={handleOpen}>Nuevo...</MenuItem>
      ) : filter ? (
        <Button onClick={handleOpen} onKeyDown={handleKeyDown}>
          <FilterAltIcon />
        </Button>
      ) : editable ? (
        <Button
          color="success"
          startIcon={<EditNoteIcon />}
          onClick={handleOpen}
        >
          Editar
        </Button>
      ) : (
        <ButtonGroup variant="outlined" color="success">
          <Button startIcon={<AddIcon />} onClick={handleOpen}>
            Nuevo
          </Button>
          <OpenMenu
            importModal={
              <ImportModal
                title={"departamentos"}
                postAxios={() => {}}
                getData={() => {}}
              />
            }
          />
        </ButtonGroup>
      )}
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
            Nuevo departamento
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
              label="Departamento"
              variant="outlined"
              value={name}
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

export default DepartmentForm;
