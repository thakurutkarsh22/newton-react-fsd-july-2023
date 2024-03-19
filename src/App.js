import logo from "./logo.svg";
import "./App.css";
import HelloComponent from "./1.BasicReact/1.HelloComponent/HelloComponent";
import CounterComponent from "./1.BasicReact/2.CounterComponent/CounterComponent";
import ListComponent from "./1.BasicReact/3.ListComponent/ListComponent";

// App Component (Kind of HTMl + pure JS)

function App() {
  const a = 1 + 2;

  const listStudent = [
    {
      name: "utkasrh",
      classs: 12,
    },

    {
      name: "arun",
      classs: 9,
    },

    {
      name: "amit",
      classs: 8,
    },
  ];

  return (
    <>
      {/* <HelloComponent name={"tarun"} />

      <HelloComponent name={"utkarsh"} />

      <HelloComponent name={"akash"} />
      <HelloComponent /> */}

      {/* REACT IS CALLING THE COUNTER COMPONENT FUNCTION  */}
      {/* <CounterComponent heading={"Counter for kids"} /> */}

      <ListComponent students={listStudent} />
    </>
  );
}

export default App;

// "react": "^18.2.0", -> MANAGING UI (protecting, opttimzed, secure(innerHtml))
//     "react-dom": "^18.2.0", -> SHOWING UI
//     "react-scripts": "5.0.1", -> Interaction b/w REACT and DEVELOPER

// // react people have written Privaacy code, resuability code, Protection code (innerHtml) // manages UI  // shows the UI in desktop // if we want to work with react we need to know how to instruct it.
