// state : 변수 저장

import { useState } from "react";

function Counter() {
  // 일반 변수 선언 방식
  //   let count = 0;

  // state 변수 선언
  // useState() : 초기값, 함수 리턴
  //   console.log("Counter ", useState(0));
  const [count, setCount] = useState(0);

  const increase = () => {
    // count += 1;
    setCount(count + 1);
    console.log(count);
  };

  const decrease = () => {
    // count -= 1;
    setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </>
  );
}
export default Counter;
