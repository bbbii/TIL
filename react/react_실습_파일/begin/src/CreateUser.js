function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <>
      <div>
        <input
          type="text"
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
        />
        <input
          type="text"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
        <button onClick={onCreate}>회원가입</button>
      </div>
    </>
  );
}
export default CreateUser;
