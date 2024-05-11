function EmployeeHierarchy(props) {
  const { data } = props;
  const { name, hasAnyOneUnderHim, item: subordinates } = data;
  console.log(data, "data");

  return (
    <>
      {/* WORK FOR PARENT (CEO) */}

      <div>{name}</div>

      {/* FAITH IN CHILDREN (CTO, COO, VP etc..... ) */}
      <div style={{ marginLeft: "15px" }}>
        {subordinates.map((employee) => {
          return <EmployeeHierarchy data={employee} />;
        })}
      </div>
    </>
  );
}

export default EmployeeHierarchy;
