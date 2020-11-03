import styled from 'styled-components';
import * as React from 'react';
import moment from 'moment';
import { CareEvent } from '@App/store/types';

interface EventItemProps {
    key: string;
    item: CareEvent;
}

const getDisplayName = (id: string) => {
    return id.charAt(0).toUpperCase() + id.substring(1).replace(/_/g, ' ');
};

const EventItemContainer = styled.div`
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    flex-direction: row;
    align-items: flex-start;
    display: flex;
    justify-content: center;
    margin: 0;
`;

const TimeBox = styled.div`
    border: grey;
    border-style: solid;
    margin: 6px;
    padding: 6px;
    border-radius: 10px;
    border-width: thin;
`;

const EventBox = styled.div`
    border: grey;
    border-style: solid;
    margin: 6px;
    padding: 6px;
    width: 20rem;
    border-radius: 10px;
    border-width: thin;
    text-align: start;
    
    @media(min-width: 768px) {
        width: 40rem;
    }
`;

const getEventDescription = (careEvent: CareEvent) => {
    switch (careEvent.event_type) {
        case 'check_in':
        case 'check_out':
        case 'visit_completed':
            return `${getDisplayName(careEvent.event_type)} (${careEvent.caregiver_name})`;
        case 'task_completed':
            return careEvent.payload.task_definition_description;
        case 'mood_observation':
            return `${getDisplayName(careEvent.event_type)} (${careEvent.payload.mood})`;
        case 'general_observation':
            return careEvent.payload.note;
        case 'general_observation':
            return careEvent.payload.note;
        case 'fluid_intake_observation':
            return `${getDisplayName(careEvent.event_type)} (${careEvent.payload.fluid} 
${careEvent.payload.consumed_volume_ml}ml - ${careEvent.payload.observed ? 'Observed' : 'Not Observed'})`;
        case 'food_intake_observation':
            return `${getDisplayName(careEvent.event_type)} (${careEvent.payload.meal} - ${careEvent.payload.note})`;
        case 'incontinence_pad_observation':
            return `${getDisplayName(careEvent.event_type)} (${careEvent.payload.pad_condition})`;
        case 'catheter_observation':
            return `${getDisplayName(careEvent.event_type)} (${careEvent.payload.volume_ml}ml - 
${careEvent.payload.note})`;
        case 'mental_health_observation':
        case 'physical_health_observation':
        case 'regular_medication_not_taken':
            return `${getDisplayName(careEvent.event_type)} (${careEvent.payload.note})`;
        case 'alert_raised':
        case 'alert_qualified':
        case 'medication_schedule_updated':
        case 'regular_medication_maybe_taken':
        case 'medication_schedule_created':
        case 'regular_medication_partially_taken':
        case 'toilet_visit_recorded':
        case 'no_medication_observation_received':
        case 'regular_medication_taken':
        default:
            return getDisplayName(careEvent.event_type);
    }
    return '';
};

const getStyle = (eventType: string) => {
    switch (eventType) {
        case 'check_in':
            return {backgroundColor: 'lightGreen'};
        case 'check_out':
        case 'visit_completed':
            return {backgroundColor: '#f5aeb3'};
        case 'fluid_intake_observation':
        case 'food_intake_observation':
            return {backgroundColor: '#aedaf5'};
        case 'incontinence_pad_observation':
        case 'catheter_observation':
        case 'toilet_visit_recorded':
            return {backgroundColor: '#f5edae'};
        case 'regular_medication_maybe_taken':
        case 'medication_schedule_created':
        case 'regular_medication_partially_taken':
        case 'no_medication_observation_received':
        case 'regular_medication_taken':
            return {backgroundColor: '#f7b092'};
        default: return {};
    }
};

const EventItem = (props: EventItemProps) => {
    return (
        <EventItemContainer>
            <TimeBox>{moment(props.item.timestamp).format('HH:mm')}</TimeBox>
            <EventBox style={getStyle(props.item.event_type)}>{getEventDescription(props.item)}</EventBox>
        </EventItemContainer>
    );
};

export default EventItem;
