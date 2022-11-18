function Nav(props) {
  // console.log("Nav props", props);

  const topics = props.topics;
  // const lis = [];

  // for (let index = 0; index < topics.length; index++) {
  //   // console.log(topics[index]);
  //   let topic = topics[index];
  //   lis.push(
  //     <li key={topic.id}>
  //       <a href={"/read/" + topic.id}>{topic.body}</a>
  //     </li>
  //   );
  // }

  return (
    <>
      {/* <nav>
        <ol>{lis}</ol>
      </nav> */}
      <nav>
        {/* topics을 topic에 담아두고 불러오기 */}
        {topics.map((topic) => (
          <li key={topic.id}>
            <a href={"/read/" + topic.id}>{topic.body}</a>
          </li>
        ))}
      </nav>
    </>
  );
}

export default Nav;
