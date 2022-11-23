//TODO: 체크박스를 아예 새로운 모양으로 바꿔서 기호가 나오도록 만들기

import React from "react";
import { useState, useEffect } from "react";
export default function TodoContent({
  id,
  content,
  contentLists,
  setContentLists,
  handleDelete,
  setCheckedLists,
  CheckedLists,
  setIsAllDone,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setIsChecked(true);
      setCheckedLists([...CheckedLists, { id }]);
    } else {
      setIsChecked(false);
      const deleteFromCheckedList = CheckedLists.filter((el) => el.id !== id);
      setCheckedLists(deleteFromCheckedList);
    }

    if (CheckedLists.length === contentLists.length) {
      setIsAllDone(true);
    } else {
      setIsAllDone(false);
    }
  };

  return (
    <div className="content-container">
      <input
        className="content-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          handleCheckbox(e);
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
