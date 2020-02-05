import React, { Component } from "react";
import "./projects.scss";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="section-title">
          <h1 id="projects-title">P R O J E C T S</h1>
        </div>

        {/* <!-- One --> */}
        <section id="one" class="tiles">
          <article>
            <div className="overlay"></div>
            <span class="image">
              <img src="" alt="" />
            </span>
  
            <header class="major">
              <h3>
                <a
                  href="https://matt525.github.io/patatapclone/"
                  class="link"
                  style={{ fontWeight: "800" }}
                >
                  Patatap Clone
                </a>
              </h3>
              <p style={{ fontSize: "25px" }}>
                Web application using javascript, and css to trigger audio
                samples and animations upon the press of a key.
              </p>
              <button class="btn blue" style={{ margin: "10px" }} href="https://matt525.github.io/patatapclone/">
                Demo
              </button>
              <button class="btn">Code</button>
            </header>
          </article>
          <article>
            <span class="image">
              <img src="" alt="" />
            </span>
            <header class="major">
              <h3>
                <a
                  href="landing.html"
                  class="link"
                  style={{ fontWeight: "800"}}
                >
                  RGB Color Game
                </a>
              </h3>
              <p style={{ fontSize: "25px" }}>
                Used vanilla JS to create a rgb color guessing game.
              </p>
              <button class="btn blue btn-link" style={{ margin: "10px" }}>
                Demo
              </button>
              <button class="btn btn-link">Code</button>
            </header>
          </article>

          <article>
            <span class="image">
              <img src="" alt="" />
            </span>
            <header class="major">
              <h3>
                <a
                  href="landing.html"
                  class="link"
                  style={{ fontWeight: "800" }}
                >
                  B R E A K O U T
                </a>
              </h3>
              <p style={{ fontSize: "25px" }}>
                Uses vanilla javascript to render and control breakout game
                elements
              </p>
              <button class="btn blue" style={{ margin: "10px" }}>
                Demo
              </button>
              <button class="btn">Code</button>
            </header>
          </article>

          <article>
            <span class="image">
              <img src="images/pic04.jpg" alt="" />
            </span>
            <header class="major">
              <h3>
                <a
                  href="landing.html"
                  class="link"
                  style={{ fontWeight: "800" }}
                >
                  Weather Application
                </a>
              </h3>
              <p style={{ fontSize: "25px" }}>
                Styled application using openWeather API to display current
                weather data
              </p>
              <button class="btn blue" style={{ margin: "10px" }}>
                Demo
              </button>
              <button class="btn">Code</button>
            </header>
          </article>
        </section>
      </div>
    );
  }
}

export default Projects;
