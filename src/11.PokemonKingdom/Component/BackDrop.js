function BackDrop(props) {
  const { children, onClose } = props;
  return (
    <div
      id="containerbackdrop"
      onClick={(event) => {
        const elemetn = event.target;
        const id = elemetn.id;
        if (id === "containerbackdrop") {
          onClose();
        }
      }}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        background: "rgba(255,255,255,0.4)",
        top: "0px",
        left: "0px",
      }}
    >
      {" "}
      {children}
    </div>
  );
}

export default BackDrop;
