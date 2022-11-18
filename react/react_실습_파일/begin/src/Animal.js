import { useState } from "react";
// 사진 바꿔 출력하기
function Animal() {
  const [src, setSrc] = useState("./img/dog.jpg");
  const [btn, setBtn] = useState(true);

  const onToggle = () => {
    if (btn) {
      setSrc("./img/cat.jpg");
      setBtn(false);
    } else {
      setSrc("./img/dog.jpg");
      setBtn(true);
    }
  };
  return (
    <>
      <img src={src} alt="" />
      <div>
        <button onClick={onToggle}>사진 변경하기</button>
      </div>
    </>
  );
}

export default Animal;
