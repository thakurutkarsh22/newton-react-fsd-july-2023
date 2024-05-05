import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

function Forms() {
  const saveKey = "formInput";

  const [name, setNameinLocalStorage] = useLocalStorage("name", saveKey);

  const [phone, setPhoneinLocalStorage] = useLocalStorage("phone", saveKey);

  return (
    <>
      <h1>Forms</h1>

      <label htmlFor="name">Name</label>
      <input
        value={name}
        onChange={(e) => {
          setNameinLocalStorage(e.target.value);
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
          setPhoneinLocalStorage(e.target.value);
        }}
        id="phone"
        name="phone"
        placeholder="add phone"
      />

      <br />

      <button>Submit</button>

      {name}
      {phone}
    </>
  );
}

export default Forms;
