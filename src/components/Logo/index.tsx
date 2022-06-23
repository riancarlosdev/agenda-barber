import styled from 'styled-components';

const WapperContainer = styled.div`
  small {
    font-family: ${({ theme }) => theme.fonts.secundary};
    font-size: 30px;
    letter-spacing: -0.4px;
  }
`;

export const LogoComponent: React.FC = (): JSX.Element => {
  return (
    <WapperContainer>
      <small>Agenda Barber</small>
    </WapperContainer>
  );
};
