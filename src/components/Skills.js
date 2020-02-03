import React from "react";
import "./Skills.scss";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    let move = () => {};
  }

  render() {
    return (
      <div id="skills-container">
        <div class="section-title">
          <h1>S K I L L S</h1>
        </div>

        <div className="skills-wrapper">
          <div className="skill html">
            <div className="title" style={{ padding: "10px" }}>
              <h1>Proficient</h1>
              <p>
                Understanding of HTML elements, setup, and implementation in web
                applications
              </p>
              <div
                class="w3-container w3-round w3-blue"
                style={{
                  width: "100%",
                  background: "rgba(23,200,100)",
                  padding: "10px"
                }}
              >
                100%
              </div>
            </div>
          </div>
          <div className="skill css">
            <div className="title" style={{ padding: "10px" }}>
              <h1>Advanced High</h1>
              <p>
                Understanding of css core properties, flexbox, grid, and
                keyframes use for animations.
              </p>
              <div
                class="w3-container w3-round w3-blue"
                style={{
                  width: "80%",
                  background: "rgba(23,200,100)",
                  padding: "10px"
                }}
              >
                80%
              </div>
            </div>
          </div>
          <div className="skill javascript">
            <div className="title" style={{ padding: "10px" }}>
              <h1>Advanced Low</h1>
              <p>
                Understanding of fundamentals (>ES6), functions, primitives,
                arrays, objects, loops, and arguments.
              </p>
              <div
                class="w3-container w3-round w3-blue"
                style={{
                  width: "70%",
                  background: "rgba(23,200,100)",
                  padding: "10px"
                }}
              >
                70%
              </div>
            </div>
          </div>
          <div className="skill jquery">
            <div className="title" style={{ padding: "10px" }}>
              <h1>Intermediate Low</h1>
              <p>
                Understanding of core routing, error handling, and setting up a
                local server.
              </p>
              <div
                class="w3-container w3-round w3-blue"
                style={{
                  width: "40%",
                  background: "rgba(23,200,100)",
                  padding: "10px"
                }}
              >
                40%
              </div>
            </div>
          </div>
          <div className="skill react">
            <div className="title" style={{ padding: "10px" }}>
              <h1>Intermediate</h1>
              <p>
                Understanding of core skills including components and lifecycle.
              </p>
              <div
                class="w3-container w3-round w3-blue"
                style={{
                  width: "50%",
                  background: "rgba(23,200,100)",
                  padding: "10px"
                }}
              >
                50%
              </div>
            </div>
          </div>
        </div>

        {/* Row two */}
        <div className="skills-wrapper">
          <div className="skill node">
            <div className="title2" style={{ padding: "10px" }}>
              <h1>Intermediate</h1>
              <p>
                Understanding of core routing, error handling, and setting up a
                local server.
              </p>
              <div
                class="w3-container w3-round w3-blue"
                style={{
                  width: "50%",
                  background: "rgba(23,200,100)",
                  padding: "10px"
                }}
              >
                50%
              </div>
            </div>
          </div>
          <div className="skill express">
            <div className="title2" style={{ padding: "10px" }}>
              <h1>Intermediate</h1>
              <p>
                Understanding of core routing, error handling, and setting up a
                local server.
              </p>
              <div
                class="w3-container w3-round w3-blue"
                style={{
                  width: "45%",
                  background: "rgba(23,200,100)",
                  padding: "10px"
                }}
              >
                45%
              </div>
            </div>
          </div>
          <div className="skill git">
            <div className="title2" style={{ padding: "10px" }}>
              <h1>Advanced</h1>
              <p>
                Understanding of core routing, error handling, and setting up a
                local server.
              </p>
              <div
                class="w3-container w3-round w3-blue"
                style={{
                  width: "80%",
                  background: "rgba(23,200,100)",
                  padding: "10px"
                }}
              >
                80%
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
