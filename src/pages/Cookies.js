import React from "react";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie } from "../actions";

export default function Cookies() {
  const dispatch = useDispatch();
  const { cookies } = useSelector((state) => state.cookieReducer);
  const handleDeleteCookie = (id) => {
    dispatch(deleteCookie(id));
  };

  // useEffect(() => {
  //   localStorage.removeItem("getCookies");
  //   localStorage.setItem("getCookies", JSON.stringify(getCookies));
  // }, [getCookies]);

  return (
    <div id="cookies-container">
      <Nav />
      <div id="cookies-body">
        <div id="cookies-box">
          <span id="cookies-text">
            매일 할 일을 완료해 쿠키들을 모아보세요!
          </span>
          <div id="cookies">
            {cookies.map((el) => {
              return (
                <div key={el.id} className="cookie-box-container">
                  <div className="cookie-box">
                    <div className="cookie-icon">{el.cookie}</div>
                    <div className="cookie-date">{el.date}</div>
                  </div>
                  <button
                    className="cookie-delete-button"
                    onClick={() => handleDeleteCookie(el.id)}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
