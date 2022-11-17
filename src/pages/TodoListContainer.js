import React from "react";
import TodoContent from "../components/TodoContent";
import { useState } from "react";
import Nav from "../components/Nav";
import { data } from "../static/data";
import InputBox from "../components/InputBox";

export default function TodoListContainer() {
  const [contentLists, setContentLists] = useState(data);

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
      <InputBox contentLists={contentLists} setContentLists={setContentLists} />
    </div>
  );
}
//props로 inputBox에 setContentLists를 handle하는 핸들러 함수를 내려줌
//input 박스에서 들어오는 값을 contentLists 배열에 맨 뒤에 담기도록 해야 함
//아 아닌가 onChange 같은 이벤트가 inputBox에서 일어났으니까 아예 그냥 set함수를 props로
//handler 함수는 inputbox 함수 컴포넌트 내에서~
