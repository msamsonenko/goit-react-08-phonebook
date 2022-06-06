import { useSelector } from 'react-redux';
import { useLogOutUserMutation } from 'redux/api/authApi';
import { Button, Name } from './UserMenu.styled';

const UserMenu = () => {
  const [logOutUser] = useLogOutUserMutation();

  const name = useSelector(state => state.persistedReducer.user.name);
  return (
    <div>
      <Name>{name}</Name>

      <Button type="button" onClick={() => logOutUser()}>
        Sign out
      </Button>
    </div>
  );
};

export default UserMenu;
