import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'components/Loader';

import { StyledAppContainer } from 'App.styled';
import Navigation from 'components/Navigation';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/authReducer';

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
  { path: '/products', element: <ProductsPage /> },
  { path: '/post-details/:postId/*', element: <PostDetailsPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/contacts', element: <ContactsPage /> },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])

  return (
    <StyledAppContainer>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};
