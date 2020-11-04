import { CareRecipient } from './careRecipientTypes';

export const SET_CARE_RECIPIENTS = 'SET_CARE_RECIPIENTS';
export const SET_CURRENT_CARE_RECIPIENT = 'SET_CURRENT_CARE_RECIPIENT';

export interface CareRecipient {
    care_recipient_id: string;
    name: string;
}

export interface CareRecipientInfo {
    careRecipients: Array<CareRecipient>;
    currentCareRecipient: CareRecipient;
}

interface SetCurrentCareRecipientAction {
    type: typeof SET_CURRENT_CARE_RECIPIENT;
    careRecipient: CareRecipient;
}

interface SetCareRecipientsAction {
    type: typeof SET_CARE_RECIPIENTS;
    careRecipientInfo: CareRecipientInfo;
}

export type CareRecipientActionTypes = SetCareRecipientsAction | SetCurrentCareRecipientAction;