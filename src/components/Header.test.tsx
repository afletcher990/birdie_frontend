import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '@App/store';
import { CareRecipient } from '@App/store/types';

it('renders without crashing', () => {
    const careRecipients: Array<CareRecipient> = [
        {
            care_recipient_id: 'df50cac5-293c-490d-a06c-ee26796f850d',
            name: 'Keri Wolf'
        },
        {
            care_recipient_id: 'e3e2bff8-d318-4760-beea-841a75f00227',
            name: 'Zahra Povey'
        },
        {
            care_recipient_id: 'ad3512a6-91b1-4d7d-a005-6f8764dd0111',
            name: 'Montana Dickens'
        }
    ];
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <Header careRecipients={careRecipients} currentCareRecipient={careRecipients[1]}/>
        </Provider>
        ,
        div);
});
