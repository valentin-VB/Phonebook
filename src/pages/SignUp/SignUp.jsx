import { Avatar, Box, Link, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import SignUpForm from 'components/SignUpForm';

export default function SignUp() {
  return (
    <>
      <Helmet>
        <title>Register</title>
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
          Sign Up
        </Typography>
        <SignUpForm />
        <Link component={NavLink} to="/login">
          Already have an account? Sign in
        </Link>
      </Box>
    </>
  );
}
