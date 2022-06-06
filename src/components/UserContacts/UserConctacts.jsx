import { useState } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import AddContactModal from 'components/AddContactModal';
import { Container, Button } from './UserContacts.styled';
import Filter from 'components/Filter';

export default function UserContacts() {
  const filterValue = useSelector(state => state.persistedReducer.filter);

  const normalizedText = filterValue.toLowerCase();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };
  return (
    <Container>
      <Button type="button" onClick={toggleModal}>
        Add new contact
      </Button>
      <Filter />
      {showModal && (
        <AddContactModal
          onClose={toggleModal}
          child={<ContactForm closeForm={toggleModal} />}
        ></AddContactModal>
      )}

      <ContactList filterValue={normalizedText} />
    </Container>
  );
}
