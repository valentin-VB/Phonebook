import { toast } from 'react-hot-toast';

const isAlreadyInContact = (contacts, contact, editing) => {
  const contactNumber = contact.number.toString();
  const isDuplicated = contacts.some(oldContact => {
    if (oldContact.name.trim() === contact.name.trim()) {
      toast.error(`${contact.name} is already in contacts`);
      return true;
    }
    if (oldContact.number === contactNumber && !editing) {
      console.log('da');
      toast.error(
        `User with "${contact.number}" phone number is already in contacts`
      );
      return true;
    }

    return false;
  });
  console.log('isDuplicated', isDuplicated);

  return isDuplicated;
};

export default isAlreadyInContact;
