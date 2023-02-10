import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'Redux/auth/selectors';
import { AppBar as CustomBar, Toolbar } from '@mui/material';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Link } from 'react-router-dom';

const AppBar = () => {
  const isLoggedIn = useSelector(selectToken);
  return (
    <CustomBar
      position="static"
      component="header"
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Toolbar>
        <Link to="/">
          <PermContactCalendarIcon fontSize="large" color="secondary" />
        </Link>
        <Navigation />
      </Toolbar>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </CustomBar>
  );
};

export default AppBar;
