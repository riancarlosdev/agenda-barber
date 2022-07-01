import styled from 'styled-components';

export const WapperContainer = styled.div`
  overflow: hidden;
  position: relative;

  width: 100%;
  height: auto;
  background: #fdfdfd;
  border: 3px solid #f0f0f0;

  padding: 20px;
`;

export const TitleNota = styled.h1`
  font-size: 25px;
  font-weight: normal;
  text-align: center;
`;

export const WapperItems = styled.div`
  margin: 20px 0;
  border-left: 2px solid #f0f0f0;
  padding-left: 15px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  :nth-child(odd) {
    background: #f5f5f5;
  }

  padding: 7px 10px;
`;

export const WapperLeft = styled.div``;

export const Value = styled.span`
  letter-spacing: 0.4px;
  font-size: 22px;
`;

export const ListType = styled.ul`
  padding-left: 20px;
  list-style: disc;
`;
export const ItemType = styled.li`
  font-weight: 600;
  letter-spacing: 0.4px;
`;

export const Price = styled.span`
  font-weight: 600;
  letter-spacing: 0.4px;
  font-size: 22px;
`;

export const WapperInfos = styled.div`
  margin: 5px 0;
  padding-left: 20px;
`;
export const ValueInfo = styled.p`
  font-size: 20px;
  margin: 10px 0;
  letter-spacing: 0.4px;
`;

export const TotalNote = styled.p`
  text-align: end;
  margin-top: 25px;

  strong {
    font-size: 22px;
  }
`;
