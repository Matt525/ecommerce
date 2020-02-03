import React from "react";
import Landing from "./Landing";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
