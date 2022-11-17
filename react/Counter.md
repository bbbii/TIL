# react
### Counter  
누를 때 마다 숫자가 1씩 증가, 감소하는 버튼을 만들고 그 값을 실시간으로 출력하는 페이지를 만들자.
##
* State변수를 사용해 변수의 변화에 따라 페이지를 바로바로 랜더링 하여 출력할 수 있다.
* ```onClick``` : 마우스 클릭에 반응하는 이벤트이다.
```javascript
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
```
***
## 실행결과  

![image](https://user-images.githubusercontent.com/92012512/202407926-81f241ea-65d3-49ec-a49d-8874748bf08d.png)
