import { Circle, ListEl, NameLeter } from 'components/ListItem/ListItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ListItem = ({ contact, onBtnClick }) => {
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
      <IconButton
        type="button"
        id={contact.id}
        onClick={evt => onBtnClick(evt)}
      >
        <DeleteIcon />
      </IconButton>
    </ListEl>
  );
};

export default ListItem;
