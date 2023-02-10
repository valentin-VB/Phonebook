import * as yup from 'yup';

export let signUpScheme = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'A name is Too Short')
    .max(25, 'A Name is to Long'),
  lastName: yup
    .string()
    .min(3, 'A name is Too Short')
    .max(25, 'A Name is to Long'),
  email: yup.string().email('Not valid email'),
  password: yup
    .string()
    .min(8, 'The password is to short')
    .max(21, 'The password is to long'),
});

export let addContactSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'A name is Too Short!')
    .max(25, 'A Name is to Long'),
  number: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .integer("A phone number can't include a decimal point")
    .min(999999, 'A phone number is to short')
    .max(999999999999999, 'A phone number is to long'),
});
