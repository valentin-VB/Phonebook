import SignInForm from 'components/SignInForm';
import { Avatar, Box, Link, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export default function SignIn() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <SignInForm />
        <Link component={NavLink} to="/register">
          Don't have an account? Sign Up
        </Link>
      </Box>
    </>
  );
}
