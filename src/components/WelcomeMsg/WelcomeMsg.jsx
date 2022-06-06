import { BiChevronsRight } from 'react-icons/bi';

import {
  Container,
  WelcomeBox,
  WelcomeText,
  Button,
} from './WelcomeMsg.styled';

const WelcomeMsg = () => {
  return (
    <Container>
      <WelcomeBox>
        <WelcomeText>An efficient way for storing your contacts</WelcomeText>
        <Button to="login">
          Start now
          <BiChevronsRight />
        </Button>
      </WelcomeBox>
    </Container>
  );
};

export default WelcomeMsg;
