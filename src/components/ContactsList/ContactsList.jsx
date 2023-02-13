import { List } from '@mui/material';
import ListItem from 'components/ListItem';

function ContactsList({ contacts, onBtnClick }) {
  return (
    contacts.length > 0 && (
      <List sx={{ mb: '20px' }}>
        {contacts.map(contact => {
          return (
            <ListItem
              key={contact.id}
              contact={contact}
              onBtnClick={onBtnClick}
            ></ListItem>
          );
        })}
      </List>
    )
  );
}

export default ContactsList;
