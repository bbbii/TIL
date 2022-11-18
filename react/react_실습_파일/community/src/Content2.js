import "./Content.css";
import Modal from "./Modal";
import { useState } from "react";

function Content2() {
  // 좋아요 state
  const [like, setLike] = useState([0, 0, 0]);
  // const [count2, setCount2] = useState(0);

  // modal state(기본 안보임)
  const [modal, setModal] = useState(false);

  const displayModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const increase = (e) => {
    console.log(e.target);
    console.log(e.target.id);
    console.log(typeof e.target.id);

    // if (e.target.id == 0) {
    //   setLike(like[0] + 1);
    // } else if (e.target.id == 1) {
    //   setLike(like[1] + 1);
    // } else if (e.target.id == 2) {
    //   setLike(like[2] + 1);
    // }

    const id = Number(e.target.id);

    const newLike = [...like]; // like = [0, 0] ---> newLike 배열로 복사(원본과 연결을 끊은 새로운 복사본)
    newLike[id] = newLike[id] + 1;
    setLike(newLike); // 원본배열을 교체
  };

  return (
    <>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      <article>
        <div className="article">
          <h3 onClick={displayModal}>React 개발 환경 설정</h3>
          <h3>
            {/* <span onClick={() => setLike1(like1 + 1)}>👍</span> {like1} */}
            <span onClick={increase} id="0">
              👍
            </span>{" "}
            {like[0]}
          </h3>
          <p>2022-11-06</p>
        </div>
        <div className="article">
          <h3 onClick={displayModal}>React 기본 문법</h3>
          <h3>
            <span onClick={increase} id="1">
              👍
            </span>{" "}
            {like[1]}
          </h3>
          <p>2022-11-07</p>
        </div>
        <div className="article">
          <h3 onClick={displayModal}>React 기본 문법2</h3>
          <h3>
            <span onClick={increase} id="2">
              👍
            </span>{" "}
            {like[2]}
          </h3>
          <p>2022-11-17</p>
        </div>
      </article>
      {/* moadl 변수의 값이 true라면 modal 컴포넌트 보여주기 */}
      {/* if~else문을 사용할 수 없기 떄문에 삼항연산자 사용 */}
      {modal ? <Modal /> : null}
    </>
  );
}

export default Content2;
