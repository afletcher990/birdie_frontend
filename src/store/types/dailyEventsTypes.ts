export const SET_DAILY_EVENTS = 'SET_DAILY_EVENTS';

export interface CareEvent {
    visit_id: string;
    caregiver_id: string;
    caregiver_name: string;
    timestamp: Date;
    event_type: string;
    payload: {
        note: string;
        mood: string;
        task_definition_description: string;
    };
}

interface SetCareEventsAction {
    type: typeof SET_DAILY_EVENTS;
    payload: Array<CareEvent>;
}

export type CareEventActionTypes = SetCareEventsAction;