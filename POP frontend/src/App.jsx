import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/FunctionalComponent/Home";
import About from "./components/FunctionalComponent/About";
import Signup from "./components/FunctionalComponent/Signup";
import Gallery from "./components/FunctionalComponent/Gallery";
import Contacts from "./components/FunctionalComponent/Contacts";
import NavBar from "./components/FunctionalComponent/NavBar";
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home sjit="Hello, SJIT" />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/useeffect" element={<UseEffect />} />  {/* Changed route to lowercase */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
