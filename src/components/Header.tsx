import styled from 'styled-components';
import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CareRecipient } from '@App/store/types';

interface HeaderProps {
    currentCareRecipient?: CareRecipient;
    careRecipients?: Array<CareRecipient>;
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
            <div>Care for {props.currentCareRecipient!.name}
            </div>
        </HeaderContainer>
    );
};

const mapStateToProps = (state: RootState, ownProps: HeaderProps) => {
    return {
        currentCareRecipient: state.currentCareRecipient,
        careRecipients: state.careRecipients
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
