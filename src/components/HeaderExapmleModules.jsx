import React from 'react';
import { NavLink } from 'react-router-dom';
import css from 'App.module.css';

const HeaderExapmleModules = () => {
  return (
    <header>
      <nav>
        <NavLink
          className={({ isActive }) =>
            `${css['header-link']} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css['header-link']} ${isActive ? css.active : ''}`
          }
          to="/posts"
        >
          Posts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css['header-link']} ${isActive ? css.active : ''}`
          }
          to="/search"
        >
          Search
        </NavLink>
      </nav>
    </header>
  );
};

export default HeaderExapmleModules;
