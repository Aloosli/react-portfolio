// This is the main component of the app

// import Pages
import GlobalStyle from "./components/GlobalStyle";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import Nav from "./components/nav";
// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/MyWork" element={<MyWork />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
