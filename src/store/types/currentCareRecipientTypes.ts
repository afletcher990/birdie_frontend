import { CareRecipient } from './careRecipientTypes';

export const SET_CURRENT_CARE_RECIPIENT = 'SET_CURRENT_CARE_RECIPIENT';

interface SetCurrentCareRecipientAction {
    type: typeof SET_CURRENT_CARE_RECIPIENT;
    payload: CareRecipient;
}

export type CurrentCareRecipientActionTypes = SetCurrentCareRecipientAction;