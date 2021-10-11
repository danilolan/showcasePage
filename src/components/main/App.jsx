import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import 'font-awesome/css/font-awesome.css'

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../content/home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Home/>
        <div className="test"></div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
