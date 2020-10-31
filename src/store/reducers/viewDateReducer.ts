import { DateInfo, SET_DATE_INFO, SET_VIEW_DATE, ViewDateActionTypes } from '@App/store/types';
import queryString from 'query-string';
import { history } from '@App/store';
import moment from 'moment';

moment.defaultFormat = 'YYYY-MM-DD';

const initialState: DateInfo = {
    validDates: [],
    viewDate: new Date()
};

export function viewDateReducer(
    state: DateInfo = initialState,
    action: ViewDateActionTypes
): DateInfo {
    switch ( action.type ) {
        case SET_VIEW_DATE: {
            const params = queryString.parse(history.location.search);
            params.date = moment(action.payload).format();
            history.push({
                ...history.location,
                search: `?${queryString.stringify(params)}`
            });
            return {
                validDates: state.validDates,
                viewDate: action.payload
            };
        }
        case SET_DATE_INFO: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}