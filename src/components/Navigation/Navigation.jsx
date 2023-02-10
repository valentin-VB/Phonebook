import { Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'Redux/auth/selectors';

const Navigation = () => {
  const token = useSelector(selectToken);
  console.log('token', token);
  return (
    <nav>
      <Toolbar sx={{ gap: '25px' }}>
        <NavLink to="/">
          <Typography variant="h6" color="secondary">
            Home
          </Typography>
        </NavLink>
        {token && (
          <NavLink to="/contacts">
            {' '}
            <Typography variant="h6" color="secondary">
              Contacts
            </Typography>
          </NavLink>
        )}
      </Toolbar>
    </nav>
  );
};

export default Navigation;
