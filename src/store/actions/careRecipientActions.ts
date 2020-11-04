import {
    CareRecipient,
    CareRecipientInfo,
    CareRecipientActionTypes,
    SET_CARE_RECIPIENTS,
    SET_CURRENT_CARE_RECIPIENT
} from '@App/store/types';

export function SetCurrentCareRecipient(careRecipient: CareRecipient): CareRecipientActionTypes {
    return {
        type: SET_CURRENT_CARE_RECIPIENT,
        careRecipient: careRecipient
    };
}

export function setCareRecipientInfo(careRecipientInfo: CareRecipientInfo) {
    return {
        type: SET_CARE_RECIPIENTS,
        careRecipientInfo: careRecipientInfo
    };
}
