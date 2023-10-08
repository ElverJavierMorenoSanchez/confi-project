import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

function SelectForm({ label, name, options, handleChange, newData, selected }) {
  const _options = options || [];
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        variant="outlined"
        label={label}
        name={name}
        onKeyDownCapture={(e) => {
          e.stopPropagation();
        }}
        value={selected}
        onChange={handleChange}
      >
        {newData}
        {_options.map((option, index) => (
          <MenuItem value={option.id || option.name} key={index}>
            {option.name || option.description}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectForm;
