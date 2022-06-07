import AddContactModal from 'components/AddContactModal';
import EditContactForm from 'components/EditContactForm';
import { useDeleteContactMutation } from 'redux/api/authApi';
import { useState } from 'react';
import {
  ContactItem,
  ContactListName,
  ContactListNumber,
  DeletetBtn,
  EditBtn,
} from './ContactListItem.styled';

const ContactListItem = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);

  const [deleteContact] = useDeleteContactMutation();

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <ContactItem style={{ width: '600px' }} id={contact.id}>
      <ContactListName>{contact.name}</ContactListName>
      <ContactListNumber>{contact.number}</ContactListNumber>

      <DeletetBtn
        type="button"
        onClick={() => deleteContact(contact.id)}
        style={{ marginRight: '10px' }}
      >
        Delete
      </DeletetBtn>
      <EditBtn type="button" onClick={toggleModal}>
        Edit
      </EditBtn>
      {showModal && (
        <AddContactModal
          onClose={toggleModal}
          child={<EditContactForm closeForm={toggleModal} contact={contact} />}
        ></AddContactModal>
      )}
    </ContactItem>
  );
};

export default ContactListItem;
