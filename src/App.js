// This is the main component of the app

// import Pages
import GlobalStyle from "./components/GlobalStyle";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import Nav from "./components/Nav";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutMe />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/MyWork" element={<MyWork />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
