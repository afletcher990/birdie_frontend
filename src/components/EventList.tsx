import styled from 'styled-components';
import * as React from 'react';
import { CareEvent } from '@App/store/types';
import EventItem from '@App/components/EventItem';

interface EventListProps {
    type: string;
    events: Array<CareEvent>;
}

const EventListContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
  margin: 0;
`;

const EventList = (props: EventListProps) => {
    return (
        <EventListContainer>
            <div>
                {props.events.map((item: CareEvent, index: Number) => (
                    <EventItem key={props.type + index} item={item}/>
                ))}
            </div>
        </EventListContainer>
    );
};

export default EventList;
