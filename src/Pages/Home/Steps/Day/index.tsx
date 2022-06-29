import { useState } from 'react';
import { days } from './data';
import { ItemDay, ListDays, ValueDay, WapperContainer, WapperNumber } from './styles';

export const StepSelectDayComponent: React.FC = (): JSX.Element => {
  const [selected, setSelected] = useState<string>('');

  return (
    <WapperContainer>
      <ListDays>
        {days.map((item) => (
          <ItemDay onClick={() => setSelected(item.id)} key={item.id}>
            <WapperNumber active={selected === item.id}>{item.day}</WapperNumber>
            <ValueDay>{item.value}</ValueDay>
          </ItemDay>
        ))}
      </ListDays>
    </WapperContainer>
  );
};
