import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div id="nav-container">
      <span id="nav-title">what cookie?🍪</span>
      <Link to="/menu">
        <div id="nav-menu-button">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </Link>
    </div>
  );
}

//리액트에서 폰트 어썸 적용하기
//https://ssddo-story.tistory.com/15
