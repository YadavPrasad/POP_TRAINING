import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/FunctionalComponent/Home.jsx";
import About from "./components/FunctionalComponent/About";
import Gallery from "./components/FunctionalComponent/Gallery";
import Contacts from "./components/FunctionalComponent/Contacts";
import Signup from "./components/FunctionalComponent/Signup";
import Navbar from "./components/FunctionalComponent/Navbar";
import UseState from "./components/FunctionalComponent/Hooks/UseState.jsx";
import Login from "./components/FunctionalComponent/Login"
import UseEffectAPI from "./components/FunctionalComponent/Hooks/UseEffectAPI";
import UseRef from "./components/FunctionalComponent/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponent/Hooks/UseMemo";
import UseCallback from "./components/FunctionalComponent/Hooks/UseCallback";
import UseMemoize from "./components/FunctionalComponent/Hooks/UseMemoize";
import HoC from "./components/FunctionalComponent/HoC/HoC";
import StudentResults from "./components/FunctionalComponent/StudentResults.jsx";
import Faculty from "./components/FunctionalComponent/Faculty.jsx";
import Exam from "./components/FunctionalComponent/Exam.jsx";
import COE from "./components/FunctionalComponent/COE.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home sjit="Hello, SJIT" />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/res" element={<Exam sgpa ="10 sgpa" cgpa = "10 cgpa"/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
