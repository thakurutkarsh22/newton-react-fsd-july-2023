import { useReducer, useRef, useState } from "react";

function UndoMessage() {
  const [sending, setSending] = useState(false);

  //   const [timerId, setTimerId] = useState();

  const ref = useRef();

  function sendHandler() {
    setSending(true);
    const id = setTimeout(() => {
      console.log("hello world");
      setSending(false);
    }, 5000);

    ref.current = id;
  }

  function undoHandler() {
    clearTimeout(ref.current);

    setSending(false);
  }

  return (
    <>
      <h1>Undo messages</h1>

      <div>
        <input placeholder="here goes the message" type="text" />
        <button disabled={sending} onClick={sendHandler}>
          Send
        </button>
      </div>

      {sending && (
        <div>
          <button onClick={undoHandler}>Undo</button>
        </div>
      )}
    </>
  );
}

export default UndoMessage;
