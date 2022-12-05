//11월 25일
//체크박스까지는 어떻게 구현한 거 같은데
//로컬 스토리지 구현이 또 복병인 것 같다
//일단 리액트에서 로컬 스토리지를 사용하려면 useEffect를 사용해야한다는 건 알겠는데
//구글링해서 보고 따라졌더니 새로고침 되면서 지정했던 내용이 저장되는 것 같았다가 다시 초기화된다...
//이걸 해결할 방법을 찾아야함..제대로 저장이 안 되고 있는 것 같다.

//12월 5일
//1️⃣
//드림코딩 강의 보면서 localStorage로 todolist를 새로고침해도 유지되도록 만드는 데 성공했다
//useEffect를 남용했을 때
//Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
//위와 같은 에러 문구가 뜨면서 무한루프로 계속해서 리랜더링 되는 현상이 발생해서 너무 당황스러웠는데
//이전에 혼자 로컬 스토리지를 구현해보는 과정에서 useEffect를 두 개 만들어뒀던 게 문제였던 것 같다.
//2️⃣
//그냥 input과 button으로만 만들었을 때는 새로운 todo를 입력하는 입력란에서 button을 눌러야만 submit이 되었는데
//input과 button을 div가 아닌 form 태그로 감싸주니까 enter를 눌렀을 때도 submit이 된다...!!
//form 태그가 있다는 걸 어렴풋이 알고는 있었지만 왜 사용을 하는지는 정확히 몰랐었는데 이런 장점이 있었구나...
//3️⃣
//아무런 데이터가 없으면 추가되지 않도록 해줄 때
//스페이스바를 이용해 공백을 몇 개 추가해 준 경우가 있을 수 있으므로 trim으로 앞 뒤의 공백을 모두 제거한 뒤의 length가 0이 아닌지 확인해주어야 한다.
//4️⃣
//uuid 라이브러리 사용해서 id를 좀 더 랜덤하게 만들어 줄 수 있다.

//TODO : 쿠키 발급 날짜 00월 00일로 나오도록 고치기
