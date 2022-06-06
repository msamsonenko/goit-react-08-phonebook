import { useState } from 'react';
import { useEditContactMutation } from 'redux/api/authApi';
import { Form, Button } from 'react-bootstrap';

import { FormTitle } from './EditContactForm.styled';

export default function EditContactForm({ closeForm, contact }) {
  const [editContact] = useEditContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState(contact.id);

  console.log(contact);

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
    console.log(e.target);
    editContact({ name, number, id });
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
        <FormTitle>Edit Contact</FormTitle>
        <Form.Group className="mb-3" controlId="formBasicEmail" width="300px">
          <Form.Label>Previous name: {contact.name.toUpperCase()}</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            required
            onChange={handleInputChange}
            placeholder="New name"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Previous number: {contact.number}</Form.Label>
          <Form.Control
            type="tel"
            name="number"
            value={number}
            required
            onChange={handleInputChange}
            placeholder="New number"
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
            Edit
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
