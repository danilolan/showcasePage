import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

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
