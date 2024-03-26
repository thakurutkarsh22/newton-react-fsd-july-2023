import { useState } from "react";

const DEFAULT_VALUE_OF_FORM = {
  firstName: "",
  secondName: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
};

const DEFAULT_ERROR_OF_FORM = {
  firstName: "",
  secondName: "",
  email: "",
  phone: "",
};

function OwnForm() {
  const [form, setForm] = useState(DEFAULT_VALUE_OF_FORM);
  const [errorState, setErrorState] = useState(DEFAULT_ERROR_OF_FORM);

  console.log("FORM ::::", form);
  console.log("ERROR ::: ", errorState);

  function onChangeHandler(event, key) {
    setForm((oldValue) => {
      return {
        ...oldValue,
        [key]: event.target.value,
      };
    });

    ValidationForFields(event, key);
  }

  /* ----------- VALIDATION  ---------------- **/

  function ValidationForFields(event, key) {
    const value = String(event.target.value);

    if (key === "firstName") {
      const nameRegex = /^[A-Za-z ]+$/;
      const regexVal = value.match(nameRegex);
      if (!regexVal) {
        setErrorState((old) => {
          return {
            ...old,
            firstName: "Hey we should Write good name what is this!!!",
          };
        });
      }
    } else if (key === "secondName") {
    } else if (key === "email") {
    } else if (key === "phone") {
    } else {
    }
  }

  return (
    <>
      <h1>FORMS </h1>

      <form>
        <label htmlFor="firstName">FirstName*</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "firstName");
          }}
          type="text"
          id="firstName"
        />

        <div style={{ color: "red", fontWeight: "bold" }}>
          {errorState.firstName}
        </div>

        <br />
        <br />
        <br />

        <label htmlFor="secondName">SecondName*</label>
        <input
          type="text"
          id="secondName"
          onChange={(event) => {
            onChangeHandler(event, "secondName");
          }}
        />

        <div style={{ color: "red", fontWeight: "bold" }}>
          {errorState.secondName}
        </div>

        <br />
        <br />
        <br />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          onChange={(event) => {
            onChangeHandler(event, "email");
          }}
        />

        <div style={{ color: "red", fontWeight: "bold" }}>
          {errorState.email}
        </div>

        <br />
        <br />
        <br />

        <label htmlFor="phone">PhoneNo.*</label>
        <input
          type="number"
          id="phone"
          onChange={(event) => {
            onChangeHandler(event, "phone");
          }}
        />

        <div style={{ color: "red", fontWeight: "bold" }}>
          {errorState.phone}
        </div>

        <br />
        <br />
        <br />

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          onChange={(event) => {
            onChangeHandler(event, "gender");
          }}
        >
          <option value={0}>choose from below</option>
          <option value={1}>Female</option>
          <option value={2}>male</option>
          <option value={3}>Dont want to share</option>
        </select>

        <br />
        <br />
        <br />

        <label htmlFor="dob">DOB</label>
        <input
          type="date"
          id="dob"
          onChange={(event) => {
            onChangeHandler(event, "dob");
          }}
        />

        <br />
        <br />
        <br />

        <input type="submit" value={"submit Button"} />
      </form>
    </>
  );
}

export default OwnForm;

// Whenever you are thinking about FORMS
// 1. Think about Values and UI  (whatever is in the UI should also be inside the state variable and VICA VERSA)
// 2. ERROR STATE....
// 3. TOUCH STATE ......
