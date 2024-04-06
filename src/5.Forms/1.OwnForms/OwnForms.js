import { useEffect, useState } from "react";
import ErrorContainer from "./ErrorContainer";

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

  //  ----- ******* SUBMISSION ********** ------------
  function onFormSubmission(event) {
    event.preventDefault();

    // Validate ...
    const isFormValid = onSubmissionValidateForm();

    if (isFormValid) {
      // Send the form Object to the server.
      console.log("SEND THE FORM OBJECT TO THE SERVER");
    } else {
      // show the popup
      alert("Form should be Vlaid");
    }

    // GET
    // fetch("aasdasda.com"); // GET
    // fetch("aasdasda.com", { method: "GET" }); // GET

    // fetch("aasdasda.com?name=ram", { method: "GET" }); // GET

    /*
      THERE are 2 way to Send the Data from Browser to Server 
      1. POST -> with Body 
      2. GET -> with Query Params 

    */

    fetch(
      `asadasdaasd.com?${"firstName" + "=" + form.firstName}&${
        "secondName" + "=" + form.secondName
      }&${"gender" + "=" + form.gender}`
    ); // GET

    // POST.
    fetch("aasdasda.com", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function onSubmissionValidateForm() {
    let isFormValid = true;

    const keys = Object.keys(errorState);
    console.log(keys, "keys");

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (errorState[key]) {
        isFormValid = false;
        break;
      }
    }

    return isFormValid;
  }

  //  ----- XXXXXXXXX SUBMISSION XXXXXXXXXXX------------

  function onChangeHandler(event, key) {
    // MAINLY THIS FUNCTION IS SETTING THE VALUES IN FORM
    setForm((oldValue) => {
      return {
        ...oldValue,
        [key]: event.target.value,
      };
    });

    ValidationForFields(event, key);
  }

  function onChangeErrorHandler(errorString, key) {
    setErrorState((old) => {
      return {
        ...old,
        [key]: errorString,
      };
    });
  }

  /* ----------- VALIDATION  ---------------- **/

  function getSpecialCharacters(value = "") {
    // ""utkarsh@@@!@@@!@#""

    const set = new Set();

    for (let i = 0; i < value.length; i++) {
      const ch = value.charAt(i); // 'u'
      const chCode = Number(value.charCodeAt(i)); //117
      console.log(typeof chCode);

      if ((chCode >= 65 && chCode <= 90) || (chCode >= 97 && chCode <= 122)) {
        // IT MEANS my character is a alphabet
      } else {
        // all the things are special character here
        set.add(ch);
      }
    } // {'@', '%', '^'}

    // arrOfSpecialChar MIGHT CONTAINER DUPLICATE VALUES WE DO NOT WANT THAT.

    let arrOfSpecialChar = Array.from(set); // ['@', '%', '^']

    return arrOfSpecialChar.join();
  }

  function ValidationForFields(event, key) {
    const value = String(event.target.value); // "UTKARSH~~~@@##$$"

    const localError = {};

    // array -> storage to  store ~~~@@##$$

    if (key === "firstName") {
      const nameRegex = /^[A-Za-z ]+$/;
      const regexVal = value.match(nameRegex);
      if (value && !regexVal) {
        // Value is there but "UTKARSH~~~@@##$$"
        localError[
          key
        ] = `Name SHould Be Only string No Special Character ${getSpecialCharacters(
          value
        )}`;
      } else if (value && regexVal) {
        // Value is there and it is good "UTKARSH"
        // what Ever Error we had, CLear that
        localError[key] = "";
      } else {
        // Value is EMPTY
        localError[key] = "Required*";
      }
    } else if (key === "secondName") {
    } else if (key === "email") {
    } else if (key === "phone") {
    } else {
    }

    setErrorState((old) => {
      return {
        ...old,
        ...localError,
      };
    });
  }

  return (
    <>
      <h1>FORMS </h1>

      <form onSubmit={onFormSubmission}>
        <label htmlFor="firstName">FirstName*</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "firstName");
          }}
          type="text"
          id="firstName"
        />
        <ErrorContainer errorString={errorState.firstName} />
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

        <ErrorContainer errorString={errorState.secondName} />

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

        <ErrorContainer errorString={errorState.email} />

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
        <ErrorContainer errorString={errorState.phone} />

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

// TODO: add tailwind.
