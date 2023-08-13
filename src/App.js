import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sun from './assets/sun.svg';
import Abin from './assets/Abin.png';
import Portfolio from './assets/Portfolio.png';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Hero-name">
          <img src={Abin} alt="icon" width="60%" height="40%"></img>
          <img src={Portfolio} alt="icon" width="50%"></img>
        </div>
        <div className="Sun-image">
          <img src={Sun} alt="icon" width="70%" height="70%"></img>
        </div>
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
