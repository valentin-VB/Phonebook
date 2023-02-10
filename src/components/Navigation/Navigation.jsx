import { Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Toolbar sx={{ gap: '25px' }}>
        <NavLink to="/">
          <Typography variant="h6" color="secondary">
            Home
          </Typography>
        </NavLink>
        <NavLink to="/contacts">
          {' '}
          <Typography variant="h6" color="secondary">
            Contacts
          </Typography>
        </NavLink>
      </Toolbar>
    </nav>
  );
};

export default Navigation;
