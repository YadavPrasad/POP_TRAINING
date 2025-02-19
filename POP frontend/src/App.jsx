import Home from './components/FunctionalComponent/Home';
import About from './components/FunctionalComponent/about';
import Signup from './components/FunctionalComponent/signup';
import Gallery from './components/FunctionalComponent/Gallery';
import Contacts from './components/FunctionalComponent/contacts';
import NavBar from './components/FunctionalComponent/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home sjit="Hello, SJIT" />}/>
        </Routes>
      </BrowserRouter>
      <NavBar />
      <Home sjit="Hello, SJIT" />
      <hr/>
      <About />
      <hr/>
      <Signup />
      <hr/>
      <Gallery />
      <hr/>
      <Contacts />
      <hr/>
   </main>
   
  );
}

export default App;

