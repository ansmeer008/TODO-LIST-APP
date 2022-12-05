//TODO: 체크박스를 아예 새로운 모양으로 바꿔서 기호가 나오도록 만들기

import React from "react";
import { TbTrash } from "react-icons/tb";
export default function TodoContent({
  id,
  contentItem,
  handleDelete,
  handleUpdate,
}) {
  const { content, status } = contentItem;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    handleUpdate({ ...contentItem, status: status });
  };

  return (
    <div className="content-container">
      <input
        className="content-checkbox"
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      ></input>
      <label htmlFor="checkbox" className="content-text">
        {content}
      </label>
      <button
        className="content-delete-button"
        onClick={() => handleDelete(id)}
      >
        <TbTrash />
      </button>
    </div>
  );
}
