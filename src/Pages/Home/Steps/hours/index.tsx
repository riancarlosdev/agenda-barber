import { useState } from 'react';
import { hours } from './data';
import { Item, ListHours, WapperContainer } from './styles';

export const StepHoursComponent: React.FC = (): JSX.Element => {
  const [selected, setSelected] = useState('');

  return (
    <WapperContainer>
      <ListHours>
        {hours.map((item) => (
          <Item
            disabled={item.status}
            active={selected === item.id}
            onClick={() => setSelected(item.id)}
            key={item.id}
          >
            {item.value}
          </Item>
        ))}
      </ListHours>
    </WapperContainer>
  );
};
