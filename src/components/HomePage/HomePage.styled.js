import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #4db0ff;
`;
export const Main = styled.main`
  display: flex;
`;
