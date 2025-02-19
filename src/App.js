import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Layout from './components/Layouts';
import Companies from './pages/Companies'
import Industries from './pages/Industries';
import Portfolio from './pages/Portfolio';
import Contactus from './pages/Contactus';
import Scroll from "./Scroll"; // Import the component

const App = () => {
  return (
    <>
      <Scroll />
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/company' element={<Companies/>} />
      <Route path='/industries' element={<Industries/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/contact' element={<Contactus/>} />
    </Route>
      </Routes>
</>
  );
};

export default App;
