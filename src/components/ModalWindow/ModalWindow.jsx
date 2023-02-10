import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import ContactsForm from 'components/ContactsForm';
import isAlreadyInContact from 'isAlreadyInContact';
import {
  useEditContactMutation,
  useGetContactsQuery,
} from 'Redux/contacts/contactsApi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ open = false, handleClose, contact }) => {
  const { data: contacts } = useGetContactsQuery('', {
    refetchOnMountOrArgChange: true,
  });
  const [data] = useEditContactMutation();

  const handleEditSubmit = async editContactInfo => {
    if (isAlreadyInContact(contacts, editContactInfo)) return;

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
        ></ContactsForm>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
