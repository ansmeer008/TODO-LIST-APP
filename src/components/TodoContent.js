//TODO: 체크박스를 아예 새로운 모양으로 바꿔서 기호가 나오도록 만들기

import React from "react";
import { useState, useEffect } from "react";
export default function TodoContent({
  id,
  content,
  contentLists,
  handleDelete,
  setCheckedLists,
  checkedLists,
  setIsAllDone,
  handleGetCookies,
}) {
  const handleCheckbox = (checked, id) => {
    if (checked) {
      setCheckedLists((prev) => [...prev, id]);
    } else {
      setCheckedLists(checkedLists.filter((el) => el !== id));
    }
  };

  useEffect(() => {
    if (
      contentLists !== undefined &&
      checkedLists !== undefined &&
      checkedLists.length === contentLists.length
    ) {
      setIsAllDone(true);
    } else {
      setIsAllDone(false);
    }

    handleGetCookies();
  }, [checkedLists]);

  //현재 체크리스트 문제로 애먹는 중... 체크된 녀석들 길이 비교하려고 했는데 계속 먹통...
  //useEffect를 써야하는지 고민중 (checkedLists가 갱신될 때마다 isAllDone을 확인해야하니까?)

  return (
    <div className="content-container">
      <input
        className="content-checkbox"
        type="checkbox"
        checked={checkedLists.includes(id) ? true : false}
        onChange={(e) => {
          handleCheckbox(e.target.checked, id);
        }}
      ></input>
      <span className="content-text">{content}</span>
      <button
        className="content-delete-button"
        onClick={() => handleDelete(id)}
      >
        X
      </button>
    </div>
  );
}
