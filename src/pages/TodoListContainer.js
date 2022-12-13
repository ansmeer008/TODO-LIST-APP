import React, { useEffect } from "react";
import TodoContent from "../components/TodoContent";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../components/Nav";
import InputBox from "../components/InputBox";

export default function TodoListContainer({ setIsAllDone, handleGetCookies }) {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todoReducer);

  useEffect(() => {
    let contentStatus = todo.filter((el) => el.status === true);
    if (contentStatus.length === todo.length && todo.length !== 0) {
      setIsAllDone(true);
    } else {
      setIsAllDone(false);
    }
  }, [todo]);

  return (
    <div id="todo-list-container">
      <Nav />
      <div id="todo-list-body">
        <div id="todo-list-box">
          {todo.map((todo) => {
            return <TodoContent key={todo.id} tododata={todo} />;
          })}
        </div>
      </div>
      <InputBox />
    </div>
  );
}
