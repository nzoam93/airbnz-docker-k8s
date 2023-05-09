import {useState} from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./AirbnzCalendar.css"

export default function AirbnzCalendar(props) {
  // const [startDate, setStartDate] = React.useState();
  // const [endDate, setEndDate] = React.useState();
  const [focusedInput, setFocusedInput] = useState();
  return (
    <div className="App">
      <DateRangePicker
        startDate={props.checkinDate}
        startDateId="start-date"
        endDate={props.checkoutDate}
        endDateId="end-date"
        onDatesChange={({ startDate, endDate }) => {
          props.setCheckinDate(startDate);
          props.setCheckoutDate(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}

        /* added */
        // startDateTitleText = "CHECK-IN"
        // startDateAriaLabel = "CHECK-IN"
        // startDatePlaceholderText = "CHECK-IN"
      />
    </div>
  );
}
