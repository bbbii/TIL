function Article(props) {
  console.log("Article props ", props);

  return (
    <>
      <article>
        <h2 style={{ color: props.color }}>Welcome</h2>
        Hello, React
      </article>
    </>
  );
}

export default Article;
