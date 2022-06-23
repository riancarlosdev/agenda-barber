import styled from 'styled-components';

export const WapperContainer = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WapperLogo = styled.div``;
export const WapperOuthers = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 135px;
  width: 100%;
`;

export const ItemNavigation = styled.button`
  border: 0;
  outline: none;
  background: #f8f8f8;

  height: 60px;
  width: 60px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease;

  box-shadow: 0px 0px 8px #15151529;
  border: 2px solid #dedede;

  cursor: pointer;

  :hover {
    background: #f0f0f0;
  }
`;
