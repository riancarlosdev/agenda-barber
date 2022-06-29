import { useCallback, useState } from 'react';
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
  const [selected, setSelected] = useState<string[]>(['']);

  const handleOnClick = useCallback(
    (selected: string[], id: string) => {
      if (!selected.includes(id) && selected.filter((item) => item === id)) {
        return setSelected([...selected, id]);
      }
      return setSelected(selected.filter((index) => index !== id));
    },
    [setSelected],
  );

  return (
    <WapperServices>
      <ListServices>
        {services.map((item) => (
          <ItemServices
            active={selected.some((index) => index === item.id)}
            onClick={() => handleOnClick(selected, item.id)}
            key={item.id}
          >
            {selected.some((index) => index === item.id) && (
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
