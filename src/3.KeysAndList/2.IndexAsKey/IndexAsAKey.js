import { useState } from "react";

function IndexAsAKey() {
  const [studentList, setStudentList] = useState([]);

  console.log(studentList, "student list");

  return (
    <>
      <h1>Keys and List (Index as the key problem)</h1>

      <div>
        <input id="inputBox" type="text" />
        <input id="inputNumberBox" type="number" />

        <button
          onClick={() => {
            const element = document.getElementById("inputBox");
            const idElement = document.getElementById("inputNumberBox");
            const name = element.value;
            const id = idElement.value;
            const student = {
              name: name,
              id: id,
            };
            setStudentList((oldVal) => [student, ...oldVal]);
          }}
        >
          {" "}
          Add Item In List
        </button>
      </div>

      {/* LIST of STUDENTS  */}
      <div style={{ margin: "10px", padding: "20px" }}>
        {studentList.map((studentObje, index) => {
          const { name, id } = studentObje;
          return (
            <div
              key={index}
              style={{
                border: "1px solid black",
                background: "green",
                margin: "10px",
                padding: "10px",
              }}
            >
              <div>{name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default IndexAsAKey;

// Using Index as a key also flashed few ELEMENTS which should not be FLASED (CHrome Element tab element flashing).
