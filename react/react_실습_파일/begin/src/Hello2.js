import "./Hello.css";

function Hello2({ name, color, isSpecial }) {
  if (isSpecial) {
    console.log("true 임");
  } else {
    console.log("false 임");
  }

  // 삼항연산자
  console.log(isSpecial ? "true 임" : "false 임");

  return (
    <>
      <h1 style={{ color: color }}>
        {isSpecial ? "* " : null}
        안녕하세요 - {name}
      </h1>
    </>
  );
}

//props에 값이 넘어오지 않은 경우
Hello2.defaultProps = {
  name: "이름없음",
};

export default Hello2;
