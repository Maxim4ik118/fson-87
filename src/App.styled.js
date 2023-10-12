import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 15px;

  .title {
    text-transform: uppercase;
    text-decoration: overline;
    color: brown;
    transition: all 0.3s;

    &:hover,
    &:focus {
      background-color: yellow;
      color: blue;
    }
  }

  .postList {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .postListItem {
    padding: 20px;
    border: 1px solid black;
    border-radius: 20px;
  }

  .error {
    padding: 20px;
    font-size: 24px;
    border: 1px solid black;
    background-color: red;
    color: white;
  }

  .header-link {
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 20px;
  font-size: 22px;
  text-decoration: none;
  margin-right: 15px;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    background-color: black;
    color: white;
  }
`;
