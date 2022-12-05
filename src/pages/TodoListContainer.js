import React, { useEffect } from "react";
import TodoContent from "../components/TodoContent";
import { useState } from "react";
import Nav from "../components/Nav";
import InputBox from "../components/InputBox";

function readContentListsFromLocalstorage() {
  const contentLists = localStorage.getItem("contentLists");
  return contentLists ? JSON.parse(contentLists) : [];
}

export default function TodoListContainer({ setIsAllDone, handleGetCookies }) {
  //콘텐츠(할일)리스트 상태
  const [contentLists, setContentLists] = useState(() =>
    readContentListsFromLocalstorage()
  ); //이렇게 콜백 함수를 이용해서 readContentListsFromLocalstorage 함수를 불러오면 맨 처음 마운트 될 때만 호출되고, 그 이후로는 호출되지 않는다.
  //콜백 함수로 넣어주지 않았을 때는 새로운 리스트를 추가하거나, 삭제할 때마다 해당 함수를 계속 계속 다시 호출했었음.

  //삭제 기능
  const handleDelete = (id) => {
    const deletedLists = contentLists.filter((el) => el.id !== id);
    setContentLists(deletedLists);
  };

  //수정 기능
  const handleUpdate = (updated) => {
    setContentLists(
      contentLists.map((t) => (t.id === updated.id ? updated : t))
    );
  };

  //useEffect는 contentLists 상태가 변경될 때마다 실행된다.
  //1️⃣ 로컬 스토리지에 contentLists 상태를 저장
  //2️⃣ 각 content의 status를 확인하고, 모든 status가 completed인 상태라면 isAllDone 상태를 true로 업데이트 해준다.
  useEffect(() => {
    localStorage.setItem("contentLists", JSON.stringify(contentLists));
    let contentStatus = contentLists.filter((el) => el.status === "completed");
    if (
      contentStatus.length === contentLists.length &&
      contentLists.length !== 0
    ) {
      setIsAllDone(true);
    } else {
      setIsAllDone(false);
    }
  }, [contentLists]);

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
                contentItem={el}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            );
          })}
        </div>
      </div>
      <InputBox contentLists={contentLists} setContentLists={setContentLists} />
    </div>
  );
}
