export const SET_VIEW_DATE = 'SET_VIEW_DATE';
export const SET_DATE_INFO = 'SET_DATE_INFO';

export interface DateInfo {
    validDates: Array<Date>;
    viewDate: Date;
}

interface SetDateInfoAction {
    type: typeof SET_DATE_INFO;
    payload: DateInfo;
}

interface SetViewDateAction {
    type: typeof SET_VIEW_DATE;
    payload: Date;
}

export type ViewDateActionTypes = SetViewDateAction | SetDateInfoAction;