import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../actions";
import TodoContent from "./TodoContent";

export default function InputBox() {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todoReducer);
  const [newContent, setNewContent] = useState("");

  const handleChange = (event) => {
    setNewContent(event.target.value);
  };

  //새로운 일정을 추가
  const handleClick = (e) => {
    if (newContent && newContent.trim().length !== 0) {
      e.preventDefault();
      // setContentLists([
      //   ...contentLists,
      //   {
      //     id: uuidv4(),
      //     content: newContent,
      //     date: new Date(),
      //     status: "active",
      //   },
      // ]);
      // setNewContent("");
      let newid = uuidv4();
      dispatch(addToDo(newid, newContent));
    }
    setNewContent("");
  };

  return (
    <div id="input-box-container">
      <form id="input-box-body">
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
      </form>
    </div>
  );
}

//근데 이게 쿠키모양 버튼을 눌렀을 때 데이터가 바뀌어야 하네...
