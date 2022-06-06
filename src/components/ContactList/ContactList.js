import {
  DeletetBtn,
  EditBtn,
  ContactListName,
  ContactListNumber,
} from './ContactList.styled';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/api/authApi';
import AddContactModal from 'components/AddContactModal';
import EditContactForm from 'components/EditContactForm';

const ContactList = ({ filterValue }) => {
  const { data, isLoading } = useGetAllContactsQuery({
    refetchOnMountOrArgChange: true,
  });
  const [showModal, setShowModal] = useState(false);

  const [deleteContact] = useDeleteContactMutation();

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const filteredContacts =
    isLoading ||
    data.filter(contact => contact.name.toLowerCase().includes(filterValue));

  return (
    <>
      <ListGroup variant="flush">
        {isLoading ||
          filteredContacts.map(contact => {
            return (
              <ListGroup.Item key={contact.id} style={{ width: '600px' }}>
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
                    child={
                      <EditContactForm
                        closeForm={toggleModal}
                        contact={contact}
                      />
                    }
                  ></AddContactModal>
                )}
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </>
  );
};

export default ContactList;
