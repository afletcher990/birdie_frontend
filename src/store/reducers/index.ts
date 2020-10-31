import { combineReducers } from 'redux';
import { currentCareRecipientReducer } from './currentCareRecipientReducer';
import { CareEvent, CareRecipient, DateInfo } from '@App/store/types';
import { viewDateReducer } from '@App/store/reducers/viewDateReducer';
import { careRecipientsReducer } from '@App/store/reducers/eventListReducer';

export type RootState = Readonly<{
    currentCareRecipient: CareRecipient,
    dateInfo: DateInfo,
    careEventList: Array<CareEvent>
}>;

export const rootReducer = combineReducers<RootState>({
    currentCareRecipient: currentCareRecipientReducer,
    dateInfo: viewDateReducer,
    careEventList: careRecipientsReducer
});
