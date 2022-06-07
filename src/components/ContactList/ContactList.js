import {
  DeletetBtn,
  EditBtn,
  ContactListName,
  ContactListNumber,
  ContactListContainer,
} from './ContactList.styled';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/api/authApi';
import ContactListItem from 'components/ContactListItem';

const ContactList = ({ filterValue }) => {
  const { data, isLoading } = useGetAllContactsQuery({
    refetchOnMountOrArgChange: true,
  });

  const filteredContacts =
    isLoading ||
    data.filter(contact => contact.name.toLowerCase().includes(filterValue));

  return (
    <>
      <ContactListContainer>
        {isLoading ||
          filteredContacts.map(contact => {
            return <ContactListItem key={contact.id} contact={contact} />;
          })}
      </ContactListContainer>
    </>
  );
};

export default ContactList;
