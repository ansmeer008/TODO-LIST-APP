import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div id="menu-container">
      <Link to="/todolist">
        <div className="menu-button">🍪</div>
      </Link>
      <Link to="/todolist">
        <div className="menu-button">Today's List</div>
      </Link>
      <Link to="/cookies">
        <div className="menu-button">Cookies</div>
      </Link>
      <Link to="/calendar">
        <div className="menu-button">Calendar</div>
      </Link>
      <Link to="/information">
        <div className="menu-button">Information</div>
      </Link>
    </div>
  );
}

//menu의 밑줄은 Link에서 오는데, 이 링크는 Css상에서는 a태그로 사용됨
//그렇기 때문에 css에 a태그 text-decoration을 none으로 설정하면 됨
