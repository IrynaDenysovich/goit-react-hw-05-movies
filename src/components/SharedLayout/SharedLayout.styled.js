import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerNav = styled.div`
  width: 100%;
`;

export const Navigation = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: black;
  font-weight: 600;
  padding: 15px;
`;

export const Nav = styled.nav`
  padding: 15px;
  box-shadow: 0 4px 6px -6px #222;
`;
