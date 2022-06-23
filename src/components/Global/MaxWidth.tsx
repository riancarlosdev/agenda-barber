import styled from 'styled-components';

interface MaxWidthComponentProps {
  children: JSX.Element;
}

const WapperContainer = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
`;

export const MaxWidthComponent: React.FC<MaxWidthComponentProps> = ({
  children,
}: MaxWidthComponentProps): JSX.Element => {
  return <WapperContainer>{children}</WapperContainer>;
};
