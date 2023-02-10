import { Container } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Container
        maxWidth="xl"
        component="main"
        sx={{
          paddingLeft: '30px',
        }}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
