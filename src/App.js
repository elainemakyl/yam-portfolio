import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Introduction from './components/Home/Introduction/Introduction';
import Home from './components/Home/Home';
import About from './components/Home/About/About';

function App () {
  return (
    <div className="App">
      <Navbar />
      <Home>
        <Introduction />
        <About/>
      </Home>
    </div>
  );
}

export default App;
