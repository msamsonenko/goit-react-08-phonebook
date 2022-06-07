import { useState } from 'react';
import { useAddContactMutation } from 'redux/api/authApi';
import { Form, Button } from 'react-bootstrap';

import { FormTitle } from './ContactForm.styled';

export default function ContactForm({ closeForm }) {
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name } = e.target;

    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    closeForm();
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <div>
      <Form
        onSubmit={onFormSubmit}
        style={{
          width: '350px',
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <FormTitle>Add Contact</FormTitle>
        <Form.Group className="mb-3" controlId="formBasicEmail" width="300px">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            required
            onChange={handleInputChange}
            placeholder="Enter email"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="tel"
            name="number"
            value={number}
            required
            onChange={handleInputChange}
            placeholder="Number"
          />
        </Form.Group>
        <Form.Group
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Button variant="primary" type="submit" style={{ width: '110px' }}>
            Add
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{ width: '110px' }}
            onClick={closeForm}
          >
            Cancel
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
