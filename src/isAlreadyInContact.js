import { toast } from 'react-hot-toast';

const isAlreadyInContact = (contacts, contact, editing) => {
  const oldContacts = editing
    ? contacts.filter(oldContact => oldContact.name !== contact.name)
    : contacts;
  const contactNumber = contact.number.toString();
  let isDuplicated = false;

  for (const oldContact of oldContacts) {
    if (oldContact.name.trim() === contact.name.trim()) {
      isDuplicated = true;
      toast.error(`${contact.name} is already in contacts`);
    }

    if (oldContact.number === contactNumber) {
      isDuplicated = true;
      toast.error(
        `User with "${contact.number}" phone number is already in contacts`
      );
    }
  }

  return isDuplicated;

  // let matchingCount = 0;
  // for (const oldContact of contacts) {
  //   if (oldContact.name.trim() === contact.name.trim()) {
  //     matchingCount += 1;
  //     if (!editing) {
  //       isDuplicated = true;
  //       toast.error(`${contact.name} is already in contacts`);
  //     }

  //     if (editing && matchingCount === 2) {
  //       isDuplicated = true;
  //       toast.error(`${contact.name} is already in contacts`);
  //     }
  //   }

  //   if (oldContact.number === contactNumber) {
  //     matchingCount += 1;
  //     if (!editing) {
  //       isDuplicated = true;
  //       toast.error(
  //         `User with "${contact.number}" phone number is already in contacts`
  //       );
  //     }

  //     if (editing && matchingCount === 2) {
  //       isDuplicated = true;
  //       toast.error(
  //         `User with "${contact.number}" phone number is already in contacts`
  //       );
  //     }
  //   }
  // }

  //   contacts.some(oldContact => {
  //   if (oldContact.name.trim() === contact.name.trim()) {
  //     toast.error(`${contact.name} is already in contacts`);
  //     return true;
  //   }
  //   if (oldContact.number === contactNumber && !editing) {
  //     toast.error(
  //       `User with "${contact.number}" phone number is already in contacts`
  //     );
  //     return true;
  //   }

  //   return false;
  // });
};

export default isAlreadyInContact;
