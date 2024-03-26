import logo from "./logo.svg";
import "./App.css";
import HelloComponent from "./1.BasicReact/1.HelloComponent/HelloComponent";
import CounterComponent from "./1.BasicReact/2.CounterComponent/CounterComponent";
import ListComponent from "./1.BasicReact/3.ListComponent/ListComponent";
import ConditionalRendering from "./1.BasicReact/4.ConditionalRendering/ConditionalRendering";
import MultipleState from "./1.BasicReact/5.MultipleState/1.Multiple_Use_State/MultipleState";
import SingleUseState from "./1.BasicReact/5.MultipleState/2.Single_Use_State/SingleUseState";
import MainContentComponent from "./1.BasicReact/6.WrapperBeautifulComponent/MainContentComponent";
import BeautifulWrapper from "./1.BasicReact/6.WrapperBeautifulComponent/BeautifulWrapper";
import Parent from "./2.Communication/3.Sibling/Parent";
import KeysAndList from "./3.KeysAndList/1.NoKeyProblems/KeysAndListProblem";
import KeysAndListSolution from "./3.KeysAndList/1.NoKeyProblems/KeysAndListSolution";
import IndexAsAKey from "./3.KeysAndList/2.IndexAsKey/IndexAsAKey";
import OwnForm from "./5.Forms/1.OwnForms/OwnForms";
// import Parent from "./2.Communication/2.ChildToParent/Parent";
// import Parent from "./2.Communication/1.ParentToCHild/Parent";

// App Component (Kind of HTMl + pure JS)

function App() {
  const a = 1 + 2;

  const listStudent = [
    {
      id: 1,
      name: "utkasrh",
      classs: 12,
      color: "red",
    },

    {
      id: 2,
      name: "arun",
      classs: 9,
    },

    {
      id: 3,
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
      <CounterComponent heading={"Counter for kids"} />

      {/* <ListComponent students={listStudent} /> */}

      {/* <ConditionalRendering /> */}

      {/* <MultipleState /> */}
      {/* <SingleUseState />

      <div> asadsada </div>

      <input type="text" /> */}

      {/* <BeautifulWrapper beauty={"lipshadeadsadasdas"}>
        <MainContentComponent />
        <MainContentComponent />
      </BeautifulWrapper> */}

      {/* <Parent /> */}

      {/* <Parent /> */}

      {/* <KeysAndList /> */}
      {/* <KeysAndListSolution /> */}

      {/* <IndexAsAKey /> */}

      <OwnForm />
    </>
  );
}

export default App;

// "react": "^18.2.0", -> MANAGING UI (protecting, opttimzed, secure(innerHtml))
//     "react-dom": "^18.2.0", -> SHOWING UI
//     "react-scripts": "5.0.1", -> Interaction b/w REACT and DEVELOPER

// // react people have written Privaacy code, resuability code, Protection code (innerHtml) // manages UI  // shows the UI in desktop // if we want to work with react we need to know how to instruct it.
