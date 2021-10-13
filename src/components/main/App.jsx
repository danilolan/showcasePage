import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import 'font-awesome/css/font-awesome.css'

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
