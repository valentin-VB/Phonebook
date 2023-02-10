import styled from '@emotion/styled';
import { Box } from '@mui/system';

export const Backdrop = styled(Box)`
  position: 'absolute';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: 'grey';
  border: 1px solid #000;
  box-shadow: 24px;
  padding: 4;
`;
