import { useState } from 'react';
import { useEditContactMutation } from 'redux/api/authApi';
import { Form, Button } from 'react-bootstrap';
import Notiflix from 'notiflix';

import { FormTitle } from './EditContactForm.styled';

export default function EditContactForm({ closeForm, contact }) {
  const [editContact] = useEditContactMutation();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [id, setId] = useState(contact.id);

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
  const editValuesCheck = (name, number, id) => {
    if (name.trim() === '' || number.trim() === '') {
      return Notiflix.Notify.warning('Form fields cannot be empty');
    }

    return editContact({ name, number, id });
  };
  const onFormSubmit = e => {
    e.preventDefault();
    editValuesCheck(name, number, id);
    closeForm();
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setId('');
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
          <Form.Label>
            Change name:
            {/* <span style={{ fontWeight: '700', fontSize: '15px' }}>
              {contact.name.toUpperCase()}
            </span> */}
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            // required
            onChange={handleInputChange}
            placeholder="New name"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Change number:
            {/* <span style={{ fontWeight: '700', fontSize: '15px' }}>
              {contact.number}
            </span> */}
          </Form.Label>
          <Form.Control
            type="tel"
            name="number"
            value={number}
            // required
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
            type="button"
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
