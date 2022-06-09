import { ContactListContainer } from './ContactList.styled';

import { useGetAllContactsQuery } from 'redux/api/authApi';
import ContactListItem from 'components/ContactListItem';

const ContactList = ({ filterValue }) => {
  const { data, isLoading } = useGetAllContactsQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
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
