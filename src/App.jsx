import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

// import HomePage from 'pages/HomePage';
// import PostsPage from 'pages/PostsPage';
// import SearchPage from 'pages/SearchPage';
// import PostDetailsPage from 'pages/PostDetailsPage';

import { StyledAppContainer, StyledNavLink } from 'App.styled';
import Loader from 'components/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const PostsPage = lazy(() => import('pages/PostsPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const PostDetailsPage = lazy(() => import('pages/PostDetailsPage'));

/*
Маршрутизація:

 <a href="www.google.com">Google</a> - будь-які посилання на зовнішні ресурси, 
 поза нашим додатком

 <Link to="/some-route">Some page</Link>
 <NavLink to="/some-route"> Some page</NavLink> - для маршутизації по нашому додатку

  1. Зміна адресної строки браузера.
  2. Підготувати Route для відображення, тієї чи іншої сторінки 
     <Route path="/some-route" element={<HomePage />} />

*/

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
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/search" element={<SearchPage />} />
          {/* /posts/d12dWAF@ */}
          <Route path="/post-details/:postId/*" element={<PostDetailsPage />} />
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};
