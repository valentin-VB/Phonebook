import { Toaster } from 'react-hot-toast';

export const DefToaster = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={20}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        success: {
          duration: 4000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
  );
};
