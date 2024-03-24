import { useState } from "react";

function KeysAndList() {
  const [studentList, setStudentList] = useState([]);

  console.log(studentList, "student list");

  return (
    <>
      <h1>Keys and List</h1>

      <div>
        <input id="inputBox" type="text" />
        <input type="number" />

        <button
          onClick={() => {
            const element = document.getElementById("inputBox");
            const value = element.value;
            setStudentList((oldVal) => [value, ...oldVal]);
          }}
        >
          {" "}
          Add Item In List
        </button>
      </div>

      {/* LIST of STUDENTS  */}
      <div style={{ margin: "10px", padding: "20px" }}>
        {studentList.map((student) => {
          return (
            <div
              style={{
                border: "1px solid black",
                background: "green",
                margin: "10px",
                padding: "10px",
              }}
            >
              {student}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default KeysAndList;
