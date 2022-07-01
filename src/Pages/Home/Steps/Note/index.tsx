import {
  Item,
  ItemType,
  ListType,
  Price,
  TitleNota,
  TotalNote,
  Value,
  ValueInfo,
  WapperContainer,
  WapperInfos,
  WapperItems,
  WapperLeft,
} from './styles';

export const StepNoteComponent: React.FC = (): JSX.Element => {
  return (
    <WapperContainer>
      <TitleNota>Nome da barbearia</TitleNota>
      <WapperItems>
        <Item>
          <WapperLeft>
            <Value>Corte de cabelo</Value>
            <ListType>
              <ItemType>maquina</ItemType>
            </ListType>
          </WapperLeft>
          <Price>10,00</Price>
        </Item>
        <Item>
          <WapperLeft>
            <Value>Carba</Value>
          </WapperLeft>
          <Price>10,00</Price>
        </Item>
        <Item>
          <WapperLeft>
            <Value>Sobrancelha</Value>
          </WapperLeft>
          <Price>10,00</Price>
        </Item>
      </WapperItems>
      <WapperInfos>
        <ValueInfo>Horario: 15:20</ValueInfo>
        <ValueInfo>
          Dia: 03/06/2022 <strong>(quarta-feira)</strong>
        </ValueInfo>
      </WapperInfos>

      <TotalNote>
        Total: <strong>R$ 30,00</strong>
      </TotalNote>
    </WapperContainer>
  );
};
