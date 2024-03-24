import { useState } from "react";

function KeysAndListSolution() {
  const [studentList, setStudentList] = useState([]);

  console.log(studentList, "student list");

  return (
    <>
      <h1>Keys and List</h1>

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
        {studentList.map((studentObje) => {
          const { name, id } = studentObje;
          return (
            <div
              key={id}
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

export default KeysAndListSolution;
