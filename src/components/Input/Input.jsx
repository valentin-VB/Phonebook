import { TextField } from '@mui/material';

function Input({
  name,
  label,
  type,
  autoFocus = false,
  register,
  autoComplete,
  pattern,
  title,
  startadornment,
  placeholder = '',
}) {
  return (
    <TextField
      type={type}
      margin="normal"
      required
      fullWidth
      id={name}
      label={label}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      pattern={pattern}
      title={title}
      placeholder={placeholder}
      InputProps={{
        startAdornment: startadornment,
      }}
      {...register(name)}
    />
  );
}

export default Input;
