function Header(props) {
  console.log("Header props", props);

  return (
    <>
      <header>
        <h1>
          {/* porps로 object를 받고 .key 로 접근 */}
          <a href="/" onClick={props.onClick}>
            {props.name} Front 개발 - {props.title}
          </a>
        </h1>
      </header>
    </>
  );
}

export default Header;
