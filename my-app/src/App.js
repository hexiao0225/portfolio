import React from 'react';
import Sidebar from 'react-sidebar';
import './App.css';
import Cover from './Cover';
import About from './About';
import Footer from './Footer';
import ArtistsBook from './ArtistsBook';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarIconClicked: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render() {
    return (
      <div className="App">
        <Sidebar
          sidebar={
            <div>
              <button onClick={() => this.onSetSidebarOpen(false)}>
                Close
              </button>
            </div>
          }
          open={this.state.sidebarOpen}
          docked={this.state.sidebarIconClicked}
          onSetOpen={this.onSetSidebarOpen}
          shadow="false"
          pullRight
          styles={{
            sidebar: { background: 'white' },
            overlay: { backgroundColor: 'transparent' }
          }}
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>Portfolio</button>
        </Sidebar>
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
}

export default App;
