import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterUpdate } from 'Redux/filter/filterSlice';
import { selectFilter } from 'Redux/filter/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  return (
    <TextField
      name="filter"
      label="Search..."
      type="text"
      onChange={evt => dispatch(filterUpdate(evt.currentTarget.value))}
      value={filterValue}
      fullWidth
      id="outlined-basic"
      sx={{
        mb: '15px',
      }}
    />
  );
};

export default Filter;
