import { MaxWidthComponent } from '@components/Global/MaxWidth';
import { HeaderComponent } from '@components/Header';
import { SectionComponent } from '@components/Section';
import { StepSelectBarbersComponent } from './Steps/Barbers';
import { WapperContainer } from './styles';

export const HomePage: React.FC = (): JSX.Element => {
  return (
    <MaxWidthComponent>
      <WapperContainer>
        <HeaderComponent />

        <SectionComponent title='Escolha a Barbearia:'>
          <StepSelectBarbersComponent />
        </SectionComponent>
      </WapperContainer>
    </MaxWidthComponent>
  );
};
