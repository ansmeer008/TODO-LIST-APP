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
// import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [getCookies, setGetCookies] = useState(getCookieData);
  const [isAllDone, setIsAllDone] = useState(false);

  //TODO : 여기다가 handleGetCookies 함수 만들어서 TodoContainer에 props로 줘서 변경가능하게
  //만들어야 함
  const handleGetCookies = () => {
    if (isAllDone) {
      setGetCookies([
        ...getCookies,
        {
          id: Math.random(),
          cookie: "🍩",
          date: `${new Date().getMonth}월 ${new Date().getDate}일`,
        },
      ]);
    }
  };

  useEffect(() => {
    const localGetCookies = localStorage.getItem("getCookies");
    console.log(localGetCookies, JSON.parse(localGetCookies));
    if (localGetCookies) {
      setGetCookies(JSON.parse(localGetCookies));

      const localisAllDone = localStorage.getItem("isAllDone");
      console.log(localisAllDone, JSON.parse(localisAllDone));
      if (localisAllDone) {
        setIsAllDone(JSON.parse(localisAllDone));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("getCookies", JSON.stringify(getCookies));
    localStorage.setItem("isAllDone", JSON.stringify(isAllDone));
  }, [getCookies, isAllDone]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/todolist"
          element={
            <TodoListContainer
              setIsAllDone={setIsAllDone}
              handleGetCookies={handleGetCookies}
            />
          }
        />
        <Route path="/cookies" element={<Cookies getCookies={getCookies} />} />
        <Route path="/information" element={<Information />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
