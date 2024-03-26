import { useState } from "react";

const DEFAULT_VALUE_OF_FORM = {
  firstName: "",
  secondName: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
};

function OwnForm() {
  const [form, setForm] = useState(DEFAULT_VALUE_OF_FORM);

  console.log("latest from", form);
  console.log("latest from", form.secondName);

  function onChangeHandler(event, key) {
    setForm((oldValue) => {
      return {
        ...oldValue,
        [key]: event.target.value,
      };
    });
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
