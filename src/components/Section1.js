import React, {Component} from 'react'
import './Section1.css'
class Section1 extends Component{
      render(){
            return(
                  <div className="features-container">
                  <section className="features">
                    <h2>features</h2>
                    <div className="cards">
                      <div className="card">
                        <img className="img2" src="img/third.jpg" alt="home" />
                        <h4>New Magic Keyboard</h4>
                        <p>
                          The updated 13-inch MacBook Pro now features the new Magic
                        </p>
                      </div>
      
                      <div className="card">
                        <img  className="img2" src="img/forth.jpg" alt="home" />
                        <h4>New Magic Keyboard</h4>
                        <p>
                          The updated 13-inch MacBook Pro now features the new Magic
                        </p>
                      </div>
      
                      <div className="card">
                        <img  className="img2" src="img/first.jpg" alt="home" />
                        <h4>New Magic Keyboard</h4>
                        <p>
                          The updated 13-inch MacBook Pro now features the new Magic
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* <img className="wave" src="img/fifth.jpg" alt="wave" /> */}
                </div>
            )
      }
}
export default Section1