import { useEffect, useState } from "react";

function Life() {
  // 자동실행 - 컴포넌트 라이프 사이클에 의해 동작
  //   useEffect(() => {
  //        마운트되는 시점, 업데이트 되는 시점에 실행할 코드

  //     return () => {
  //       second;
  //        언마운트 되는 시점에 실행할 코드
  //     };
  //   }, [third]); [] : deps(생략) : 마운트, 업데이트 시점
  //

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  // 동작방식 : 동기방식 - 일반적인 웹 개발 방식, 비동기방식 - ajax

  // 비동기 함수
  useEffect(() => {
    console.log("useEffect! 마운트");

    // 1초가 지난 뒤 alert() 창 띄워주기
    const timeout = setTimeout(() => {
      alert("안녕하세요");
    }, 1000);

    return () => {
      console.log("useEffect! 언마운트");
      // 타이머 제거
      clearTimeout(timeout);
    };
  }, [count, flag]);

  return (
    <>
      <div>컴포넌트 라이프 사이클 : {count}</div>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </>
  );
}

export default Life;

// 리액트 스타일링을 위해 설치한 라이브러리
// npm install styled-components
// npm install react-bootstrap bootstrap
