import styled from '@emotion/styled';

export const ListEl = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  max-width: 350px;

  padding: 10px;
  border: 1px solid gray;
  border-radius: 8px;
  font-weight: 400;

  :not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    background-color: #dee8eb;
    border: 1px solid rgb(252, 252, 252);
  }

  button {
    :hover {
      path {
        color: red;
      }
    }
  }
`;

export const Circle = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 50px;
`;

export const NameLeter = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
