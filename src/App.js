import React, { useState, useEffect } from "react";
import "./App.css";
import TodoListContainer from "./pages/TodoListContainer";
import Start from "./pages/Start";
import Information from "./pages/Information";
import Cookies from "./pages/Cookies";
import ToDoCalendar from "./pages/ToDoCalendar";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getCookieData } from "./static/data";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addCookie } from "./actions";

function App() {
  const dispatch = useDispatch();
  const { cookies } = useSelector((state) => state.todoReducer);
  const [isAllDone, setIsAllDone] = useState(false);

  const cookieIcons = [
    "🍭",
    "🍬",
    "🍪",
    "🍘",
    "🥠",
    "🍩",
    "🍦",
    "🍨",
    "🥨",
    "🥐",
    "🥮",
  ];
  const now = new Date();
  const month = now.getMonth();
  const date = now.getDate();

  let newid = uuidv4();
  let cookieIcon = cookieIcons[Math.floor(Math.random() * cookieIcons.length)];
  let cookiedate = `${month}월 ${date}일`;

  useEffect(() => {
    if (isAllDone && !cookies.map((el) => el.date).includes(cookiedate)) {
      dispatch(addCookie(newid, cookieIcon, cookiedate));
    }
    localStorage.setItem("isAllDone", JSON.stringify(isAllDone));
  }, [isAllDone]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/todolist"
          element={<TodoListContainer setIsAllDone={setIsAllDone} />}
        />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/information" element={<Information />} />
        <Route path="/calendar" element={<ToDoCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
