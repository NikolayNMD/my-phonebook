import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/authSlice';
import { getCurrentUser } from 'services/authOperations';
import { Loader } from './Loader';

const Home = lazy(() => import('pages/Home'));
const SignIn = lazy(() => import('pages/SignIn'));
const SignUp = lazy(() => import('pages/SignUp'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isCurrentUser ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignIn />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="*"
            element={<PrivateRoute redirectTo="/login" component={<Home />} />}
          />
        </Route>
      </Routes>
    </>
  );
};
