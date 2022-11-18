function Props(props) {
  // props 넘겨받은 값을 수정해서 사용할 수 있는가?
  // Cannot assign to read only property 'value
  // props.value = props.value + "from App3.js";

  const value1 = props.value + "from App3.js";

  return (
    <>
      <div>{props.value1}</div>
    </>
  );
}

export default Props;
