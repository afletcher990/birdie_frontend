import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EventItem from './EventItem';
import { CareEvent } from '@App/store/types';

it('renders without crashing', () => {
    const careEvent: CareEvent = {
        caregiver_id: '5c9090ab-7d5e-4a72-8bf7-197190ad4c98',
        caregiver_name: 'Skyla Cresswell',
        event_type: 'check_in',
        payload: {
            volume_ml: 0,
            pad_condition: '',
            meal: '',
            observed: false,
            consumed_volume_ml: 0,
            fluid: '',
            note: '',
            mood: '',
            task_definition_description: ''
        },
        timestamp: new Date('2019-05-12T06:34:30.825Z'),
        visit_id: '5cd753f0-8b66-f8a8-4591-3f78ca3f9c45'
    };
    const div = document.createElement('div');
    ReactDOM.render(<EventItem key="key1" item={careEvent}/>,  div);
});
