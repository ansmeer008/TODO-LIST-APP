import React, { useState } from "react";
import Nav from "../components/Nav";
import Calendar from "react-calendar";

export default function ToDoCalendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div id="calendar-container">
      <Nav />
      <div id="calendar-body">
        <div id="calendar-box">
          <p className="calendar-selected-date-container">
            <span className="calendar-selected-date">
              오늘은 {date.toLocaleDateString()}
            </span>
          </p>
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
    </div>
  );
}
