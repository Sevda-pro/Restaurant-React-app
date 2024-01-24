import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Section from './Components/section';
import List from './Components/list';
import Cart from './Components/cart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
