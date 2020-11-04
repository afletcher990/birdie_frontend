import styled from 'styled-components';
import * as React from 'react';

interface DateSelectorProps {
    date: string;
    minDate: string;
    maxDate: string;
    onDateChanged: Function;
}

const DateSelectorContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
  background: #444444;
  margin: 0;
`;

const DateSelector = (props: DateSelectorProps) => {
    return (
        <DateSelectorContainer>
            <input
                type="date"
                value={props.date}
                min={props.minDate}
                max={props.maxDate}
                onChange={(event) => props.onDateChanged(new Date(event.target.value))}
            />
        </DateSelectorContainer>
    );
};
export default DateSelector;
