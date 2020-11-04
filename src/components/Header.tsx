import styled from 'styled-components';
import * as React from 'react';

interface HeaderProps {
    careRecipientName: string;
}

const HeaderContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-size: 24px;
  background: #54C6C1;
  margin: 0;
  color: #444444;
`;

const Header = (props: HeaderProps) => {
    return (
        <HeaderContainer>
            <div>Care for {props.careRecipientName}
            </div>
        </HeaderContainer>
    );
};

export default Header;
