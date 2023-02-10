import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginUserMutation } from 'Redux/auth/authApi';
import { setCredentials } from 'Redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { DefToaster } from 'components/Toaster';
import { Box, Button } from '@mui/material';
import Input from 'components/Input';

let shema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string(),
});

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });

  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const handSignInSubmit = async data => {
    console.log('data', data);
    try {
      const response = await loginUser(data);
      if (response.error?.status === 400) {
        toast.error('The username or password you entered is incorrect');
      } else {
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
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(data => {
          handSignInSubmit(data);
        })}
      >
        <Input
          name="email"
          label="Email"
          type="email"
          register={register}
          autoComplete="email"
          autoFocus={true}
        />

        <Input
          name="password"
          label="Password"
          type="password"
          register={register}
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
      <DefToaster></DefToaster>
    </>
  );
};

export default SignInForm;
