import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './MyPortfolio/src/Components/HomePage.jsx';
import NavbarPage from './MyPortfolio/src/Components/NavbarPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavbarPage />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;