import { Link, Nav } from './Navigation.styled';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.persistedReducer.isLoggedIn);
  return (
    <>
      <Nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div>
            <Link to="login">Log in</Link>
            <Link to="register">Sign up</Link>
          </div>
        )}
      </Nav>
    </>
  );
};
export default Navigation;
