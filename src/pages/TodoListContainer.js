import React from "react";
import TodoContent from "../components/TodoContent";
import { useState } from "react";
import Nav from "../components/Nav";
import { data } from "../static/data";
import InputBox from "../components/InputBox";

export default function TodoListContainer() {
  const [contentLists, setContentLists] = useState(data);

  const handleList = () => {};

  return (
    <div id="todo-list-container">
      <Nav />
      <div id="todo-list-body">
        <div id="todo-list-box">
          {contentLists.map((el) => {
            return <TodoContent key={el.id} content={el.content} />;
          })}
        </div>
      </div>
      <InputBox />
    </div>
  );
}
