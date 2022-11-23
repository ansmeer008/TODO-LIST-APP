import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";

export default function Cookies({ getCookies }) {
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
