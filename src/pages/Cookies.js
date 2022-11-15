import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import { getCookieData } from "../static/data";

export default function Cookies() {
  const [getCookies, setGetCookies] = useState(getCookieData);
  return (
    <div id="cookies-container">
      <Nav />
      <div id="cookies-body">
        <div id="cookies-box">
          {getCookies.map((el) => {
            return (
              <div className="cookie-box">
                <div className="cookie-icon">{el.cookie}</div>
                <div className="cookie-date">{el.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
