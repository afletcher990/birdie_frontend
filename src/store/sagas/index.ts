import { put, call, all, select, takeEvery } from 'redux-saga/effects';
import { config } from './Constants';
import { history } from '@App/store';
import {
  SET_CARE_RECIPIENTS,
  SET_CURRENT_CARE_RECIPIENT,
  SET_DATE_INFO,
  SET_DAILY_EVENTS,
  CareRecipient, SET_VIEW_DATE
} from '@App/store/types';
import moment from 'moment';
import queryString from 'query-string';

moment.defaultFormat = 'YYYY-MM-DD';

function* initSaga() {
  yield all([
      getCareRecipients(),
      getValidDates(),
      watchDateChangeAsync()
  ]);
}

export default initSaga;

export function* watchDateChangeAsync() {
  yield takeEvery(SET_VIEW_DATE, getDailyEvents);
}

export function* getDailyEvents() {
  const state = yield select();
  const date = moment(state.dateInfo.viewDate).format();
  const careRecipientId = state.currentCareRecipient.care_recipient_id;
  const response = yield call(fetch, config.url.API_URL +
      `/getDailyEvents/?date=${date}&careRecipientId=${careRecipientId}`);
  const events = yield call([response, response.json]);
  yield put({type: SET_DAILY_EVENTS, payload: events});
}

export function* getValidDates() {
  const response = yield call(fetch, config.url.API_URL + '/getDatesWithVisits');
  const dateList = yield call([response, response.json]);
  const dates = dateList.map((item: {date: string}) => {
    return new Date(item.date);
  });
  const params = queryString.parse(history.location.search);
  let date: Date = dates[dates.length - 1];
  let found: boolean = false;
  if (params && params.date) {
    const findDate = dates.filter((item: Date) => {
      return (moment(item).format() === params.date);
    });
    if (findDate.length) {
      found = true;
      date = findDate[0];
    }
  }
  if (!found) {
    params.date = moment(date).format();
    history.push({
      ...history.location,
      search: `?${queryString.stringify(params)}`
    });
  }
  yield put({type: SET_DATE_INFO, payload: {
    validDates: dates, viewDate: date
    }});
}

export function* getCareRecipients() {
  const response = yield call(fetch, config.url.API_URL + '/getCareRecipients');
  const recipients = yield call([response, response.json]);
  yield put({type: SET_CARE_RECIPIENTS, payload: recipients});
  const params = queryString.parse(history.location.search);
  let recipient: CareRecipient = recipients[0];
  let found: boolean = false;
  if (params && params.care_recipient_id) {
    const findRecipient = recipients.filter((item: CareRecipient) => {
      return (item.care_recipient_id === params.care_recipient_id);
    });
    if (findRecipient.length) {
      found = true;
      recipient = findRecipient[0];
      params.care_recipient_id = recipient.care_recipient_id;
    }
  }
  if (!found) {
    params.care_recipient_id = recipients[0].care_recipient_id;
    history.push({
      ...history.location,
      search: `?${queryString.stringify(params)}`
    });
  }
  yield put({type: SET_CURRENT_CARE_RECIPIENT, payload: recipient});
}
