import { MaxWidthComponent } from '@components/Global/MaxWidth';
import { HeaderComponent } from '@components/Header';
import { WapperContainer } from './styles';

export const HomePage: React.FC = (): JSX.Element => {
  return (
    <MaxWidthComponent>
      <WapperContainer>
        <HeaderComponent />
      </WapperContainer>
    </MaxWidthComponent>
  );
};
