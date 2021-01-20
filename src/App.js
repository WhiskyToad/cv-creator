import React, { Component } from "react";
import Name from './Components/Name';
import Image from './Components/Image';
import General from './Components/General';
import About from './Components/About';
import KeyPoints from './Components/KeyPoints';
import Work from './Components/Work';
import Education from './Components/Education';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id = "container">
          <div id = "left-container">
            <Image />
            <General />
            <KeyPoints />
            <About />
          </div>
          <div id = "right-container">
            <Name />
            <Work />
            <Education />
          </div>
        </div>
      </div>
    )};
}

export default App;