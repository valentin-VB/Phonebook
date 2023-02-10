import React from 'react';
import { ErrorText } from 'components/Form/Form.styled';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from 'components/Input';
import { Button, InputAdornment } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

let schema = yup.object().shape({
  name: yup.string().required('Name field is required').min(2, 'Too Short!'),
  number: yup.number().integer().typeError('Phone field is required'),
});

const ContactForm = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', number: '' },
    resolver: yupResolver(schema),
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
        Add Contact
      </Button>
    </form>
  );
};

export default ContactForm;
