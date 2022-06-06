import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: #4db0ff;
  border: 1px solid #4db0ff;
  border-radius: 4px;
  padding: 3px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover {
    outline: 1px solid #fff;
    color: #fff;
    background-color: #4db0ff;
  }
`;

export const Nav = styled.nav`
  padding: 10px;
  display: flex;
  align-items: center;
`;
