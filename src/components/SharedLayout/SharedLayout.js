import { Outlet } from 'react-router-dom';
import { Navigation, Nav, ContainerNav } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <ContainerNav>
      <header>
        <Nav>
          <Navigation to="/" end="true">
            Home
          </Navigation>
          <Navigation to="movies">Movies</Navigation>
        </Nav>
      </header>
      <Outlet />
    </ContainerNav>
  );
};

export default SharedLayout;
