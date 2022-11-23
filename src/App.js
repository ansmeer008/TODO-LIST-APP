import React, { useState } from "react";
import "./App.css";
import TodoListContainer from "./pages/TodoListContainer";
import Start from "./pages/Start";
import Information from "./pages/Information";
import Cookies from "./pages/Cookies";
import Calendar from "./pages/Calendar";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getCookieData } from "./static/data";

function App() {
  const [getCookies, setGetCookies] = useState(getCookieData);
  const [isAllDone, setIsAllDone] = useState(false);

  //TODO : 여기다가 handleGetCookies 함수 만들어서 TodoContainer에 props로 줘서 변경가능하게
  //만들어야 함

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
