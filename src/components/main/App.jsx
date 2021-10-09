import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

import Header from '../header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
