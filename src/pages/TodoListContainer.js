import React, { useEffect } from "react";
import TodoContent from "../components/TodoContent";
import { useState } from "react";
import Nav from "../components/Nav";
import { data } from "../static/data";
import InputBox from "../components/InputBox";
// import useLocalStorage from "../hooks/useLocalStorage";

export default function TodoListContainer({ setIsAllDone, handleGetCookies }) {
  //콘텐츠(할일)리스트 상태
  const [contentLists, setContentLists] = useState(data);
  //체크된(완료된)할일들 상태이자 할일이 모두 완료되었는지 체크하는 상태

  const [checkedLists, setCheckedLists] = useState([]);

  const handleDelete = (id) => {
    const deletedLists = contentLists.filter((el) => el.id !== id);
    setContentLists(deletedLists);
  };

  useEffect(() => {
    const localContentLists = localStorage.getItem("contentLists");
    console.log(localContentLists, JSON.parse(localContentLists));
    if (localContentLists) {
      setContentLists(JSON.parse(localContentLists));

      const localCheckedLists = localStorage.getItem("checkedLists");
      if (localCheckedLists) {
        setCheckedLists(JSON.parse(localCheckedLists));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contentLists", JSON.stringify(contentLists));
    localStorage.setItem("checkedLists", JSON.stringify(checkedLists));
  }, [contentLists, checkedLists]);

  return (
    <div id="todo-list-container">
      <Nav />
      <div id="todo-list-body">
        <div id="todo-list-box">
          {contentLists.map((el) => {
            return (
              <TodoContent
                key={el.id}
                id={el.id}
                content={el.content}
                handleDelete={handleDelete}
                setCheckedLists={setCheckedLists}
                checkedLists={checkedLists}
                setIsAllDone={setIsAllDone}
                handleGetCookies={handleGetCookies}
              />
            );
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
