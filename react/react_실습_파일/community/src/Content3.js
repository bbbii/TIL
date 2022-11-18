import "./Content.css";
import Modal from "./Modal";
import { useState } from "react";

function Content3() {
  // 화면에 보여줄 게시물을 배열로 생성하기
  const articleList = [
    { id: 0, title: "React 개발 환경 설정", regdate: "2022-11-06" },
    { id: 1, title: "React 기본 문법", regdate: "2022-11-07" },
    { id: 2, title: "React props", regdate: "2022-11-17" },
    { id: 3, title: "React state", regdate: "2022-11-17" },
  ];

  // modal state(기본 안보임)
  const [modal, setModal] = useState(false);

  // 사용자가 선택한 게시물 id state
  const [target, setTarget] = useState(0);

  // title state
  const [title, setTitle] = useState("");

  // articles state
  const [articles, setArticles] = useState(articleList);

  // 좋아요 state
  // Array(articles.length).fill(0) ---> [0, 0, 0, 0, 0]
  const [like, setLike] = useState(Array(articles.length).fill(0));
  // const [count2, setCount2] = useState(0);

  const change = (e) => {
    setTitle(e.target.value);
  };

  const create = (e) => {
    // 오늘 날짜
    const todayString = new Date();
    // 년,월,일 추출 : 월, 일이 한자리인 경우 (1월 ~ 9월) 자리값을 맞추기
    const year = todayString.getFullYear();
    let month = todayString.getMonth() + 1;
    let date = todayString.getDate();

    month = month > 9 ? month : "0" + month;
    date = date > 9 ? date : "0" + date;

    const today = year + "-" + month + "-" + date;

    // 배열에 추가하려면 { id: 0, title: "React 개발 환경 설정", regdate: "2022-11-06" } 형식으로 만들어야 함
    const newArticle = {
      id: articles.length - 1,
      title,
      regdate: today,
    };

    // 기존 배열 변경하기 : 원본 직접 수정 못하게
    // 글을 뒤에 추가
    // setArticles([...articles, newArticle]);
    setArticles(articles.concat(newArticle));
    // 새 글 추가된 것에 대해 좋아요 수 변경
    setLike([...like, 0]);
    // 새 글 추가 완료 후 text에 빈 문자열 대입
    setTitle("");
  };

  const displayModal = (e) => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }

    // console.log("이벤트 대상", e.target);

    setTarget(e.target.id);
    // console.log("변경된 target ", target);
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
        {articles.map((article) => (
          <div className="article" key={article.id}>
            <h3 onClick={displayModal} id={article.id}>
              {article.title}
            </h3>
            <h3>
              <span onClick={increase} id={article.id}>
                👍
              </span>
              {like[article.id]}
            </h3>
            <p>{article.regdate}</p>
            <p>
              <button
                onClick={(e) => {
                  // 버튼이 가지고 있는 기본동작 중지
                  e.preventDefault();

                  setArticles(
                    articles.filter((article1) => article1.id != article.id)
                  );
                }}
              >
                삭제
              </button>
            </p>
          </div>
        ))}
      </article>

      {/* 새 글 작성 - 1 : 기존 배열에 새 글 정보 추가, 배열의 변경이 일어나면 화면 UI 변경 필요 ---> state */}
      <div>
        <input type="text" onChange={change} value={title} />
        <button onClick={create}>새 글 작성</button>
      </div>

      {/* moadl 변수의 값이 true라면 modal 컴포넌트 보여주기 */}
      {/* if~else문을 사용할 수 없기 떄문에 삼항연산자 사용 */}
      {/* target이 id값을 가지고 있기 때문 */}
      {modal ? <Modal choiceArticle={articles[target]} /> : null}
    </>
  );
}

export default Content3;
