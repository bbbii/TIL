import "./Hello.css";

// function Hello(props) {
function Hello({ name, age, color }) {
  // JSX 문법
  // 보여줄 태그가 2개 이상이라면 부모 태그가 필요하다.
  // 태그는 쌍으로 작성 (여는태그, 닫는태그)
  // 스크립트 변수를 사용할 때 {} 안에 사용
  // CSS 파일로 적용된 디자인을 사용하려면 className 키워드 사용
  // return문 안에서 주석 넣는 방식 : {/* */}
  // 태그에 직접 style 지정 가능 : {{ }}

  // let name = "react";

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fornSize: "24px",
    padding: "1rem",
  };

  return (
    <>
      <h1>안녕하세요</h1>
      <h2>안녕히 계세요</h2>
      <p>반갑습니다</p>
      <br />
      {/* <p style={style}>
        {props.name} - {props.age}
      </p> */}

      <p style={style}>
        {name} - {age}
      </p>
      {/* 원래 작성 방식 : <div class="gray-box"> */}
      <div className="gray-box"></div>
      <div style={{ color: "white", background: "black" }}>JSX 스타일 문법</div>
    </>
  );
}

//props에 값이 넘어오지 않은 경우
Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
