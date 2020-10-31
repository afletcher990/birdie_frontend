import styled from 'styled-components';
import * as React from 'react';
import { RootState } from '@App/store/reducers';
import moment from 'moment';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { SET_VIEW_DATE } from '@App/store/types';

interface DateSelectorProps {
    date?: string;
    minDate?: string;
    maxDate?: string;
}

moment.defaultFormat = 'YYYY-MM-DD';

const DateSelectorContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
  background: #444444;
  margin: 0;
`;

type Props = DateSelectorProps & {
    setDate: (arg0: Date) => void
};

const setDateDispatch = (date: Date) => ({ type: SET_VIEW_DATE, payload: date});

const DateSelector = (props: Props) => {
    return (
        <DateSelectorContainer>
            <input
                type="date"
                value={props.date}
                min={props.minDate}
                max={props.maxDate}
                onChange={(event) => props.setDate(new Date(event.target.value))}
            />
        </DateSelectorContainer>
    );
};

const mapStateToProps = (state: RootState, ownProps: DateSelectorProps) => {
    return {
        date: moment(state.dateInfo.viewDate).format(),
        minDate: moment(state.dateInfo.validDates[0]).format(),
        maxDate: moment(state.dateInfo.validDates[state.dateInfo.validDates.length - 1]).format()
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {
        setDate: (date: Date) => dispatch(setDateDispatch(date)),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
