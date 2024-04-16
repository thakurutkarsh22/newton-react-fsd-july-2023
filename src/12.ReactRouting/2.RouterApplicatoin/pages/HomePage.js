import FAQ from "../components/FAQ";
import WelcomeComponent from "../components/WelcomeComponent";

function HomePage() {
  return (
    <>
      <WelcomeComponent />

      <div style={{ margin: "10px" }}>Wecome to be part of 1 % elite</div>

      <FAQ />
    </>
  );
}

export default HomePage;
