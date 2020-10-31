import styled from 'styled-components';
import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface HeaderProps {
    careRecipientName?: string;
}

interface HeaderState {
}

const HeaderContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-size: 24px;
  background: #54C6C1;
  margin: 0;
  color: #444444;
`;

class Header extends React.Component<HeaderProps, HeaderState> {
    public constructor(props: HeaderProps) {
        super(props);
    }

    public componentDidMount() {
    }

    public render() {
        return (
            <HeaderContainer>
                <div>Care for {this.props.careRecipientName}
                </div>
            </HeaderContainer>
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: HeaderProps) => {
    return {
        careRecipientName: state.currentCareRecipient.name
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
