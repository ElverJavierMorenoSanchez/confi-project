import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";

const DeleteUptade = ({ form }) => {
  return (
    <div className="mt-2 pt-2">
      <Button
        variant="outlined"
        color="success"
        sx={{
          bgcolor: "green",
        }}
        type="submit"
        endIcon={<EditNoteIcon />}
      >
        Editar
      </Button>
      {form}
      <Button
        variant="outlined"
        color="error"
        sx={{
          position: "absolute",
          bgcolor: "green",
          ml: "16px",
        }}
        endIcon={<DeleteForeverIcon />}
      >
        Eliminar
      </Button>
    </div>
  );
};

export default DeleteUptade;
