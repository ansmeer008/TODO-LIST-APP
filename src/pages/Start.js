import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div id="start-container">
      <div id="start-header">
        <span id="start-title">What cookies? ๐ช</span>
        <span id="start-text">
          ์ค๋ ํ  ์ผ์ ์๋ฃํ๊ณ  ๋ง์๋ ์ฟ ํค๋ฅผ ๋จน์ด๋ณด์ธ์!
        </span>
      </div>
      <Link to="/todolist">
        <button id="start-button">Let's Start!</button>
      </Link>
    </div>
  );
}
