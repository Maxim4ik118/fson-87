import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'components/Loader';

import { StyledAppContainer } from 'App.styled';
import Navigation from 'components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/authReducer';
import RestictedRoute from 'components/RestictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import { selectAuthIsLoading } from 'redux/auth.selectors';

const HomePage = lazy(() => import('pages/HomePage'));
const PostsPage = lazy(() => import('pages/PostsPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const PostDetailsPage = lazy(() => import('pages/PostDetailsPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/posts', element: <PostsPage /> },
  { path: '/search', element: <SearchPage /> },
  {
    path: '/products',
    element: (
      <PrivateRoute>
        <ProductsPage />
      </PrivateRoute>
    ),
  },
  { path: '/post-details/:postId/*', element: <PostDetailsPage /> },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <RegisterPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsLoading);
  
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <StyledAppContainer>
      <Navigation />

      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      )}
    </StyledAppContainer>
  );
};
