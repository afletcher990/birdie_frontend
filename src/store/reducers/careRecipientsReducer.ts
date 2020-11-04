import {
    CareRecipientActionTypes,
    CareRecipientInfo,
    SET_CARE_RECIPIENTS,
    SET_CURRENT_CARE_RECIPIENT
} from '@App/store/types';

const initialState: CareRecipientInfo = {
    careRecipients: [],
    currentCareRecipient: {
        care_recipient_id: '',
        name: 'Pending...'
    }
};

export function careRecipientsReducer(
    state: CareRecipientInfo = initialState,
    action: CareRecipientActionTypes
): CareRecipientInfo {
    switch ( action.type ) {
        case SET_CARE_RECIPIENTS: {
            return {
                careRecipients: action.careRecipientInfo.careRecipients,
                currentCareRecipient: action.careRecipientInfo.currentCareRecipient
            };
        }
        case SET_CURRENT_CARE_RECIPIENT: {
            return {
                careRecipients: state.careRecipients,
                currentCareRecipient: action.careRecipient
            };
        }
        default: {
            return state;
        }
    }
}
