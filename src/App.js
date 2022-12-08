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
// import useLocalStorage from "./hooks/useLocalStorage";

function readCookiesFromLocalstorage() {
  const cookies = localStorage.getItem("getCookies");
  return cookies ? JSON.parse(cookies) : [];
}

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

function App() {
  const [getCookies, setGetCookies] = useState(readCookiesFromLocalstorage);
  const [isAllDone, setIsAllDone] = useState(false);

  useEffect(() => {
    if (
      isAllDone &&
      !getCookies.map((el) => el.date).includes(`${month}월 ${date}일`)
    ) {
      setGetCookies([
        ...getCookies,
        {
          id: uuidv4(),
          cookie: cookieIcons[Math.floor(Math.random() * cookieIcons.length)],
          date: `${month}월 ${date}일`,
        },
      ]);
    }
    localStorage.setItem("getCookies", JSON.stringify(getCookies));
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
        <Route
          path="/cookies"
          element={
            <Cookies getCookies={getCookies} setGetCookies={setGetCookies} />
          }
        />
        <Route path="/information" element={<Information />} />
        <Route path="/calendar" element={<ToDoCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
