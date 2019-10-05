import React from 'react';
import './App.css';
import Cover from './Cover';
import About from './About';
import Footer from './Footer';
import Intro from './Intro';
import { ArtistsBookDescription, PaintingDescription } from './text';

function App() {
  return (
    <div className="App">
      <div className="Cover-Page">
        <Cover></Cover>
      </div>
      <div className="About-Page">
        <About></About>
      </div>
      <div>
        <ArtistsBookDescription></ArtistsBookDescription>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
