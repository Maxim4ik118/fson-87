import { NavLink, Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import PostsPage from 'pages/PostsPage';

import { StyledAppContainer } from 'App.styled';
import SearchPage from 'pages/SearchPage';
import PostDetailsPage from 'pages/PostDetailsPage';

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
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
          <NavLink className="header-link" to="/posts">
            Posts
          </NavLink>
          <NavLink className="header-link" to="/search">
            Search
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/search" element={<SearchPage />} />
        {/* /posts/d12dWAF@ */}
        <Route path="/post-details/:postId/*" element={<PostDetailsPage />} />
      </Routes>
    </StyledAppContainer>
  );
};
