export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_CHECKBOX_STATUS = "SET_CHECKBOX_STATUS";
export const ADD_COOKIE = "ADD_COOKIE";
export const DELETE_COOKIE = "DELETE_COOKIE";

//todo에 새로운 할 일이 추가되는 행동 (inputbox, todocontent 등에 필요할듯)
export const addToDo = (itemId, todoContent) => {
  return {
    type: ADD_TODO,
    payload: {
      itemId,
      todoContent,
    },
  };
};

//todo에서 할 일을 삭제하는 행동
export const deleteToDo = (itemId) => {
  return {
    type: DELETE_TODO,
    payload: {
      itemId,
    },
  };
};

//todo 속 status 속성을 변경하는 행동
export const setCheckboxStatus = (itemId) => {
  return {
    type: SET_CHECKBOX_STATUS,
    payload: {
      itemId,
    },
  };
};

//cookies에 새 쿠키를 추가하는 행동
export const addCookie = (itemId, cookieIcon, cookieDate) => {
  return {
    type: ADD_COOKIE,
    payload: {
      itemId,
      cookieIcon,
      cookieDate,
    },
  };
};

//cookies에서 해당 id를 가진 쿠키를 제거하는 행동
export const deleteCookie = (itemId) => {
  return {
    type: DELETE_COOKIE,
    payload: {
      itemId,
    },
  };
};
