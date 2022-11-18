import { useState, useRef } from "react";

// useRef() : 특정 DOM을 선택할 때, re-rendering을 하지 않음(참고만 할 때 사용)

function InputExam3() {
  // input이 여러개 일 때
  const [inputs, setInputs] = useState({ name: "", nickname: "" });
  // 구조분해할당
  const { name, nickname } = inputs;

  //useRef() 변수
  const nameInput = useRef();

  const onChange = (e) => {
    // 어느 input에서 이벤트가 호출되었는가?
    // console.log(e.target);
    // 입력값과 요소의 이름 가져오기
    const { value, name } = e.target;
    // console.log(value, ":", name);
    setInputs({
      // 기존값을 직접 수정하는 것은 허용하지 않는다.
      ...inputs, // 새로 복사된 inputs에
      [name]: value, // name을 세팅하면
    });
  };

  const onReset = () => {
    // name, nickname 둘 다 초기화
    setInputs({
      name: "",
      nickname: "",
    });

    nameInput.current.focus();
  };

  return (
    <>
      <div>
        {/* name은 기본 중복되지 않는다. ---> id 대신 사용 */}
        <input
          type="text"
          placeholder="이름"
          name="name"
          onChange={onChange}
          value={name}
          ref={nameInput}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="닉네임"
          name="nickname"
          onChange={onChange}
          value={nickname}
        />
      </div>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          입력 값 : {name} : {nickname}
        </b>
      </div>
    </>
  );
}

export default InputExam3;
