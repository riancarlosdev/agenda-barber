import {
  ImageBarber,
  Value,
  WapperContainer,
  WapperInfo,
  WapperInfoHover,
  WapperItemBarbers,
  WapperSelected,
} from './styles';
import { BsCheck } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { barbers } from './data';
import { useState } from 'react';

export const StepSelectBarbersComponent: React.FC = (): JSX.Element => {
  const [selected, setSelected] = useState<string>('');

  return (
    <WapperContainer>
      {barbers.map((item) => (
        <WapperItemBarbers
          active={selected === item.id}
          onClick={selected === item.id ? undefined : () => setSelected(item.id)}
          key={item.id}
        >
          <ImageBarber img={item.image} />
          {selected === item.id && (
            <WapperSelected>
              <BsCheck size={34} color='#fff' />
            </WapperSelected>
          )}
          <WapperInfoHover className='hover-barber-item'>
            <Value>{item.title}</Value>
            <WapperInfo>
              <HiLocationMarker color='#fff' size={24} />
              <Value>
                {item.address}, n.°{item.number}, {item.district}, {item.cidade}
              </Value>
            </WapperInfo>
          </WapperInfoHover>
        </WapperItemBarbers>
      ))}
    </WapperContainer>
  );
};
