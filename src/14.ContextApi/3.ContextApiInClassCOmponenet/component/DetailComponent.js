import { Children, Component } from "react";
import ThemeClassContext from "../context/ThemeClassContext";
import LoginContext from "../context/LoginContext";

class DetailComponent extends Component {
  // I cantt use useContext();
  render() {
    return (
      <>
        <h1>Detail Component </h1>
        <LoginContext.Consumer>
          {(props) => {
            console.log(props, "LoginContext props");
            const { user = "asdasda" } = props;
            return (
              <>
                <h4>THE USER LOGGED IN IS {user}</h4>
                <ThemeClassContext.Consumer>
                  {(props) => {
                    console.log(props, " ThemeClassContext props");
                    const { theme } = props;
                    return <h1>HEading for theme: ::: {theme}</h1>;
                  }}
                </ThemeClassContext.Consumer>
              </>
            );
          }}
        </LoginContext.Consumer>
      </>
    );
  }
}

export default DetailComponent;
