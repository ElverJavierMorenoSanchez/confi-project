import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

function SelectForm({ label, options, handleChange }) {
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select variant="outlined" label={label} onChange={handleChange}>
        {options.map((option, index) => (
          <MenuItem value={option.id || option.id} key={index}>
            {option.name || option.description}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectForm;
