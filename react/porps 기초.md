# react
### porps 기초

* porps : 부모 컴포넌트가 자식 컴포넌트에게 값을 전달하는 방법  
* App2의 자식 컴포넌트인 Nav에 배열 값을 넘겨주기 위한 방법에 대해 학습한다.

```javascript
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";

function App2() {
  const topics = [
    { id: 1, title: "html", body: "HTML" },
    { id: 2, title: "CSS", body: "CSS" },
    { id: 3, title: "JavaScript", body: "JAVASCROPT" },
  ];

  return (
    <>
      <Header
        title="study"
        name="hong"
        onClick={() => alert("Header 클릭")}
      ></Header>
      <Nav topics={topics}></Nav>
      <Article color="red"></Article>
    </>
  );
}

export default App2;

```
