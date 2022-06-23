import { WapperContainer, TitleSection } from './styles';

interface SectionComponentProps {
  children: JSX.Element;
  title: string;
}

export const SectionComponent: React.FC<SectionComponentProps> = ({
  children,
  title,
}: SectionComponentProps): JSX.Element => {
  return (
    <WapperContainer>
      <TitleSection>{title}</TitleSection>
      {children}
    </WapperContainer>
  );
};
