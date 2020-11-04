import styled from 'styled-components';
import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import DateSelector from '@App/components/DateSelector';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EventList from '@App/components/EventList';
import { CareEvent, SET_VIEW_DATE } from '@App/store/types';
import moment from 'moment';

moment.defaultFormat = 'YYYY-MM-DD';

interface DailyViewProps {
    generalEvents?: Array<CareEvent>;
    bodyInOutEvents?: Array<CareEvent>;
    medicalEvents?: Array<CareEvent>;
    alertEvents?: Array<CareEvent>;
    date?: string;
    minDate?: string;
    maxDate?: string;
}

const generalTypes = [
    'task_completed',
    'visit_completed',
    'check_out',
    'mood_observation',
    'check_in',
    'general_observation',
    'task_completion_reverted',
    'visit_cancelled',
    'task_schedule_created',
    'concern_raised'
];

const bodyInOutTypes = [
    'fluid_intake_observation',
    'food_intake_observation',
    'incontinence_pad_observation',
    'catheter_observation',
    'toilet_visit_recorded'
];

const medicalTypes = [
    'medication_schedule_updated',
    'regular_medication_taken',
    'no_medication_observation_received',
    'regular_medication_not_taken',
    'regular_medication_maybe_taken',
    'medication_schedule_created',
    'regular_medication_partially_taken',
    'physical_health_observation',
    'mental_health_observation'
];

const alertTypes = [
    'alert_raised',
    'alert_qualified'
];

const DailyViewContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
  margin: 0;
`;

type Props = DailyViewProps & {
    setDate: (date: Date) => void
};

const setDate = (date: Date) => ({ type: SET_VIEW_DATE, payload: date});

const DailyView = (props: Props) => {
    return (
        <DailyViewContainer>
            <DateSelector
                date={props.date || ''}
                minDate={props.minDate || ''}
                maxDate={props.maxDate || ''}
                onDateChanged={(date: Date) => props.setDate(date)}
            />
            <Tabs>
                <TabList>
                    <Tab>General</Tab>
                    <Tab>Bodily In/Out</Tab>
                    <Tab>Medication</Tab>
                    <Tab>Alerts</Tab>
                </TabList>
                <TabPanel>
                    <EventList type="general" events={props.generalEvents || []}/>
                </TabPanel>
                <TabPanel>
                    <EventList type="bodyInOut" events={props.bodyInOutEvents || []}/>
                </TabPanel>
                <TabPanel>
                    <EventList type="medical" events={props.medicalEvents || []}/>
                </TabPanel>
                <TabPanel>
                    <EventList type="alert" events={props.alertEvents || []}/>
                </TabPanel>
            </Tabs>
        </DailyViewContainer>
    );
};

const mapStateToProps = (state: RootState, ownProps: DailyViewProps) => {
    const generalEvents: Array<CareEvent> = [];
    const bodyInOutEvents: Array<CareEvent> = [];
    const medicalEvents: Array<CareEvent> = [];
    const alertEvents: Array<CareEvent> = [];
    state.careEventList.forEach((item: CareEvent) => {
        if (generalTypes.some((type: string) => {
            return item.event_type === type;
        })) {
            generalEvents.push(item);
        } else if (bodyInOutTypes.some((type: string) => {
            return item.event_type === type;
        })) {
            bodyInOutEvents.push(item);
        } else if (medicalTypes.some((type: string) => {
            return item.event_type === type;
        })) {
            medicalEvents.push(item);
        } else if (alertTypes.some((type: string) => {
            return item.event_type === type;
        })) {
            alertEvents.push(item);
        }
    });
    return {
        generalEvents: generalEvents,
        bodyInOutEvents: bodyInOutEvents,
        medicalEvents: medicalEvents,
        alertEvents: alertEvents,
        date: moment(state.dateInfo.viewDate).format(),
        minDate: moment(state.dateInfo.validDates[0]).format(),
        maxDate: moment(state.dateInfo.validDates[state.dateInfo.validDates.length - 1]).format()
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {
        setDate: (date: Date) => dispatch(setDate(date))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyView);
