import React from "react";
import { Link } from "react-router-dom";

export default function InputBox() {
  return (
    <div id="input-box-container">
      <div id="input-box-body">
        <input
          id="input-box-input"
          type="text"
          placeholder="새로운 일정을 입력해주세요"
        ></input>
        <button id="input-box-button">🍪</button>
      </div>
    </div>
  );
}
