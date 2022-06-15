import * as React from 'react';
import styled from 'styled-components';
import { Counter } from '../components/Counter';

import { MenuItems, MenuMobileButton, MenuWrapper, MenuProps, navigate } from '@redocly/developer-portal/ui';

export default function UserMenu(props: MenuProps) {
  const { className, items, navbarHeight, location } = props;

  const [mobileOpened, setMobileOpened] = React.useState(false);

  const toggleMobile = React.useCallback(() => {
    setMobileOpened(!mobileOpened);
  }, [mobileOpened]);

  React.useEffect(() => {
    setMobileOpened(false);
  }, [location.pathname]);

  return (
    <>
      <MenuMobileButton opened={mobileOpened} onClick={toggleMobile} />
      <StyledMenuWrapper animate={true} opened={true} navBarHeight={navbarHeight} className={className}>
        <MenuItems depth={0} items={items} />
        <div>
          Menu123
        </div>
        <Counter />
        <br/>
        <div>
          Menu 345
        </div>
        <form action="https://google.com">
          <input type="submit" value="Go to Google" />
        </form>
        <br />
        <a href="google.com"><Button onclick="google.com">Go to Google</Button></a>
      </StyledMenuWrapper>
    </>
  );
}

 // #region style
const StyledMenuWrapper = styled(MenuWrapper)`
  border-right: 1px solid #f0f0f0;
  padding: 20px 10px 10px 10px;
`;

const Button = styled.button`padding: 10px; border: 1px solid black`

// #regionEnd