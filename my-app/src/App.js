import React from 'react';
import './App.css';
import Cover from './cover';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="Cover-Page">
        <Cover></Cover>
      </div>
      <div className="About-Page">
        <About></About>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
