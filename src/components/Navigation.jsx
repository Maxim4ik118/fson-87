import React from 'react';
import { StyledNavLink } from 'App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authReducer';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(logOutThunk());
  }

  return (
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
        {authenticated ? (
          <>
            <StyledNavLink className="header-link" to="/products">
              Products
            </StyledNavLink>
            <StyledNavLink className="header-link" to="/contacts">
              Contacts
            </StyledNavLink>{' '}
            <button onClick={onLogOut}>Log Out</button>
          </>
        ) : (
          <>
            <StyledNavLink className="header-link" to="/login">
              Login
            </StyledNavLink>
            <StyledNavLink className="header-link" to="/register">
              Register
            </StyledNavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
