import React, { Component } from 'react';
import './App.css';
import Adverts from './components/adverts';
import Header from './components/header';

class App extends Component {
  render() {
    let links = [
      { label: 'Home', link: '#home'},
      { label: 'About', link: '#about', active: true  },
      { label: 'Portfolio', link: '#portfolio' },
      { label: 'Contact Us', link: '#contact-us' },
    ];
    return (
      <div className="App">
        <Adverts />
        <div className="container center">
          <Header links={links}  />
        </div>
      </div>
    );
  }
}

export default App;
