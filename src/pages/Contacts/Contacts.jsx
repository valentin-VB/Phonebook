import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {
  useAddContactsMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'Redux/contacts/contactsApi';
import { selectFilter } from 'Redux/filter/selectors';
import { DefToaster } from 'components/Toaster';
import { Box } from '@mui/material';
import ContactsForm from 'components/ContactsForm';
import isAlreadyInContact from 'isAlreadyInContact';

export default function Contacts() {
  const {
    data: contacts,
    error,
    isLoading,
  } = useGetContactsQuery('', {
    refetchOnMountOrArgChange: true,
  });
  const [addContact] = useAddContactsMutation();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(selectFilter);

  const handleFormSubmit = async contactInfo => {
    if (isAlreadyInContact(contacts, contactInfo)) return;

    try {
      toast.success('Successfully created!');
      await addContact(contactInfo);
    } catch (e) {
      console.warn('e', e);
      toast.error("Wasn't able to create contact");
    }
  };

  const visiableContacts = () => {
    if (!contacts) return;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeletBthClick = async evt => {
    const id = evt.currentTarget.id;
    try {
      await deleteContact(id);
      toast.success('Successfully deleted!');
    } catch (e) {
      console.warn('e', e);
      toast.error('Oops! Something Went Wrong');
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        ml: 'auto',
        mr: 'auto',
      }}
    >
      <h1>Add Contact</h1>
      <ContactsForm onFormSubmit={handleFormSubmit} buttonText="Add Contact" />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <b>
          <br></br>Loading contacts...
        </b>
      )}
      {!isLoading && error && <p>{error}</p>}
      {contacts && (
        <ContactsList
          onBtnClick={handleDeletBthClick}
          contacts={visiableContacts()}
        ></ContactsList>
      )}
      <DefToaster />
    </Box>
  );
}
