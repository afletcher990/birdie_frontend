import { CareRecipients, CareRecipientActionTypes, SET_CARE_RECIPIENTS } from '@App/store/types';

const initialState: CareRecipients = {
    careRecipients: []
};

export function careRecipientsReducer(
    state: CareRecipients = initialState,
    action: CareRecipientActionTypes
): CareRecipients {
    switch ( action.type ) {
        case SET_CARE_RECIPIENTS: {
            return state;
        }
        default: {
            return state;
        }
    }
}