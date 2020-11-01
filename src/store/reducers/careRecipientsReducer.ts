import {
    CareRecipient,
    CareRecipientActionTypes,
    SET_CARE_RECIPIENTS
} from '@App/store/types';

const initialState: Array<CareRecipient> = [];

export function careRecipientsReducer(
    state: Array<CareRecipient> = initialState,
    action: CareRecipientActionTypes
): Array<CareRecipient> {
    switch ( action.type ) {
        case SET_CARE_RECIPIENTS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
