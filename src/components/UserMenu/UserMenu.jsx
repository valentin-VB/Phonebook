import { Button, Toolbar, useMediaQuery } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogOutUserMutation } from 'Redux/auth/authApi';
import { logOut } from 'Redux/auth/authSlice';
import { selectUser } from 'Redux/auth/selectors';
import LogoutIcon from '@mui/icons-material/Logout';
import { theme } from 'theme';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  const notMobile = useMediaQuery(theme.breakpoints.not('mobile'));
  const firstName = user?.name.split(' ')[0];

  const handleClick = async () => {
    try {
      await logOutUser();
      dispatch(logOut());
    } catch (e) {
      console.log('e', e);
    }
  };
  return (
    <Toolbar
      sx={{
        gap: '15px',
      }}
    >
      {notMobile && <div>Welcome, {firstName}</div>}
      <Button
        color="secondary"
        variant="outlined"
        type="button"
        startIcon={<LogoutIcon />}
        onClick={() => handleClick()}
      >
        Log Out
      </Button>
    </Toolbar>
  );
};
