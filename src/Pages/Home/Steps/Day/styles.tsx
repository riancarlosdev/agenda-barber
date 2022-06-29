import styled from 'styled-components';

export const WapperContainer = styled.div``;
export const ListDays = styled.ul`
  display: flex;

  max-width: 450px;
  width: 100%;
  justify-content: space-between;
`;

export const ItemDay = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  transition: 0.2s ease;

  :hover {
    background: #e0e0e0;
  }
`;

export const WapperNumber = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s ease;
  font-size: 17px;
  font-weight: ${({ active }) => (active ? '600' : '300')};
  color: ${({ active }) => (active ? '#fff' : '#000')};

  background: ${({ active }) => (active ? '#13cfdc' : '#cfdcdd')};
  border: 3px solid #fff;
  box-shadow: ${({ active }) => (active ? '0 0 15px #9c9c9ca9' : '0 0 3px #d9d9d9')};
`;

export const ValueDay = styled.span`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.4px;
  margin-top: 10px;
`;
