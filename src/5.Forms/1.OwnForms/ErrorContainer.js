function ErrorContainer(props) {
  const { errorString } = props;
  return <div style={{ color: "red", fontWeight: "bold" }}>{errorString}</div>;
}

export default ErrorContainer;
