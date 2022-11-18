import { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App4() {
  // input state
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  //users state
  const [users, setUsers] = useState([
    { id: 1, username: "velocity", email: "velocity@gamil.com", active: true },
    { id: 2, username: "eclipse", email: "eclipse@gamil.com", active: false },
    { id: 3, username: "tiger", email: "tiger@gamil.com", active: true },
  ]);

  // imput값 변화에 따른 inputs변경 함수
  const { username, email } = inputs;
  const onChange = (e) => {
    // 어느 inpus에서 왔는지 확인
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // id값 관리
  const nextId = useRef(4);

  // user 등록 함수
  const onCreate = (e) => {
    // 회원등록 { id: 1, username: "velocity", email: "velocity@gmail.com "}
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers([...users, user]); // setUsers(users.concat(user))

    // 회원등록 버튼 클릭하면 input 필드는
    setInputs({
      username: "",
      email: "",
    });

    // nextId값 하나 증가시키기
    nextId.current += 1;
  };

  // 회원 삭제 함수
  const onRemove = (id) => {
    // filter()
    setUsers(users.filter((user) => user.id !== id));
  };

  // 회원 수정 함수(active)
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App4;
