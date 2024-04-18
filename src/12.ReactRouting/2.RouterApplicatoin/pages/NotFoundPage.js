import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>Page not Found</h1>
      <div>
        <button
          style={{
            width: "100px",
            height: "40px",
            borderRadius: "8px",
            background: "blue",
          }}
          onClick={() => {
            return navigate("/mentor");
          }}
        >
          Go to HomePAge{" "}
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
