//TODO: 체크박스를 아예 새로운 모양으로 바꿔서 기호가 나오도록 만들기
import React from "react";
import { TbTrash } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setCheckboxStatus, deleteToDo } from "../actions";

export default function TodoContent({ tododata }) {
  const { id, content, status } = tododata;
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setCheckboxStatus(id));
    console.log(`체크 잘 된다!${id}`);
  };

  const handleDelete = () => {
    dispatch(deleteToDo(id));
    console.log(`삭제 잘 된다!${id}`);
  };

  return (
    <div className="content-container">
      <input
        className="content-checkbox"
        type="checkbox"
        id={id}
        checked={status === true}
        onChange={() => handleChange()}
      ></input>
      <label htmlFor={id} className="content-text">
        {content}
      </label>
      <button className="content-delete-button" onClick={() => handleDelete()}>
        <TbTrash />
      </button>
    </div>
  );
}
