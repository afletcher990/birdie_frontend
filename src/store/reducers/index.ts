import { combineReducers } from 'redux';
import { currentCareRecipientReducer } from './currentCareRecipientReducer';
import { careRecipientsReducer } from '@App/store/reducers/careRecipientsReducer';
import { CareEvent, CareRecipient, DateInfo } from '@App/store/types';
import { viewDateReducer } from '@App/store/reducers/viewDateReducer';
import { eventListReducer } from '@App/store/reducers/eventListReducer';

export type RootState = Readonly<{
    currentCareRecipient: CareRecipient,
    careRecipients: Array<CareRecipient>,
    dateInfo: DateInfo,
    careEventList: Array<CareEvent>
}>;

export const rootReducer = combineReducers<RootState>({
    currentCareRecipient: currentCareRecipientReducer,
    careRecipients: careRecipientsReducer,
    dateInfo: viewDateReducer,
    careEventList: eventListReducer
});
