import {
    CareRecipient,
    CurrentCareRecipientActionTypes, SET_CURRENT_CARE_RECIPIENT
} from '@App/store/types';

const initialState: CareRecipient = {
    care_recipient_id: '', name: 'Pending...'
};

export function currentCareRecipientReducer(
    state: CareRecipient = initialState,
    action: CurrentCareRecipientActionTypes
): CareRecipient {
    switch ( action.type ) {
        case SET_CURRENT_CARE_RECIPIENT: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}