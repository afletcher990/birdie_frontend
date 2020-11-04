import * as React from 'react';
import * as ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import EventItem from './EventItem';
import { CareEvent } from '@App/store/types';
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

const careEvent2: CareEvent = {
    caregiver_id: '3cacba0a-6041-11e9-b63f-06a80bfbb33e',
    caregiver_name: 'Rahim Kavanagh',
    event_type: 'fluid_intake_observation',
    payload: {
        volume_ml: 250,
        pad_condition: '',
        meal: '',
        observed: false,
        consumed_volume_ml: 0,
        fluid: 'regular',
        note: '',
        mood: '',
        task_definition_description: ''
    },
    timestamp: new Date('2019-05-12T07:21:11.990Z'),
    visit_id: '5cd753f0-8b66-f8a8-4591-3f78ca3f9c45'
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventItem key="key1" item={careEvent}/>,  div);
});

it('Displays correct details', () => {
    const component = renderer.create(
        <EventItem key="key1" item={careEvent}/>,);
    let eventItem = component.toJSON();
    expect(eventItem).toMatchSnapshot();
});

it('Displays fluid intake correct details', () => {
    const component = renderer.create(
        <EventItem key="key1" item={careEvent2}/>,);
    let eventItem = component.toJSON();
    expect(eventItem).toMatchSnapshot();
});
