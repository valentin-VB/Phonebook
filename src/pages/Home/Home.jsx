import { Link, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken, selectUser } from 'Redux/auth/selectors';

export default function Home() {
  const isLoggedIn = useSelector(selectToken);
  const user = useSelector(selectUser);
  const firstName = user?.name.split(' ')[0];

  return (
    <>
      <Typography variant="h2" color="primary" textAlign="center" mt="100px">
        Welcome to the Phonebook{user && `, ${firstName}`}
      </Typography>
      {!isLoggedIn && (
        <Typography variant="h5" color="primary" textAlign="center" mt="25px">
          Please{' '}
          <Link component={NavLink} to="/login">
            Sign In{' '}
          </Link>
          or{' '}
          <Link component={NavLink} to="/register">
            Sign Up
          </Link>{' '}
          to see, create, edit or delete your contacts
        </Typography>
      )}
    </>
  );
}
