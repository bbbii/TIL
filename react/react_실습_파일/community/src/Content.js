import { useState } from "react";
import "./Content.css";

// state 사용
function Content() {
  // let flag = true; ---> flag 값 변화에 따라 ui가 변경되어야 하는데 일반 변수로는 불가능
  let posts = null;
  const [flag, setFlag] = useState(true);
  const change = (e) => {
    console.log(e.target); // 이벤트 대상 가져오기
    // flag가 true였다면 false로 변경, 아니면 true로 변경

    setFlag(!flag); // flag = flag ? false : true;
    console.log(flag);
  };

  if (flag) {
    posts = (
      <div className="article">
        <h3>React 개발 환경 설정</h3>
        <p>2022-11-06</p>
      </div>
    );
  } else {
    posts = (
      <div className="article">
        <h3>React 기본 문법</h3>
        <p>2022-11-07</p>
      </div>
    );
  }

  return (
    <>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      <article>{posts}</article>
      <button onClick={change}>change</button>
    </>
  );
}

export default Content;
