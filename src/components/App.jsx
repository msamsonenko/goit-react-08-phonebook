import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRefetchUserQuery } from 'redux/api/authApi';

import HomePage from './HomePage/HomePage';
import WelcomeMsg from 'components/WelcomeMsg';
import LogIn from 'components/LogIn';
import SignUp from 'components/SignUp';
import UserContacts from './UserContacts';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useSelector } from 'react-redux';

export default function App() {
  const token = useSelector(state => state.persistedReducer.token);
  const isRefreshing = useSelector(
    state => state.persistedReducer.isRefreshing
  );
  const { data } = useRefetchUserQuery(token, { skip: token ? false : true });

  return (
    <>
      {!isRefreshing && (
        <>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route exact path="/" element={<HomePage />}>
                <Route index element={<WelcomeMsg />} />
                <Route
                  path="register"
                  element={
                    <PublicRoute restricted>
                      <SignUp />
                    </PublicRoute>
                  }
                />
                <Route
                  path="login"
                  element={
                    <PublicRoute restricted>
                      <LogIn />
                    </PublicRoute>
                  }
                />
                <Route
                  path="contacts"
                  element={
                    <PrivateRoute>
                      <UserContacts />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
