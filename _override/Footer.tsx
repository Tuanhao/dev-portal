import * as React from 'react';
import styled from 'styled-components';

import { Flex, Link } from '@redocly/developer-portal/ui';

export default function Footer(props) {
    const { columns, copyrightText } = props.footer;

    return (
        <FooterWrapper>
           <div>
              abc
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