import React from 'react';
import { ErrorText } from 'components/ContactsForm/ContactsForm.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from 'components/Input';
import { Button, InputAdornment } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import { addContactSchema } from 'validationShemes';

const ContactForm = ({ onFormSubmit, buttonText, placeholder }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', number: '' },
    resolver: yupResolver(addContactSchema),
  });

  const handleFormSubmit = data => {
    onFormSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(data => {
        handleFormSubmit(data);
      })}
    >
      <Input
        name="name"
        label="Name"
        type="text"
        register={register}
        autoComplete="given-name"
        startadornment={
          <InputAdornment position="start">
            <PersonIcon />
          </InputAdornment>
        }
      ></Input>
      <ErrorText> {errors.name?.message}</ErrorText>
      <Input
        name="number"
        type="tel"
        label="Phone"
        register={register}
        startadornment={
          <InputAdornment position="start">
            <PhoneIcon />
          </InputAdornment>
        }
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <ErrorText> {errors.number?.message}</ErrorText>
      <Button type="submit" variant="contained">
        {buttonText}
      </Button>
    </form>
  );
};

export default ContactForm;
