import { useState } from 'react';
import { PageHeader, Container, Link, Span } from './SignUp.styled';
import { Form, Button } from 'react-bootstrap';

import { useAddUserMutation } from 'redux/api/authApi';

const SignUp = () => {
  const [addUser] = useAddUserMutation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name } = e.target;

    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
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
  const onFormSubmit = e => {
    e.preventDefault();
    console.log(email, password, name);
    addUser({ name, email, password });
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <Container>
        <PageHeader>Welcome</PageHeader>
        <Form onSubmit={onFormSubmit} style={{ width: '350px' }}>
          <Form.Group className="mb-3" controlId="formBasicEmail" width="300px">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              value={name}
              required
              onChange={handleInputChange}
              placeholder="Enter name"
              autoComplete="off"
            />
          </Form.Group>

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
              Register
            </Button>
            <Span>
              Already have an account?<Link to="/login">Sign In</Link>
            </Span>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
export default SignUp;
