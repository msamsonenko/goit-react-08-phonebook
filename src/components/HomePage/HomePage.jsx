import { Outlet } from 'react-router-dom';
import { Header, Link, Main } from './HomePage.styled';

import Navigation from 'components/Navigation';

const HomePage = () => {
  return (
    <>
      <Header>
        <h1>
          <Link to="/">Phonebook</Link>
        </h1>
        <Navigation />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default HomePage;
