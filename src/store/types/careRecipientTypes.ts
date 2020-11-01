export const SET_CARE_RECIPIENTS = 'SET_CARE_RECIPIENTS';

export interface CareRecipient {
    care_recipient_id: string;
    name: string;
}

interface SetCareRecipientsAction {
    type: typeof SET_CARE_RECIPIENTS;
    payload: Array<CareRecipient>;
}

export type CareRecipientActionTypes = SetCareRecipientsAction;