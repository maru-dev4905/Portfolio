import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/Home/MainPage';
import AboutPage from './pages/About/AboutPage';
import WorksPage from './pages/Works/WorksPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' component={MainPage} /> */}
          <Route path='/' element={<MainPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/works' element={<WorksPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;