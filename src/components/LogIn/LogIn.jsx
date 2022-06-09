import { useState } from 'react';
import { useLogInUserMutation } from 'redux/api/authApi';
import { Form, Button } from 'react-bootstrap';
import Notiflix from 'notiflix';

import { PageHeader, Link, Container, Span } from './LogIn.styled';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [logInUser] = useLogInUserMutation();

  const handleInputChange = e => {
    const { name } = e.target;

    switch (name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };
  const onLoginUserClick = async () => {
    try {
      const { user } = await logInUser({ email, password }).unwrap();

      Notiflix.Notify.success(`Logged in as ${user.name}`);
      return user;
    } catch (error) {
      return Notiflix.Notify.failure(
        'Incorrect email or password please try again'
      );
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();
    onLoginUserClick();
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <PageHeader>Welcome</PageHeader>
      {/* {isError ? (
        <p style={{ color: 'red' }}>
          Email or password is incorrect, please try again
        </p>
      ) : (
        ''
      )} */}
      <Form onSubmit={onFormSubmit} style={{ width: '350px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail" width="300px">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            required
            onChange={handleInputChange}
            placeholder="Enter email"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            required
            onChange={handleInputChange}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button variant="primary" type="submit" style={{ width: '110px' }}>
            Sign in
          </Button>

          <Span>
            Not a member? <Link to="/register">Create account</Link>
          </Span>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default LogIn;
