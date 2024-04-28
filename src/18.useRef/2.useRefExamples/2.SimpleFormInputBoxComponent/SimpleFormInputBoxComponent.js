import { useEffect, useRef } from "react";

function SimpleFormInputBoxComponent() {
  const inputBoxReference = useRef();

  useEffect(() => {
    inputBoxReference.current.focus();
  });

  return (
    <>
      <h1>SimpleFormInputBoxComponent</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          ref={inputBoxReference}
          id="inputbox"
          onChange={() => {}}
          type="text"
          placeholder="enter message"
        />
      </div>
    </>
  );
}

export default SimpleFormInputBoxComponent;

// EXAMPLE OF NATIVE (react) input component.
