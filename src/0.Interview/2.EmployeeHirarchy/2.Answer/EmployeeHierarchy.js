import { useState } from "react";

function EmployeeHierarchy(props) {
  const { data } = props;
  const { name, hasAnyOneUnderHim, item: subordinates } = data;
  console.log(data, "data");

  const [expanded, setExpanded] = useState(true);

  return (
    <>
      {/* WORK FOR PARENT (CEO) */}

      <div
        onClick={() => {
          setExpanded((old) => !old);
        }}
      >
        <span>
          {" "}
          {expanded ? "v" : ">"} {name}
        </span>
      </div>

      {/* FAITH IN CHILDREN (CTO, COO, VP etc..... ) */}
      {expanded && (
        <div style={{ marginLeft: "15px" }}>
          {subordinates.map((employee) => {
            return <EmployeeHierarchy data={employee} />;
          })}
        </div>
      )}
    </>
  );
}

export default EmployeeHierarchy;
