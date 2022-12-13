// 11월 25일
// 체크박스까지는 어떻게 구현한 거 같은데
// 로컬 스토리지 구현이 또 복병인 것 같다
// 일단 리액트에서 로컬 스토리지를 사용하려면 useEffect를 사용해야한다는 건 알겠는데
// 구글링해서 보고 따라졌더니 새로고침 되면서 지정했던 내용이 저장되는 것 같았다가 다시 초기화된다...
// 이걸 해결할 방법을 찾아야함..제대로 저장이 안 되고 있는 것 같다.

// 12월 5일
// 1️⃣
// 드림코딩 강의 보면서 localStorage로 todolist를 새로고침해도 유지되도록 만드는 데 성공했다
// useEffect를 남용했을 때
// Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
// 위와 같은 에러 문구가 뜨면서 무한루프로 계속해서 리랜더링 되는 현상이 발생해서 너무 당황스러웠는데
// 이전에 혼자 로컬 스토리지를 구현해보는 과정에서 useEffect를 두 개 만들어뒀던 게 문제였던 것 같다.
// 2️⃣
// 그냥 input과 button으로만 만들었을 때는 새로운 todo를 입력하는 입력란에서 button을 눌러야만 submit이 되었는데
// input과 button을 div가 아닌 form 태그로 감싸주니까 enter를 눌렀을 때도 submit이 된다...!!
// form 태그가 있다는 걸 어렴풋이 알고는 있었지만 왜 사용을 하는지는 정확히 몰랐었는데 이런 장점이 있었구나...
// 3️⃣
// 아무런 데이터가 없으면 추가되지 않도록 해줄 때
// 스페이스바를 이용해 공백을 몇 개 추가해 준 경우가 있을 수 있으므로 trim으로 앞 뒤의 공백을 모두 제거한 뒤의 length가 0이 아닌지 확인해주어야 한다.
// 4️⃣
// uuid 라이브러리 사용해서 id를 좀 더 랜덤하게 만들어 줄 수 있다.

// 12월 7일
// 쿠키 날짜 이상하게 나오던 거 수정함
// 리액트 캘린더 라이브러리 install 하고 디자인 조금 만짐

// 12월 8일
// 1️⃣ 쿠키를 삭제하는 버튼 만들면 로컬 스토리지에서 삭제 되도록 하기
// 위 기능을 구현하다가 에러에 봉착했는데...
// Cannot update a component (`App`) while rendering a different component (`Cookies`). To locate the bad setState() call inside
// 라는 에러였다. 컴포넌트 App을 리렌더링 하는 도중에 Cookies 라는 컴포넌트를 업데이트 할 수 없다..는 뜻 같았다.
// 보통 useEffect를 써주면 해결된다고 되어 있었는데, 나는 해결되지 않아서 뭔가 했더니..
// handleLocalStorageCookie를 onClick이벤트 핸들러로 넘겨줄 때 콜백 함수 형태로 넘겨주지 않아서 그런 거였다..
// onClick={handleLocalStorageCookie(el.id)}을
// onClick={() => handleLocalStorageCookie(el.id)}이렇게 고치니까 해결되었다.
// 이제보니 함수 실행을 전달해서는 안 되는데 안 된다는 짓을 그대로 하고 있었네...?
// https://velog.io/@ansmeer008/TIL-React-custom-component-%EA%B3%BC%EC%A0%9C-advanced
// 위 링크의 추가학습 부분 체크해보면 실행시키고자 하는 이벤트 핸들러 함수를 콜백으로 전달할 수 있다고 되어 있음.
// 함수 자체를 넘겨주는 것은 매개변수를 넘겨줄 필요가 없을 때..!
// 어찌됐건... 함수 실행을 넘겨주는 건 바보똥멍청이짓이었다는 것을...ㅠ
// 2️⃣ 쿠키가 이미 동일 날짜에 발급되어 있다면 더 발급되지 않도록 하기
// 쿠키가 발급되는 시점이 useEffect가 isAllDone의 변화를 감지하고
// isAllDone이 true인지를 확인하는 시점이므로
// isAllDone이 true인지 확인하고 + getCookies 배열 내의 객체 요소들 중 date키의 값들을 새로운 배열로 리턴하고
// 해당 배열에 오늘 날짜 (0월00일 형식)가 존재하는지 검증했다.
// 존재하지 않을 때만 발급되어야 하므로 앞쪽에 느낌표를 붙여주었다.

//12월 10일
// 1️⃣ 캘린더 Css 마무리
// react-calendar 라이브러리 파일 내 CSS 파일을 뜯어보고 내가 바꾸고 싶은 부분을 오버라이딩 했다.
//캘린더 외에도 전체적인 CSS를 조금 만졌음.

//12월 13일
//redux로 세팅을 하려고 하니 localStroage가 걸려서 찾아봤더니
//redux-persist라는 라이브러리를 사용하면 리덕스 내에서 localStorage를 사용할 수 있었다.
//다만 아직 사용법을 잘 모르기도 하고, 이미 로컬 스토리지를 구현한 상태라서 + 상태가 복잡함
//조금 시간을 들여서 수정해야 할 것 같다.
//https://kyounghwan01.github.io/blog/React/redux/redux-persist/#persist-store-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC
