import React from "react";
import Nav from "../components/Nav";
import cookieimg from "../img/cookieimg.jpg";

export default function Information() {
  return (
    <div id="info-container">
      <Nav />
      <div id="info-body">
        <div id="info-box">
          <span id="info-title">information</span>
          <img src={cookieimg} id="cookie-img"></img>
          <span>🖥 frontend engineer : Minkyung Kim</span>
          <span> ☎️ contact : ansmeer008@gamil.com</span>
        </div>
      </div>
    </div>
  );
}
