import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'Redux/auth/selectors';

function PrivateRoute({ component: Component, redirectTo = '/login' }) {
  const isLoggedIn = useSelector(selectToken);
  return isLoggedIn ? Component : <Navigate to={redirectTo}></Navigate>;
}

export default PrivateRoute;
