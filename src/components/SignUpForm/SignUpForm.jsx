import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterUserMutation } from 'Redux/auth/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'Redux/auth/authSlice';
import toast from 'react-hot-toast';
import { DefToaster } from 'components/Toaster';
import { Box, Button, Grid } from '@mui/material';
import Input from 'components/Input';

let shema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string(),
});

const SignUpForm = () => {
  const [registerUser] = useRegisterUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });
  const dispatch = useDispatch();

  const handleSignUpSubmit = async data => {
    const newUserData = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await registerUser(newUserData);
      switch (response.error?.status) {
        case 400:
          toast.error('Account with this email address already exists');
          break;
        case 500:
          toast.error('Server Error');
          break;
        default:
          dispatch(setCredentials(response.data));
      }
    } catch (e) {
      console.warn('Error', e);
    }
    reset();
  };

  return (
    <>
      <Box
        component="form"
        sx={{ mt: 3 }}
        onSubmit={handleSubmit(data => {
          handleSignUpSubmit(data);
        })}
      >
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item sx={{ width: '50%' }}>
            <Input
              name="firstName"
              label="First Name"
              register={register}
              autoComplete="given-name"
              autoFocus
            ></Input>
          </Grid>
          <Grid item sx={{ width: '50%' }}>
            <Input
              name="lastName"
              label="Last Name"
              register={register}
              autoComplete="family-name"
            />
          </Grid>
        </Grid>
        <Input
          name="email"
          label="Email"
          register={register}
          autoComplete="email"
        />
        <Input
          name="password"
          label="Password"
          register={register}
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
      <DefToaster />
    </>
  );
};

export default SignUpForm;
