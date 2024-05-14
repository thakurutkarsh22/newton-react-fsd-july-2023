import { Route, Routes } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import SocialPage from "./src/pages/SocialPage";
import LibraryPage from "./src/pages/LibraryPage";
import LoginPage from "./src/pages/LoginPage";
import Navbar from "./src/components/Navbar/Navbar";

function MusicPlayBackApp() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/social" element={<SocialPage />}></Route>
        <Route path="/library" element={<LibraryPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default MusicPlayBackApp;
