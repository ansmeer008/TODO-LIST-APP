import React from "react";
import { useState } from "react";
export default function ModalMenu() {
  //아래 상태를 Nav 컴포넌트에 만들어서, props로 받아서 사용하도록 하는 게 좋을듯
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="modalmenu-container"></div>
    </>
  );
}

//Custom Component 과제 때 만든 모달 참고해서 만들자.
