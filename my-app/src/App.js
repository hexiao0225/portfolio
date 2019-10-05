import React from 'react';
import './App.css';
import Cover from './Cover';
import About from './About';
import Footer from './Footer';
import ArtistsBook from './ArtistsBook';

function App() {
  return (
    <div className="App">
      <div className="Cover-Page">
        <Cover></Cover>
      </div>
      <div className="About-Page">
        <About></About>
      </div>
      <ArtistsBook></ArtistsBook>
      <Footer className="Footer"></Footer>
    </div>
  );
}

export default App;
