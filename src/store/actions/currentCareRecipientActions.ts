import { CareRecipient, CurrentCareRecipientActionTypes, SET_CURRENT_CARE_RECIPIENT } from '@App/store/types';

export function SetCurrentCareRecipient(careRecipient: CareRecipient): CurrentCareRecipientActionTypes {
    return {
        type: SET_CURRENT_CARE_RECIPIENT,
        payload: careRecipient
    };
}
