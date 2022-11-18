// import "./App.css";
import Hello from "./Hello";

// 함수형 컴포넌트
function App() {
  return (
    <>
      <h1>Start React!!</h1>
      <p>HTML 작성</p>
      <Hello name="홍길동" age="25" color="red"></Hello>
      <Hello age="30" color="blue"></Hello>
    </>
  );
}

export default App;
