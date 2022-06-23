import { LogoComponent } from '@components/Logo';
import { ItemNavigation, WapperContainer, WapperLogo, WapperOuthers } from './styles';

import { MdOutlineNotificationsNone, MdOutlineExitToApp } from 'react-icons/md';

export const HeaderComponent: React.FC = (): JSX.Element => {
  return (
    <WapperContainer>
      <WapperLogo>
        <LogoComponent />
      </WapperLogo>

      <WapperOuthers>
        <ItemNavigation>
          <MdOutlineNotificationsNone size={26} color='#4B4B4B' />
        </ItemNavigation>
        <ItemNavigation>
          <MdOutlineExitToApp size={26} color='#4B4B4B' />
        </ItemNavigation>
      </WapperOuthers>
    </WapperContainer>
  );
};
