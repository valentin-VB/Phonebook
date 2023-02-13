import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import ContactsForm from 'components/ContactsForm';
import isAlreadyInContact from 'isAlreadyInContact';
import {
  useEditContactMutation,
  useGetContactsQuery,
} from 'Redux/contacts/contactsApi';
import { style } from './ModalWindow.styled';

const ModalWindow = ({ open = false, handleClose, contact }) => {
  const { data: contacts } = useGetContactsQuery('', {
    refetchOnMountOrArgChange: true,
  });
  const [data] = useEditContactMutation();

  const handleEditSubmit = async editContactInfo => {
    if (isAlreadyInContact(contacts, editContactInfo, true)) return;

    try {
      const result = await data({ id: contact.id, contact: editContactInfo });
      console.log('result', result);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography component="h2">
          Edit <b>{contact.name}</b> contact
        </Typography>
        <ContactsForm
          buttonText="Save"
          onFormSubmit={handleEditSubmit}
          initialValues={{ number: contact.number, name: contact.name }}
        ></ContactsForm>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
