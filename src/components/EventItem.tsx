import styled from 'styled-components';
import * as React from 'react';
import { RootState } from '@App/store/reducers';
import moment from 'moment';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
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
`;

const EventBox = styled.div`
    border: grey;
    border-style: solid;
    margin: 6px;
    padding: 6px;
    width: 20rem;
    border-radius: 10px;
    text-align: start;
    
    @media(min-width: 768px) {
        width: 40rem;
    }
`;

const getEventDescription = (careEvent: CareEvent) => {
    let eventDescription = getDisplayName(careEvent.event_type);
    if (careEvent.event_type === 'check_in' || careEvent.event_type === 'check_out' ||
        careEvent.event_type === 'visit_completed') {
        eventDescription += ' (' + careEvent.caregiver_name + ')';
    } else if (careEvent.event_type === 'task_completed') {
        eventDescription = careEvent.payload.task_definition_description;
    } else if (careEvent.event_type === 'mood_observation') {
        eventDescription += ' (' + careEvent.payload.mood + ')';
    } else if (careEvent.event_type === 'general_observation') {
        eventDescription = careEvent.payload.note;
    }
    return eventDescription;
};

const EventItem = (props: EventItemProps) => {
    return (
        <EventItemContainer>
            <TimeBox>{moment(props.item.timestamp).format('HH:mm')}</TimeBox>
            <EventBox>{getEventDescription(props.item)}</EventBox>
        </EventItemContainer>
    );
};

const mapStateToProps = (state: RootState, ownProps: EventItemProps) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);
