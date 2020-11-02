import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '@App/store';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <Header />
        </Provider>
        ,
        div);
});
