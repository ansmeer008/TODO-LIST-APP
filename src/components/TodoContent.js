import React from "react";
export default function TodoContent({ content }) {
  return (
    <div className="content-container">
      <input type="checkbox"></input>
      <span className="content-text">{content}</span>
    </div>
  );
}
