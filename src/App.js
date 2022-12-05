import React, { useState, useEffect } from "react";
import "./App.css";
import TodoListContainer from "./pages/TodoListContainer";
import Start from "./pages/Start";
import Information from "./pages/Information";
import Cookies from "./pages/Cookies";
import Calendar from "./pages/Calendar";
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

function App() {
  const [getCookies, setGetCookies] = useState(readCookiesFromLocalstorage);
  const [isAllDone, setIsAllDone] = useState(false);

  // const handleGetCookies = () => {
  //   if (isAllDone) {
  //     setGetCookies([
  //       ...getCookies,
  //       {
  //         id: uuidv4(),
  //         cookie: cookieIcons[Math.floor(Math.random() * cookieIcons.length)],
  //         date: `${new Date().getMonth}월 ${new Date().getDate}일`,
  //       },
  //     ]);
  //   }
  // };

  // useEffect(() => {
  //   const localGetCookies = localStorage.getItem("getCookies");
  //   console.log(localGetCookies, JSON.parse(localGetCookies));
  //   if (localGetCookies) {
  //     setGetCookies(JSON.parse(localGetCookies));

  //     const localisAllDone = localStorage.getItem("isAllDone");
  //     console.log(localisAllDone, JSON.parse(localisAllDone));
  //     if (localisAllDone) {
  //       setIsAllDone(JSON.parse(localisAllDone));
  //     }
  //   }
  // }, []);

  useEffect(() => {
    if (isAllDone) {
      setGetCookies([
        ...getCookies,
        {
          id: uuidv4(),
          cookie: cookieIcons[Math.floor(Math.random() * cookieIcons.length)],
          date: `${new Date().getMonth}월 ${new Date().getDate}일`,
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
        <Route path="/cookies" element={<Cookies getCookies={getCookies} />} />
        <Route path="/information" element={<Information />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
