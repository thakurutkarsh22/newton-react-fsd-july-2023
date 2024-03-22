import { Fragment } from "react";
import StudentItem from "./StudentItem";

function ListComponent(props) {
  const { students = [] } = props;

  console.log(students, "props");

  return (
    <Fragment>
      <h1>List component</h1>

      <div Fragment></div>

      {students.map((student, index) => {
        const { id, name, classs, color } = student;

        // NOTE & WARNING: Whenever you are doing LOOP on A UI/COMPONENT.
        /*
          YOU have to use One more prop key prop
          NO 2 STUDENTS SHOULD HAVE SAME KEY.


          INDEX can also be used as a key BUT SHOULD BE THE LAST RESORT 
          (may find bugs also).

        /
        */
        // return (
        //   <div key={id}>

        //   </div>
        // )

        // STUDENT ITEM is taking 3 props -> name, classs, color

        return (
          <StudentItem key={id} name={name} classs={classs} color={color} />
        );
      })}
    </Fragment>
  );
}

export default ListComponent;

// React.fragment

// react.createElement("Fragment", {}, `h1 tag and student map`)

//
