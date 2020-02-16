
import './App.css';
import './components/Style/style.css';
import React, { Component } from 'react';
import Head from './components/Head';
import Body from './components/Body';
import Atei from './components/Atei';
import Spinach from './components/Spinach';
import Node from './components/Node';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      
      <div>
        <Head />

        <div>
          <Body />
          <Atei />
          <Spinach />
          <Node />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;