import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarFilter.css";

function CalendarFilter() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container ">
      <Calendar onChange={setDate} value={date} selectRange={true} />
    </div>
  );
}

export default CalendarFilter;
