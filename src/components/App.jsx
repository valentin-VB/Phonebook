import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUser } from 'Redux/auth/selectors';
import { useRefreshUserQuery } from 'Redux/auth/authApi';
import { refreshUser } from 'Redux/auth/authSlice';

const SignInPage = lazy(() => import('../pages/SignIn/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp/SignUp'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const HomePage = lazy(() => import('../pages/Home/Home'));

export function App() {
  const token = useSelector(selectToken);
  const currentUser = useSelector(selectUser);
  const shouldSkip = !token || Boolean(currentUser);
  const { data: user } = useRefreshUserQuery('', { skip: shouldSkip });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || !user) {
      return;
    }

    dispatch(refreshUser(user));
  }, [dispatch, token, user]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<SignInPage />}
            ></RestrictedRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<SignUpPage />}
            ></RestrictedRoute>
          }
        ></Route>
        <Route
          path="*"
          element={<p>Ooops... The page you are looking for wasn't found</p>}
        />
      </Route>
    </Routes>
  );
}
