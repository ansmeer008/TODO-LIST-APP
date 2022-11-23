import React from "react";
import { useState } from "react";
import { data } from "../static/data";

export default function InputBox({ contentLists, setContentLists }) {
  const [newContent, setNewContent] = useState("");

  const handleChange = (event) => {
    setNewContent(event.target.value);
  };
  const handleClick = () => {
    if (newContent) {
      setContentLists([
        ...contentLists,
        {
          id: Math.random(),
          content: newContent,
          ischecked: false,
          date: new Date(),
        },
      ]);
      setNewContent("");
    }
    setNewContent("");
  };

  return (
    <div id="input-box-container">
      <div id="input-box-body">
        <input
          id="input-box-input"
          type="text"
          placeholder="새로운 일정을 입력해주세요"
          onChange={handleChange}
          value={newContent}
        ></input>
        <button id="input-box-button" onClick={handleClick}>
          🍪
        </button>
      </div>
    </div>
  );
}

//근데 이게 쿠키모양 버튼을 눌렀을 때 데이터가 바뀌어야 하네...
