import Form from 'components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { filterUpdate } from 'Redux/filter/filterSlice';
import {
  useAddContactsMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'Redux/contacts/contactsApi';
import { selectFilter } from 'Redux/filter/selectors';
import { DefToaster } from 'components/Toaster';
import { Box } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const {
    data: contacts,
    error,
    isLoading,
  } = useGetContactsQuery('', {
    refetchOnMountOrArgChange: true,
  });
  const [addContact] = useAddContactsMutation();
  const [deleteContact] = useDeleteContactMutation();

  // console.log('isLoading', isLoading);
  // console.log('error', error);
  // console.log('contacts', contacts);

  const filter = useSelector(selectFilter);

  const handleFormSubmit = async contactInfo => {
    const isDuplicated = contacts.some(
      oldContact => oldContact.name.trim() === contactInfo.name.trim()
    );

    if (isDuplicated) {
      alert(`${contactInfo.name} is already in contacts`);
      return;
    }

    try {
      toast.success('Successfully created!');
      await addContact(contactInfo);
    } catch (e) {
      console.warn('e', e);
      toast.error("Wasn't able to create contact");
    }
  };

  // const visableContacts = useMemo(() => { return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase()))
  // }, [contacts, filter]);

  const visiableContacts = () => {
    if (!contacts) {
      return;
    }

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
        maxWidth: 350,
      }}
    >
      <h1>Add Contact</h1>
      <Form onFormSubmit={handleFormSubmit}></Form>
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={evt => dispatch(filterUpdate(evt.currentTarget.value))}
      ></Filter>
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
