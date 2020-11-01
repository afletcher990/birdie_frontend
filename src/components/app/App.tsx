import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
    HashRouter as Router,
    Switch,
    Route, Redirect
} from 'react-router-dom';

import Header from '@App/components/Header.tsx';
import DailyView from '@App/components/views/DailyView';

interface AppProps {
}

interface AppState {

}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F9F9F9;
    margin: 0;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: top;
  align-items: top;
  flex-direction: column;
`;

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  public componentDidMount() {
  }

    public render() {
    return (
      <>
        <GlobalStyle />
        <Header/>
        <AppContainer>
            <Router>
                <Switch>
                    <Route path="/dailyView" render={() => (<DailyView/>)}/>
                    <Redirect to="/dailyView"/>
                </Switch>
            </Router>
        </AppContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: AppProps) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);