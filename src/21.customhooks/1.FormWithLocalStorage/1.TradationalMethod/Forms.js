import { useEffect, useState } from "react";

function Forms() {
  // lazy initialization.

  //   EXPENSIVE its solution is lazy initialization.
  //   const obj = JSON.parse(localStorage.getItem("formInput"));
  //   console.log("expensive outside locaal storage retrival");

  //   const [name, setName] = useState(obj.name);
  //   const [phone, setPhone] = useState(obj.phone);

  const [name, setName] = useState(() => {
    console.log("lazy initilization ");

    const val = JSON.parse(localStorage.getItem("formInput")).name;
    return val ? val : "";
  });
  const [phone, setPhone] = useState(() => {
    console.log("lazy initilization ");
    const val = JSON.parse(localStorage.getItem("formInput")).phone;
    return val ? val : "";
  });

  //   SAVING IN LOCAL SOTRAGE
  useEffect(() => {
    //    Unmount //
    return () => {
      localStorage.setItem(
        "formInput",
        JSON.stringify({
          name,
          phone,
        })
      );
    };
  }, [phone, name]);

  return (
    <>
      <h1>Forms</h1>

      <label htmlFor="name">Name</label>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        id="name"
        name="name"
        placeholder="add Name here"
      />

      <br />

      <label htmlFor="phone">PhoneNumber</label>
      <input
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        id="phone"
        name="phone"
        placeholder="add phone"
      />

      <br />

      <button>Submit</button>

      <br />

      <div>NAME: {name}</div>
      <div>PHONE: {phone}</div>
    </>
  );
}

export default Forms;

// Custom hook / Reusable Logic
// 1. Take care of saving the values in local storage
// 2. Retrieving the value from local storage.

// RULES OF STATING CUSTOM HOOKS
// 1. like useState, useEffect, we have to add "use" keyword in our custom hook
// ex: useLocalStorage, useToggle, useFetch.
