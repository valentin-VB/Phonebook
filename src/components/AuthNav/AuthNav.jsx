import { Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Toolbar sx={{ gap: '25px' }}>
      <NavLink to="/register">
        <Typography variant="h6" color="secondary">
          Sign Up
        </Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography variant="h6" color="secondary">
          Sign In
        </Typography>
      </NavLink>
    </Toolbar>
  );
};

export default AuthNav;
