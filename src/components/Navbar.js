import React from "react";
import "./Navbar.scss";

class Navbar extends React.Component {
  // on component mount
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const nav = document.getElementById("navbar");
      let scrolled = window.pageYOffset >= 1300;

      // const aboutRange = window.pageYOffset > 1800 && window.pageYOffset < 2500;
      // const developeRange =
      //   window.pageYOffset > 2500 && window.pageYOffset < 3300;
      // const projectsRange =
      //   window.pageYOffset > 4100 && window.pageYoffset < 4900;
      // const contactRange =
      //   window.pageYoffset > 5700 && window.pageYoffset < 6500;

      // const about = document.getElementsByClassName("about");
      // const development = document.getElementsByClassName("development");
      // const projects = document.getElementsByClassName("projects");
      // const contact = document.getElementsByClassName("contact");

      // const arr = [
      //   aboutRange,
      //   developeRange,
      //   projectsRange,
      //   contactRange,
      //   contactRange
      // ];

      // // iterating through array to prove true and highlight section on navbar accordingly

      // let indexItems = () => {
      //   arr.forEach(items => {
      //     if (items === true) {
      //       items.classList.add("hightlight");
      //     } else {
      //       items.clasList.remove("highlight");
      //     }
      //   });
      // };

      // indexItems();

      if (scrolled) {
        nav.classList.add("stick");
      }

      // if (aboutRange) {
      //   about.classList.add("highlight");
      // }
      // if (developeRange) {
      //   development.classList.add("highlight");
      // }
      else {
        nav.classList.remove("stick");
        // about.classList.remove("highlight");
        // development.classList.remove("highlight");
        // projects.classList.remove("highlight");
        // contact.classList.remove("hightlight");
      }
    });
  }

  render() {
    return (
      <div id="navbar">
        <p id="header-title">Matthew Staton</p>
        <div class="right-group">
          <p className="nav-selection">About Me</p>
          <p className="nav-selection">Development</p>
          <p className="nav-selection">Projects</p>
          <p className="nav-selection">Contact Me</p>
        </div>
        <i class="fas fa-bars" />
      </div>
    );
  }
}

export default Navbar;
