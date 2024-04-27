import { createPortal } from "react-dom";

function Portals(props) {
  const { title, content } = props;
  return (
    <>
      {createPortal(
        <>
          <div
            style={{
              position: "fixed",
              margin: "auto",
              width: "50%",
              background: "red",
              color: "white",
              border: "1px solid black",
              padding: "10px",
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   width: "50vw",
              //   height: "20vh",
              //   background: "red",
              //   color: "white",
              //   border: "1px solid black",
              //   padding: "10px",
            }}
          >
            {title}
          </div>
        </>,
        document.getElementById("portal-container")
      )}
    </>
  );
}

export default Portals;
