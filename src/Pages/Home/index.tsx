import { MaxWidthComponent } from '@components/Global/MaxWidth';
import { HeaderComponent } from '@components/Header';
import { SectionComponent } from '@components/Section';
import { useState } from 'react';
import { StepSelectBarbersComponent } from './Steps/Barbers';
import { StepSelectDayComponent } from './Steps/Day';
import { StepHoursComponent } from './Steps/hours';
import { StepNoteComponent } from './Steps/Note';
import { StepServicesComponent } from './Steps/Services';
import { WapperContainer, WapperInputName, Input, WapperTotalLength } from './styles';

export const HomePage: React.FC = (): JSX.Element => {
  const [lengthInputName, setLengthInputName] = useState<number>(0);

  return (
    <MaxWidthComponent>
      <WapperContainer>
        <HeaderComponent />

        <SectionComponent title='Digite seu nome:'>
          <WapperInputName>
            <Input maxLength={23} onChange={(e) => setLengthInputName(e.target.value.length)} />
            <WapperTotalLength status={lengthInputName}>{lengthInputName}/23</WapperTotalLength>
          </WapperInputName>
        </SectionComponent>

        <SectionComponent title='Digite o e-mail para envio do comprovante de pagamento:'>
          <WapperInputName>
            <Input />
          </WapperInputName>
        </SectionComponent>

        <SectionComponent title='Escolha a Barbearia:'>
          <StepSelectBarbersComponent />
        </SectionComponent>

        <SectionComponent title='Escolha os serviços:'>
          <StepServicesComponent />
        </SectionComponent>

        <SectionComponent title='Escolha o dia:'>
          <StepSelectDayComponent />
        </SectionComponent>

        <SectionComponent title='Escolha o horário disponivel:'>
          <StepHoursComponent />
        </SectionComponent>

        <SectionComponent title='Nota de pagamento:'>
          <StepNoteComponent />
        </SectionComponent>
      </WapperContainer>
    </MaxWidthComponent>
  );
};
