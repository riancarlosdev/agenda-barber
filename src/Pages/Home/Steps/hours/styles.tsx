import styled from 'styled-components';

export const WapperContainer = styled.div``;
export const ListHours = styled.div`
  max-width: 640px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Item = styled.button<{ active: boolean }>`
  max-width: 100px;
  height: 43px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid #fff;
  margin: 3px;
  background-color: ${({ active }) => (active ? '#00c6d5' : '#ececec')};
  font-size: 18px;

  :disabled {
    opacity: 0.7;
    font-size: 16px;
  }

  transition: 0.2s ease;
  :hover {
    background-color: ${({ active }) => (active ? '#00c9d8' : '#dcdcdc')};
  }

  letter-spacing: 0.4px;

  cursor: pointer;

  box-shadow: 0 0 5px #c5c5c5;

  font-weight: 600;
`;
