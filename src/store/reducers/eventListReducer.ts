import { CareEventActionTypes, SET_DAILY_EVENTS, CareEvent } from '@App/store/types';

const initialState: Array<CareEvent> = [];

export function careRecipientsReducer(
    state: Array<CareEvent> = initialState,
    action: CareEventActionTypes
): Array<CareEvent> {
    switch ( action.type ) {
        case SET_DAILY_EVENTS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}