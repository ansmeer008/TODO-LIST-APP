import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div id="start-container">
      <div id="start-header">
        <span id="start-title">What cookies? 🍪</span>
        <span id="start-text">
          오늘 할 일을 완료하고 맛있는 쿠키를 먹어보세요!
        </span>
      </div>
      <Link to="/todolist">
        <button id="start-button">Let's Start!</button>
      </Link>
    </div>
  );
}
