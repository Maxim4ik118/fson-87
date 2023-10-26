import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'components/Loader';

import { StyledAppContainer, StyledNavLink } from 'App.styled';

const HomePage = lazy(() => import('pages/HomePage'));
const PostsPage = lazy(() => import('pages/PostsPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const PostDetailsPage = lazy(() => import('pages/PostDetailsPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));

export const App = () => {
  return (
    <StyledAppContainer>
      <header>
        <nav>
          <StyledNavLink className="header-link" to="/">
            Home
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/posts">
            Posts
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/search">
            Search
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/products">
            Products
          </StyledNavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/post-details/:postId/*" element={<PostDetailsPage />} />
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};
