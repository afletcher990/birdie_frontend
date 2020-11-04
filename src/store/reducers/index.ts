import { combineReducers } from 'redux';
import { careRecipientsReducer } from '@App/store/reducers/careRecipientsReducer';
import { viewDateReducer } from '@App/store/reducers/viewDateReducer';
import { eventListReducer } from '@App/store/reducers/eventListReducer';
import { CareRecipientInfo, DateInfo, CareEvent } from '@App/store/types';

export type RootState = Readonly<{
    careRecipientInfo: CareRecipientInfo,
    dateInfo: DateInfo,
    careEventList: Array<CareEvent>
}>;

export const rootReducer = combineReducers<RootState>({
    careRecipientInfo: careRecipientsReducer,
    dateInfo: viewDateReducer,
    careEventList: eventListReducer
});
