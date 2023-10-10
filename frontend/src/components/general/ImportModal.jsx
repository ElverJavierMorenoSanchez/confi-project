import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Dropzone from "react-dropzone";
import Loader from "./Loader";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ImportModal({ title, postAxios, getData }) {
  const [open, setOpen] = useState(false);
  const [attachment, setAttachment] = useState({});
  const [loading, setLoading] = useState(false);
  const [importType, setImportType] = useState("");

  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleImportType = (e) => setImportType(e.target.value);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", attachment);
    formData.append("userId", "1726789025");
    formData.append("importType", importType);

    setLoading(true);
    const response = await postAxios(formData);

    // Crear un objeto URL desde el blob recibido
    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Report.xlsx"); // Nombre para el archivo descargado
    document.body.appendChild(link);
    link.click();
    // Limpieza: remueve el enlace después de la descarga
    link.parentNode.removeChild(link);

    getData();
    setLoading(false);
    handleCloseModal();
  };

  return (
    <div>
      <MenuItem onClick={handleOpen}>Importar</MenuItem>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              mb: "32px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              mb={"16px"}
            >
              Importar {title}
            </Typography>
            {loading ? <Loader /> : null}
            <FormControl
              sx={{
                mb: "16px",
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="importType"
                defaultValue="insert"
                onChange={handleImportType}
              >
                <FormControlLabel
                  value="insert"
                  control={<Radio />}
                  label="Añadir"
                />
                <FormControlLabel
                  value="update"
                  control={<Radio />}
                  label="Actualizar"
                />
              </RadioGroup>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
              }}
            >
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                <Dropzone
                  acceptedFiles=".txt,.xls,.xlsx"
                  multiple={false}
                  noClick={true}
                  onDrop={(acceptedFiles) => {
                    setAttachment(acceptedFiles[0]);
                    setPreview(URL.createObjectURL(acceptedFiles[0]));
                  }}
                >
                  {({ getRootProps, getInputProps, open }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <VisuallyHiddenInput
                        className="message-form-icon-clip"
                        onClick={open}
                      />
                    </div>
                  )}
                </Dropzone>
                Upload file
              </Button>
              <Typography variant="h6" component="h4" fontSize={"1rem"}>
                {attachment?.name}
              </Typography>
            </Box>
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
            Importar
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{
              position: "absolute",
              bgcolor: "green",
              ml: "16px",
            }}
            onClick={handleCloseModal}
          >
            Cancelar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
