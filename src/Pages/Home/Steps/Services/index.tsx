import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { services } from './data';
import {
  ImageService,
  ItemServices,
  ListServices,
  Name,
  Price,
  Type,
  WapperSelected,
  WapperServices,
  WapperValueName,
} from './styles';

export const StepServicesComponent: React.FC = (): JSX.Element => {
  const [selected, setSelected] = useState<string>('');
  return (
    <WapperServices>
      <ListServices>
        {services.map((item) => (
          <ItemServices
            active={selected === item.id}
            onClick={selected === item.id ? undefined : () => setSelected(item.id)}
            key={item.id}
          >
            {selected === item.id && (
              <WapperSelected>
                <BsCheck size={28} color='#fff' />
              </WapperSelected>
            )}
            <WapperValueName className='values'>
              <Name>{item.value.name}</Name>
              <Type>{item.value.type}</Type>
            </WapperValueName>
            <Price>R$ {item.price}</Price>
            <ImageService image={item.image} />
          </ItemServices>
        ))}
      </ListServices>
    </WapperServices>
  );
};
