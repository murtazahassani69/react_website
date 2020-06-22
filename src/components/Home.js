import React, { Component } from "react";
import "./home.css";
// import Media from 'react-media';
class Home extends Component {
  render() {
    return (
      <div>
        <main>
          <div className="nav-container">
            <nav>
              <h1 id="logo">Lover</h1>
              <ul>
                <li>
                  <a className="order" href="#features">features</a>
                </li>
                <li>
                  <a className="order" href="#soon">
                    Order
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <section className="home">
            <div className="showcase">
              <h2>Lica Mac</h2>
              <img src="img/second.jpg" alt="home" />

              <div className="info">
                <h3>MacBook Pro</h3>
                <p>
                  Apple has determined that a small percentage of the keyboards
                  in certain MacBook,
                </p>
                {/* <br /> */}
                {/* <img src="img/first.jpg" alt="first" /> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
