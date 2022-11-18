function User({ user, onRemove, onToggle }) {
  // e.prevemtDefault(); : 태그가 가지고 있는 이벤트 중지
  // e.stopPropagation(); : 이벤트 버블링(이벤트 전파 중지)
  // <a> 링크대로 움직이는 기본값
  // <button></button> : submit 개념
  // <button type="submit"> : 이동
  return (
    <div>
      <b
        onClick={(e) => {
          onToggle(user.id);
          e.stopPropagation();
        }}
        style={{
          cursor: "pointer",
          color: user.active ? "blue" : "red",
        }}
      >
        {user.id} : {user.username}({user.email})
      </b>
      <button
        onClick={(e) => {
          onRemove(user.id);
          e.stopPropagation();
        }}
      >
        삭제
      </button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <>
      {/* users를 보여주는 map코드 작성하기 */}
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default UserList;
