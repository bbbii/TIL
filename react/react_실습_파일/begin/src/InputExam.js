import { useState } from "react";
function InputExam() {
  const [text, setText] = useState("");

  return (
    <>
      {/* onChange : input text에 사용하는 이벤트 */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setText("")}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </>
  );
}

export default InputExam;
