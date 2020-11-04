import { ViewDateActionTypes, SET_VIEW_DATE, SET_DATE_INFO, DateInfo } from '@App/store/types';

export function setDate(date: Date): ViewDateActionTypes {
    return {
        type: SET_VIEW_DATE,
        payload: date
    };
}

export function setDateInfo(dateInfo: DateInfo): ViewDateActionTypes {
    return {
        type: SET_DATE_INFO,
        payload: dateInfo
    };
}