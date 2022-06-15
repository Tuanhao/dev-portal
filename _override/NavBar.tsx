import * as React from 'react';
import styled from 'styled-components';

import { Flex, Link } from '@redocly/developer-portal/ui';

export default function Footer(props) {
  const { items, logo, location } = props;
  const isMain = location.pathname !== '/'; // Change the color of the NavBar based on location

  const [isMobileMenuOpened, setMobileMenuOpened] = React.useState(false);
  const toggleMobileMenu = () => setMobileMenuOpened(!isMobileMenuOpened);
  const hideMobileMenu = () => setMobileMenuOpened(false);
    return (
        <FooterWrapper>
           <div>
              Navigation bar is here
           </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    background: rgba(34,122,136,0.9);
`;

const FooterItems = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    color: #ffffff;
    justify-content: start;
    & li {
        list-style: none;
        margin-right: 20px;
        & a {
            color: #ffffff;
        }
    }
`;