import { Circle, ListEl, NameLeter } from 'components/ListItem/ListItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ModalWindow from 'components/ModalWindow';
import { useState } from 'react';

const ListItem = ({ contact, onBtnClick }) => {
  const [open, setOpen] = useState(false);

  const handleModalClose = () => {
    setOpen(false);
  };

  const contactNameLetter = contact?.name[0].toUpperCase();
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <ListEl>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: 0,
        }}
      >
        <Circle style={{ backgroundColor: `#${randomColor}` }}>
          <NameLeter>{contactNameLetter}</NameLeter>
        </Circle>
        <div>
          <Typography
            variant="h6"
            sx={{
              fontSize: '16px',
            }}
          >
            {contact.name}
          </Typography>
          <Typography>{contact.number}</Typography>
        </div>
      </Box>
      <Box>
        <IconButton type="button" id={contact.id} onClick={() => setOpen(true)}>
          <EditIcon />
        </IconButton>
        <IconButton
          type="button"
          id={contact.id}
          onClick={evt => onBtnClick(evt)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
      {open && (
        <ModalWindow
          open={open}
          handleClose={handleModalClose}
          contact={contact}
        />
      )}
    </ListEl>
  );
};

export default ListItem;
