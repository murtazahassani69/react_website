import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "./soon.css";
class Soon extends Component {
  render() {
    return (
      <div className="Home1">
        <main className="soon">
          <section>
            <h2 className="myh2">Comming soon</h2>
          </section>
          <footer>
            <h1>Lover 2020</h1>
            <ul>
              <a  href="#facebook" className="facebook social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="#twitter" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#instagram" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#linkedin" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="#medium" className="medium social">
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>
            </ul>
          </footer>
        </main>
      </div>
    );
  }
}

export default Soon;
