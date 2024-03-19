function ListComponent(props) {
  const { students = [] } = props;

  console.log(students, "props");

  return (
    <React.Fragment>
      <h1>List component</h1>

      {students.map((student) => {
        const { name, classs } = student;

        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "red",
              padding: "20px",
              margin: "20px",
            }}
          >
            <div>{name}</div>
            <div>{classs}</div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default ListComponent;

// React.fragment

// react.createElement("Fragment", {}, `h1 tag and student map`)
