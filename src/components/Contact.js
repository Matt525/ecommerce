import React from "react";
import "./Contact.scss";
import axios from 'axios';


class Contact extends React.Component {
  // *****If initializing state & setting functions in constructor doesn't work, remove state, keep state here, move functiond declarations down to component******
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const form = await axios.post("/api/form", {
      name,
      email,
      message
    });
  }

  render() {
    return (
      <div id="contact">
        {/* Title Section */}
        <div className="section-titles">
          <h1>Contact Me</h1>
        </div>

        {/* F O R M  */}

        <section id="contact-content">
          <section className="left-col">
            <form onSubmit={this.handleSubmit}>
              <div class="fields">
                <div className="field half">
                  <label>Name</label>
                  {/* N A M E  */}
                  <input
                    name="name"
                    type="text"
                    id="name"
                    required
                    onChange={this.handleChange}
                  />
                </div>

                <div className="field half">
                  <label>Email</label>
                  {/* E M A I L */}
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    onChange={this.handleChange}
                  />
                </div>

                <div className="field">
                  <label>Message</label>

                  {/* M E S S A G E   A R E A  */}
                  <textarea
                    id="message"
                    name="message"
                    class="message-input"
                    placeholder="Please write your message here"
                    rows="6"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <ul class="actions">
                <li>
                  <button type="submit" class="btn btn-primary" value="submit">
                    Submit
                  </button>
                </li>
              </ul>
            </form>
          </section>

          {/* Right Column Information */}

          <section class="right-col">
            <section>
              <div class="contact-method">
                <span
                  style={{ marginTop: "25px" }}
                  class="far fa-envelope fa-2x"
                >
                  <h3>Email</h3>
                  <a href="/">malanstaton@gmail.com</a>
                </span>
              </div>
            </section>
            <section>
              <div class="contact-method">
                <span
                  style={{ marginTop: "25px" }}
                  class="fas fa-2x fa-phone-alt"
                />
                <h3>Phone</h3>
                <span> (843)-457-8977 </span>
              </div>
            </section>
            <section>
              <div class="contact-method">
                <span
                  style={{ marginTop: "25px" }}
                  class="fas fa-2x fa-address-card"
                />
                <h3>Address</h3>
                <span>
                  1524 Kemper Avenue
                  <br />
                  James Island, SC 29412
                  <br />
                  United States of America
                </span>
              </div>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default Contact;
