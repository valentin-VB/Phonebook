import { TextField } from '@mui/material';

const Filter = ({ value, onChange }) => {
  return (
    <TextField
      name="filter"
      label="Search..."
      type="text"
      onChange={onChange}
      value={value}
      fullWidth
      id="outlined-basic"
      sx={{
        mb: '15px',
      }}
    />
  );
};

export default Filter;
